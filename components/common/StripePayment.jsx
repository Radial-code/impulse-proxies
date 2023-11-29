import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { paymentService } from "./services";
import { CircularProgress } from "@mui/material";
import getStripePromise from './getStripePromise';

function StripePayment({ open, handleOpen, payload }) {
  const [loader, setLoader] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState("");
  useEffect(() => {
    if (open) {
      
      getStripePromise().then((data)=>{
        setStripePromise(data);
      });
      
      setLoader(true);
      paymentService.getSessionForTopUp(payload).then((response) => {
        if (response.data.status == 200) {
          setClientSecret((prev) => response.data.clientSecret);
        } else {
          setClientSecret("");
          console.log(response.data.message);
        }
        setLoader(false);
      })
      .catch((e) => {
        setClientSecret("");
        setLoader(false);
        console.log(e);
      });
    }
  }, [open]);

  return (
    <>
      
      <Dialog fullScreen open={open} onClose={handleOpen}>
        <div className="flex justify-end">
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleOpen}
            aria-label="close"
          >
            <CloseIcon /> 
          </IconButton>
        </div>
        {loader ? (
          <div className="flex justify-center mt-4">
            <CircularProgress size={24} />
          </div>
        ) : (
          stripePromise &&
          clientSecret && (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )
        )}
      </Dialog>
      
    </>
  );
}

export default StripePayment;
