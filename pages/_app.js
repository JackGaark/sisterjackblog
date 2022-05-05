import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { StaticKitProvider } from '@statickit/react'
import { DefaultSeo } from 'next-seo'
import '../styles/global.css'
import SEO from '../lib/next-seo.config'
import Fonts from '../components/Fonts'
import theme from '../styles/theme'
import '../styles/code.theme.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fonts />
      <ColorModeProvider value="#cccccc" options={{}}>
        <StaticKitProvider site="1e9b12e6d292">
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </StaticKitProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}
