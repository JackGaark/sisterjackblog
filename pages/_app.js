import { Global, css } from "@emotion/react";
import Head from 'next/head';
import {
  ChakraProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode
} from "@chakra-ui/react";
import { StaticKitProvider } from "@statickit/react";
import { DefaultSeo } from "next-seo";
import "../styles/global.css";
import SEO from "../lib/next-seo.config";
import theme from "../styles/theme";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <CSSReset />
        <Head>
        <link href="https://blogfonts.com/css/aWQ9MTk4OTg2JnN1Yj05ODYmYz1yJnR0Zj1SYW51YVRyaWFscy1Cb2xkSXRhbGljLm90ZiZuPXJhbnVhLXRyaWFscy02/Ranua Trials.otf" rel="stylesheet" type="text/css"/>
        </Head>

      <Global
        styles={`
        /* latin */
        @font-face {
          font-family: 'RanuaTrials-BoldItalic';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('./RanuaTrials-BoldItalic.otf') format('otf');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        `}
      />
      {children}
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider value="light" options={{
        useSystemColorMode: true
      }}>
        <GlobalStyle>
          <StaticKitProvider site="1e9b12e6d292">
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </StaticKitProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
