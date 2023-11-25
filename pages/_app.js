import { GlobalInformation } from "@/components/common/Provider";
import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalInformation>
        <Component {...pageProps} />
      </GlobalInformation>
    </SessionProvider>
  );
}
