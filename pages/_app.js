import { Global, css } from "@emotion/react";
import {
  ChakraProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { StaticKitProvider } from "@statickit/react";
import { DefaultSeo } from "next-seo";
import "../styles/global.css";
import SEO from "../lib/next-seo.config";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? "Dark" : "Light"};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
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
