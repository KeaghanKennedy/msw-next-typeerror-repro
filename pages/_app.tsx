import type { AppProps } from "next/app";
import { initMocks } from "../src/test/mocks";
import "../styles/globals.css";

initMocks();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
