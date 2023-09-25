import Container from '../../components/Container'
import { Box, Text, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Code from '../../components/Code'
import NextLink from 'next/link'

const Superbonjour = () => {
  console.log('Yey update me')

  const code = `const myName = "super bonjour"`

  const textStyle = {
    width: { base: '80vw' },
    fontSize: '18px',
    fontWeight: '400',
    paddingY: '30px',
    paddingX: '40px',
  }

  return (
    <Container>
      <NextSeo
        title="Contact Us | Jack Gaarkeuken | Developer | Youtuber"
        description="Contact Page for Jack Gaarkeuken"
      />
      {/* <Heading>Superbonjour</Heading> */}
      {/* <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code> */}
      <Box w="100vw" alignItems="flex-start" padding="10" margin="0">
        <Flex
          alignItems="flex-start"
          wrap="wrap"
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
        ></Flex>
        <Box width={{ base: '100vw', md: '42vw' }}>
          <Heading size="2xl" mb={2} as="h1" paddingY="30px">
            <Link href="/">Super Bonjour</Link>
          </Heading>
          <Box>
            <Image
              width={{ base: '100vw', md: '100%' }}
              height="40vh"
              // boxShadow="2xl"
              objectFit="cover"
              src="../image_8.jpg"
              alt="sport picture"
            />
          </Box>
        </Box>
      </Box>
      <Text {...textStyle}>
        I chose to build this site in Svelte, in part for the faster load and
        build times. Portfolio sites can be very heavy in content, so I wanted a
        solution that could perform well with massive amounts of photo and
        videoguvchkcgfgu data. Also knowing that later updates to the site may
        mean even more content will be added.
      </Text>
      <Text {...textStyle}>
        I spent a considerable amount of time finding the best solutions for
        optimization. That’s when Cloudinary came in. I wanted to reduce the
        load time as much as possible. Amazon AWS could have also been an
        option. But Cloudinary felt easier to use, simpler — when it comes to
        ease of use, when products consider new devs with empathy, I’m always
        down.
      </Text>
      <Text {...textStyle}>
        While the design appears simple, the complexity in the code was real!
        Svelte does a great job to efficiently handle data reactivity and
        properties. Vertical parallax (on desktop) and carousel combo, the two
        way binding (thankyou SVELTE for doing this automatically!!), dynamic
        index on the way finding, and the layers of fixed modules, etc. Just a
        few of things that contributed to challenges at hand!
      </Text>
      <Text {...textStyle}>
        And of course the CSS, the styling. Combining different font treatments
        between the modals, the wayfinding and the copy slides, the varying
        layouts within each slide, and not to mention the differences for
        mobile. Working with the designers to understand their intentions was
        really key to guide my understanding of the design, how to make it
        responsive and the way I structured my code.
      </Text>
    </Container>
  )
}

export default Superbonjour
