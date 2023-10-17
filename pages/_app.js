import { GlobalInformation } from "@/components/common/Provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalInformation>
      <Component {...pageProps} />
    </GlobalInformation>
  );
}
