import React from 'react'
import { Flex, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      justify="right"
      mb={4}
      paddingY="5px"
      paddingX="30px"
      color="orange.300"
    >
      <Link
        href="https://www.instagram.com/jaco.svg/"
        target="_blank"
        pr={12}
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        IG
      </Link>
      <Link
        href="https://twitter.com/JacoSvg"
        target="_blank"
        pr={6}
        rel="noopener noreferrer"
        aria-label="Youtube Link"
      >
        TW
      </Link>
    </Flex>
  )
}
