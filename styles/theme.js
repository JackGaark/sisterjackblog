import { extendTheme, theme as base } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
        heading: `RanuaTrials-BoldItalic, ${base.fonts?.heading}`,
        body: `RanuaTrials-BoldItalic ${base.fonts.body}`,
      },
});

export default theme;