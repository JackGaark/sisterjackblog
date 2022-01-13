import Container from "../components/Container";
import {
  Stack,
  Flex,
  Heading,
  Box,
  Grid,
  useColorMode,
  Text
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";
export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Container>

      <NextSeo
        title="Home | Jack Gaarkeuken | Developer "
        description="Homepage of James Perkins"
      />
      <Stack
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="900px"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="900px"
        >
          <Heading as="h2" mb={6} size="xl" textAlign="center">
            Jack Gaarkeuken
          </Heading>
          <Heading as="h3" mb={6} size="xl" textAlign="center">
            Developer
          </Heading>
         <Text color='gray.500' isTruncated>
  Lorem ipsum is placeholder text commonly used in the graphic, print, and
  publishing industries for previewing layouts and visual mockups.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
