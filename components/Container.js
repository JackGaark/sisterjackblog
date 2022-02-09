import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  Heading
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Container({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };
  const primarytextColor = {
    light: "black",
    dark: "white",
  };
  const navBgColor = {
    light: "rgba(255,255,255, 0.8)",
    dark: "rgba(23,25,35, 0.8)",
  };
  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={{ base: '2', md: '40px'}}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        {/* <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        /> */}
        <Heading padding={0} fontSize="36px" color="orange.300">
          Jack Gaarkeuken
        </Heading>
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/projects" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Projects
            </Button>
          </NextLink>
          <a href="https://github.com/JackGaark" target="_blank">
            <Button as="a" variant="ghost" p={[1, 4]}>
              Github
            </Button>
          </a>
          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Contact
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        // px={{base: 2, md: 8}}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
}
