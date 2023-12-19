import React, { useEffect, useState } from "react";
import { CircularProgress, Stack } from "@mui/material";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { orderService } from "@/components/common/services";

function loginSuccess() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [syncing, setSyncing] = useState(true);
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [
      fragment.get("access_token"),
      fragment.get("token_type"),
    ];

    if (!accessToken) {
      router.push("/");
    } else {
      login(accessToken, tokenType);
    }
  }, []);

  const login = async (accessToken, tokenType) => {
    try {
      const res = await signIn("credentials", {
        token_type: tokenType,
        access_token: accessToken,
        redirect: false,
      });

      setLoader(false);
      if (res.error) {
        setResponseData("error");
        setTimeout(() => {
          router.push("/");
        }, 1000);
        return;
      }
      setResponseData("success");
      syncingData();
    } catch (error) {
      console.log(error, "error");
    }
  };

  const syncingData = async () => {
    let sessionStorageOrderData = sessionStorage.getItem('orderData');
    if (sessionStorageOrderData) {
      const orderDataArray = JSON.parse(sessionStorageOrderData);
      const payload = {
        orderData: orderDataArray,
      };
      orderService
        .syncingData(payload)
        .then((response) => {
            router.replace("/dashboard-data-usage?type=residential");
              sessionStorage.removeItem("orderData");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setSyncing(false);
      setTimeout(() => {
        router.replace("/dashboard-data-usage?type=residential");
      }, 1000);
    }
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ textAlign: "center", marginTop: 5 }}
      >
        {loader ? (
          <CircularProgress size={24} />
        ) : responseData == "success" ? (
          <>
             {syncing ? (
                <>
                <br />
                <Typography variant="h4" color="white">
                    syncing data...    {" "}
                </Typography>
                <br />
                </>
                ) : (
                <></>
                )}
                
            <Typography variant="h4" color="white">
              Login Successful!
            </Typography>
          </>
        ) : (
          <p style={{ color: "red" }}>
            Something went wrong! Please try again later.
          </p>
        )}
      </Stack>
    </>
  );
}

export default loginSuccess;
