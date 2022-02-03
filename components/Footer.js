import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Flex justify="right" mb={4} paddingY="5px">
      <Link
        href="#"
        pr={12}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        <FontAwesomeIcon
          padding={6}
          icon={faInstagram}
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
    </Flex>
  );
}
