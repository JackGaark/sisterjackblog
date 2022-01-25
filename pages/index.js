import Container from "../components/Container";
import {
  Flex,
  useColorMode,
  Text,
  Spacer,
  Box,
  UnorderedList,
  ListItem,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";
export default function Home() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const borderColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  return (
    <Container maxWidth="container.xl" padding={0}>
      <NextSeo
        title="Home | Jack Gaarkeuken | Developer "
        description="Homepage of Jack Gaarkeuken"
      />
        <Text width="1018px" height="258px" mt={2} marginLeft="40px" fontSize="36px" fontWeight="normal" lineHeight="43px" fontStyle="normal">
          Insert a solid intro statement here. Hi, I'm Jack. Great to meet you. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here. Insert a solid intro statement here.
        </Text>
        <Divider borderColor='orange.300' />
          <Flex wrap="wrap" alignItems="start">
            <Box width="20vw" p="15px" marginLeft="268px">
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">CV</Text>
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">Bootcamp</Text>
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">Online Classes</Text>
              </Box>
                <Box width="40vw" p="5px">
                  <Flex wrap="wrap" mr="400px" spacing={4} marginBottom={4} color={useColorModeValue('orange.300')}>
                      <a href="https://github.com/JackGaark" target="_blank">
                          LinkedIn
                      </a>
                    <Spacer spacing={1}/>
                      <a href="https://github.com/JackGaark" target="_blank">
                          Github
                      </a>
                    </Flex>
                      <Text marginBottom={4}>
                          Le Wagon, Montreal Qc.
                      </Text>
                    <UnorderedList>
                        <ListItem textColor="orange.300">Advanced React, Name of School</ListItem>
                        <ListItem>
                          <Flex>
                            <Text>
                              Complete Intro to React,
                            </Text>
                            <Text color="orange.300"> Name of School</Text>
                          </Flex>
                        </ListItem>
                        <ListItem>Advanced React, Name of School</ListItem>
                        <ListItem>Complete Intro to React, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                        <ListItem>Gatsby Workshops, Name of School</ListItem>
                    </UnorderedList>
                </Box>
                </Flex>
                <Divider borderColor='orange.300' />
                <Flex alignItems="start">
                <Box width="20vw" p="15px" marginLeft="268px">
                      <Text mt={2} fontSize="18px" fontWeight="normal" lineHeight="22px" fontStyle="normal">CONTACT</Text>
                </Box>
                <Box width="40vw" p="15px">
                    <Text width="560px" height="140 px" mt={2} fontSize="18px" fontWeight="400" lineHeight="21.6px" fontStyle="normal">
                    My pronouns are he/him.  And I am fluent in english and in french. I am located in Montreal, Qc.

                    Always happy to hear about new opportunities localy and remote.  The best way to reach me is via email or on LinkedIn.
                    </Text>
                </Box>
              </Flex>
    </Container>
  );
}
