import { extendTheme, theme as base } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
        heading: `RanuaTrials-BoldItalic, ${base.fonts?.heading}`,
        body: `RanuaTrials-BoldItalic ${base.fonts.body}`,
      },
      colors: {
        orange: {
          300: '#F67B08'
        }
      },
});

export default theme;