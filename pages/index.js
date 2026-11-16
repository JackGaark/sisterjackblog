import Container from '../components/Container'
import {
  Flex,
  Text,
  Spacer,
  Box,
  UnorderedList,
  ListItem,
  Divider,
  useColorModeValue,
  Hide,
} from '@chakra-ui/react'

import { NextSeo } from 'next-seo'
export default function Home() {
  const textStyle = {
    width: '70vw',
    mt: [2, 4, 6, 8],
    marginLeft: { base: '24px', md: '40px', lg: '36px' },
    fontSize: { base: '24px', md: '40px', lg: '36px' },
    fontWeight: 'normal',
    lineHeight: { base: '22px', md: '43px' },
    fontStyle: 'normal',
  }

  return (
    <Container maxWidth="container.xl" padding={0} display={{ md: 'flex' }}>
      <NextSeo
        title="Jack Gaarkeuken | Front-end developer and designer, fintech"
        description="Front-end developer and designer in Montreal, with more than ten years of prior experience in finance as a business analyst."
      />
      <Text {...textStyle}>
        I spent more than ten years in finance as a business analyst before I
        wrote any production code. For the roles I am after now, that order is
        the point. I have seen financial products from the business side: how
        they are specified, where the requirements get complicated, and how
        quickly an unclear number costs a user’s trust.
      </Text>
      <Text {...textStyle}>
        Today I design and build front ends: design systems, Figma to code,
        React, Svelte and TypeScript. My most recent project won an Applied
        Arts design award. Craft matters, but in finance it is not enough. An
        interface also has to be exact: clear states, honest figures,
        components that hold up under real data.
      </Text>
      <Text {...textStyle}>
        My view is that most people do not struggle with money because the
        right products are missing, but because the interfaces explain them
        badly. That is the problem I want to work on. Based in Montreal,
        working in English and French, open to local and remote roles.
      </Text>
      <Divider
        borderColor="orange.300"
        width="80vw"
        paddingY="20px"
        marginLeft={{ base: '20px', md: '40px' }}
      />
      <Flex wrap="wrap" alignItems="start" paddingY="36px">
        <Hide breakpoint="(max-width: 400px)">
          <Box
            width={{ base: '100vw', md: '20vw' }}
            p="5px"
            marginLeft={{ base: '8px', md: '268px' }}
          >
            <Text
              mt={2}
              fontSize="18px"
              fontWeight="normal"
              lineHeight="22px"
              fontStyle="normal"
            >
              CV
            </Text>
            <Text
              mt={2}
              fontSize="18px"
              fontWeight="normal"
              lineHeight="22px"
              fontStyle="normal"
            >
              Bootcamp
            </Text>
            <Text
              mt={2}
              fontSize="18px"
              fontWeight="normal"
              lineHeight="22px"
              fontStyle="normal"
            >
              Online Classes
            </Text>
          </Box>
        </Hide>
        <Box width={{ base: '100vw', md: '40vw', sm: '28vw' }} p="5px">
          <Flex
            wrap="wrap"
            mr="400px"
            marginLeft="11px"
            spacing={4}
            marginBottom={4}
            color={useColorModeValue('orange.300')}
          >
            <a
              href="https://www.linkedin.com/in/jack-gaarkeuken/"
              target="_blank"
            >
              LinkedIn
            </a>
            <Spacer spacing={1} />
            <a href="https://github.com/JackGaark" target="_blank">
              Github
            </a>
          </Flex>
          <Flex marginLeft="11px">
            <Text color="orange.300" marginRight="10px">
              <a href="https://www.lewagon.com/fr/montreal" target="_blank">
                Le Wagon,
              </a>
            </Text>
            <Text>Montreal, Qc.</Text>
          </Flex>
          <UnorderedList>
            <Box mt={{ base: 4, md: 1 }} ml={{ md: 0 }}>
              <Box flexShrink={0}>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Advanced React,</Text>
                    <Text color="orange.300">
                      <a href="https://wesbos.com/courses" target="_blank">
                        Wes Bos
                      </a>
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Complete Intro to React,</Text>
                    <Text color="orange.300">
                      <a
                        href="https://www.lewagon.com/fr/montreal"
                        target="_blank"
                      >
                        Le Wagon
                      </a>
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Gatsby Workshops,</Text>
                    <Text color="orange.300">
                      <a href="https://frontendmasters.com/" target="_blank">
                        Front End Masters
                      </a>
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Intermediate React,</Text>
                    <Text color="orange.300">
                      <a href="https://frontendmasters.com/" target="_blank">
                        Front End Masters
                      </a>
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Angular Fundamentals,</Text>
                    <Text color="orange.300">
                      <a href="https://www.newline.co/" target="_blank">
                        NewLine
                      </a>
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">React with Typescript,</Text>
                    <Text color="orange.300">NewLine</Text>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex>
                    <Text marginRight="10px">Advanced CSS,</Text>
                    <Text color="orange.300">SuperHi</Text>
                  </Flex>
                </ListItem>
              </Box>
            </Box>
          </UnorderedList>
        </Box>
      </Flex>
      <Divider
        borderColor="orange.300"
        width="80vw"
        marginLeft={{ base: '20px', md: '40px' }}
      />
      <Flex wrap="wrap" alignItems="start">
        <Box
          width={{ base: '100vw', md: '20vw' }}
          p="15px"
          marginLeft={{ base: '0', md: '268px' }}
        >
          <Text
            mt={2}
            fontSize="18px"
            fontWeight="normal"
            lineHeight="22px"
            fontStyle="normal"
          >
            CONTACT
          </Text>
        </Box>
        <Box width={{ base: '100vw', md: '40vw' }} p="15px">
          <Text
            height="140 px"
            mt={2}
            fontSize="18px"
            fontWeight="400"
            lineHeight="21.6px"
            fontStyle="normal"
          >
            My pronouns are he/him. And I am fluent in english and in french. I
            am located in Montreal, Qc. <br></br>
            <br></br>Always happy to hear about new opportunities locally and
            remote. The best way to reach me is via email or on LinkedIn.
          </Text>
        </Box>
      </Flex>
      {/* <Box padding="32px">
        <Divider borderColor="orange.300" width="30vw" marginLeft="68%" />
      </Box> */}
    </Container>
  )
}
