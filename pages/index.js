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
        title="Home | Jack Gaarkeuken | Developer "
        description="Homepage of Jack Gaarkeuken"
      />
      <Text {...textStyle}>
        Hi, I’m Jack. I am a front end developer based in Montreal, Qc. After
        10+ years working in finance as a Business Analyst, I went back to
        school to start a new career as a developper. 4-ish years ago, I
        completed a bootcamp at Le Wagon, and many online courses. My focus now
        is front end development — contributing to great web design and
        experiences, striving to build pixel perfect sites, learning about all
        the ways I can code in more elegant, robust and modular ways. I’m also
        interested in FinTech, the intersection of these two industries
        fascinates me — democratizing finance, thinking of new tools, improving
        interfaces and people general experience in daily money stuff
      </Text>
      <Text {...textStyle}>
        Looking forward to connecting with you. I am happy to work locally and
        remotely. I speak four languages (including French and English) — I’m
        great with people and teamwork, and I’m a very hard worker. Talk soon!
      </Text>
      <Text {...textStyle}>
        PS — My latest project won an Applied Arts design award! Check it out!
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
            <br></br>Always happy to hear about new opportunities localy and
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
