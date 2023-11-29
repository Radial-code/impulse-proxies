import React, { useEffect, useState } from 'react'
import { CircularProgress, Stack } from "@mui/material";
import { Typography } from '@material-tailwind/react';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'

function loginSuccess() {
    const router = useRouter();
    const [loader, setLoader] = useState(true);
    const [responseData, setResponseData] = useState("");

    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        if (!accessToken) {
            router.push("/");
        } else {
            login(accessToken, tokenType);
        }
    }, [])

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
            setTimeout(() => {
                router.replace("/dashboard-data-usage?type=residential");
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                sx={{ textAlign: "center", marginTop: 5 }}
            >
                {loader ? (
                    <CircularProgress size={24} />
                ) :
                    responseData == "success" ?
                        <Typography variant="h4" color="white">Login Successful!</Typography>
                        : <p style={{ color: "red" }}>Something went wrong! Please try again later.</p>}
            </Stack>
        </>
    )
}

export default loginSuccess