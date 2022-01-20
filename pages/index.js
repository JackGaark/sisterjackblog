import Container from "../components/Container";
import {
  Flex,
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
            {/* <Heading fontSize="36px" fontWeight="normal" lineHeight="43px" fontStyle="normal">
              Jack Gaarkeuken
              </Heading>
              <Heading as="h3" fontSize="36px" fontWeight="normal" lineHeight="43px" fontStyle="normal">
                Developer
              </Heading> */}
                <Text width="1018px" height="258px" mt={2} fontSize="36px" fontWeight="normal" lineHeight="43px" fontStyle="normal">
                Insert a solid intro statement here. Hi, I'm Jack. Great to meet you. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here.
                </Text>
                <Flex alignItems="start">
                    <Box width="20vw" p="15px">
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">CV</Text>
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">Bootcamp</Text>
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">Online Classes</Text>
                    </Box>
                    <Box width="40vw" marginLeft="5vw" p="15px">
                      <Flex marginBottom={4}>
                        <a href="https://github.com/JackGaark" target="_blank">
                          LinkedIn
                        </a>
                        <Spacer />
                          <a href="https://github.com/JackGaark" target="_blank">
                            Github
                          </a>
                      </Flex>
                        <Text marginBottom={4}>
                            Le Wagon, Montreal Qc.
                        </Text>
                      <UnorderedList>
                        <ListItem>Advanced React, Name of School</ListItem>
                        <ListItem>Complete Intro to React, Name of School</ListItem>
                        <ListItem>Advanced React, Name of School</ListItem>
                        <ListItem>Complete Intro to React, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                      </UnorderedList>
                    </Box>
                </Flex>
                <Flex alignItems="start">
                <Box width="20vw" p="15px">
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">CONTACT</Text>
                </Box>
                <Box width="40vw" marginLeft="5vw" p="15px">
                    <Text width="1018px" height="258px" mt={2} fontSize="36px" fontWeight="normal" lineHeight="43px" fontStyle="normal">
                    My pronouns are he/him.  And I am fluent in engliusha dn french

                    Always happy to hear about new opportunities localy and remote
                    </Text>
                </Box>
                </Flex>
    </Container>
  );
}
