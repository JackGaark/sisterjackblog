import Head from "next/head";
import Container from "../components/Container";
import {
  Stack,
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Grid,
  useColorMode,
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";
export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <NextSeo
        title="Home | James Perkins | Developer | Youtuber"
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
          <Heading as="h2" mb={6} size="2xl" textAlign="center">
            James Perkins
          </Heading>
          <Heading as="h3" mb={6} size="lg" textAlign="center">
            Developer | <span>Teacher</span> <span>| Blogger</span>
          </Heading>
          <Grid
            p={6}
            columnGap={6}
            templateColumns="auto 1fr"
            alignItems="center"
          >
            <Image
              rounded="10%"
              loading="eager"
              maxWidth="200px"
              src="./me.jpg"
              alt="James Perkins Picture"
              ignoreFallback
            />
            <Box>
              <Text fontSize="lg">
                👋 My name is James! I am a developer who specializes in backend
                Development.
              </Text>
            </Box>
          </Grid>
          <Grid
            as="a"
            href="https://www.youtube.com/channel/UC-zet8Eyyy-OUE_fmocp3Wg"
            p={8}
            columnGap={6}
            marginTop={4}
            borderBottom="2px solid"
            borderColor="gray.100"
            target="_blank"
            rel="noopener noreferrer"
            templateColumns="auto 1fr"
            alignItems="center"
          >
            {colorMode === "dark" ? (
              <Image
                maxWidth="300px"
                loading="eager"
                target="_blank"
                rel="noopener noreferrrer"
                src="./yt_logo_rgb_dark.png"
                alt="Youtube Logo Dark."
                ignoreFallback
              />
            ) : (
              <Image
                maxWidth="300px"
                loading="eager"
                target="_blank"
                rel="noopener noreferrrer"
                src="./yt_logo_rgb_light.png"
                alt="Youtube Logo Light."
                ignoreFallback
              />
            )}

            <Box>
              <Text fontSize="lg">I create Youtube Content</Text>
              <Text mb={6}>
                I upload videos every Tuesday, that covers interview questions
                and development.
              </Text>
            </Box>
          </Grid>
          <Grid
            as="a"
            href="https://twitch/tv/jamesperkins"
            p={8}
            columnGap={6}
            marginTop={4}
            borderBottom="2px solid"
            borderColor="gray.100"
            target="_blank"
            rel="noopener noreferrer"
            templateColumns="auto 1fr"
            alignItems="center"
          >
            <Image
              maxWidth="300px"
              loading="eager"
              target="_blank"
              rel="noopener noreferrrer"
              src="./Twitch.png"
              alt="Twitch logo"
              ignoreFallback
            />
            <Box>
              <Text fontSize="lg">I livestream on Twitch.tv</Text>
              <Text mb={6}>
                My Livestreams tackle things that mgiht take longer than a
                video.{" "}
              </Text>
              <Text>
                You can find me streaming on Sundays previously I have tackled
                codewars, Frontendmentor.io and more!
              </Text>
            </Box>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  );
}
