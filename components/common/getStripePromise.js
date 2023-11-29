let stripePromise = "";
const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
import { loadStripe } from "@stripe/stripe-js";
const getStripePromise = async () => {
    console.log(key);
    if(stripePromise) {
        return stripePromise
    } else {
        stripePromise = await loadStripe(key);
        return stripePromise
    }
}

export default getStripePromise;