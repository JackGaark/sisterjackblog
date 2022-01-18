import Container from "../components/Container";
import {
  Flex,
  Heading,
  useColorMode,
  Text,
  Spacer,
  Box,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";
export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Container maxWidth="container.xl" padding={0}>
      <NextSeo
        title="Home | Jack Gaarkeuken | Developer "
        description="Homepage of James Perkins"
      />
            <Heading size="2xl">
              Jack Gaarkeuken
              </Heading>
              <Heading as="h3" mb={6} size="2xl" textAlign="left">
                Developer
              </Heading>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="left">
                Insert a solid intro statement here. Hi, I'm Jack. Great to meet you. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here.
                </Text>
                <Flex justifyContent="center">
                    <Box bg='tomato' width="30vw">
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">CV</Text>
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">Bootcamp</Text>
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">Experience</Text>
                    </Box>
                    <Box bg='tomato' width="30vw" marginLeft="5vw">
                      <Flex>
                        <Box>
                          <Text>
                            LinkedIn
                          </Text>
                          <Text>
                            Le Wagon, Montreal Qc.
                          </Text>
                        </Box>
                          <Spacer />
                        <Box>
                          <Text>
                            Github
                          </Text>
                        </Box>
                      </Flex> 
                      <UnorderedList>
                        <ListItem>Advanced React, Name of School</ListItem>
                        <ListItem>Complete Intro to React, Name of School</ListItem>
                        <ListItem>Advanced React, Name of School</ListItem>
                        <ListItem>Complete Intro to React, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                      </UnorderedList>
                    </Box>
                </Flex>
    </Container>
  );
}
