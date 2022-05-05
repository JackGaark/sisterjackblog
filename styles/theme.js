import { extendTheme, theme as base } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: `RanuaTrials`,
    body: `RanuaTrials`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(
          '#cccccc' /*Ligh background color*/,
          '#222222' /* Dark background color */
        )(props),
      },
    }),
  },
  colors: {
    orange: {
      300: '#F67B08',
    },
  },
})

export default theme
