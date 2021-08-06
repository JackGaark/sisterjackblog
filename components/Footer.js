import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Flex justify="center" mb={4}>
      <Link
        href="#"
        pr={12}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <FontAwesomeIcon
          padding={6}
          icon={faYoutube}
          size="2x"
          color="#eb3223"
        />
      </Link>
      <Link
        href="#"
        pr={6}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb" />
      </Link>
      <Link
        pl={4}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <FontAwesomeIcon icon={faTwitch} size="2x" color="#644398" />
      </Link>
    </Flex>
  );
}
