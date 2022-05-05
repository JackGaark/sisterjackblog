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
          '#EFF2F4' /*Ligh background color*/,
          '#EFF2F4' /* Dark background color */
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
