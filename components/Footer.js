import React from "react";
import { Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex justify="right" mb={4} paddingY="5px" paddingX="30px" color="orange.300">
      <Link
        href="#"
        pr={12}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <a href="https://www.instagram.com/jaco.svg/" target="_blank">
                          IG
        </a> 
      </Link>
      <Link
        href="#"
        pr={6}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <a href="https://twitter.com/JacoSvg" target="_blank">
                          TW
        </a>
      </Link>
    </Flex>
  );
}
