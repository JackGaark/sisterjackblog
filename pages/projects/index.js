import Container from '../../components/Container'
import NextLink from 'next/link'
import {
  Link,
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Flex,
  Button,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Footer from '../../components/Footer'

const Projects = (image) => {
  const textStyle = {
    fontSize: '18px',
    fontWeight: '400',
    paddingY: '30px',
  }

  return (
    <Container>
      <NextSeo
        title="Projects | Jack Gaarkeuken"
        description="Selected projects by Jack Gaarkeuken"
      />
      <Box w="100vw" alignItems="flex-start" padding="10" margin="0">
        <Flex
          alignItems="flex-start"
          wrap="wrap"
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
        >
          <Box width={{ base: '100vw', md: '42vw' }}>
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              <a href="/projects/superbonjour" target="_blank">
                Super Bonjour
              </a>
            </Heading>
            <Box>
              <a href="/projects/superbonjour" target="_blank">
                <Image
                  width={{ base: '100vw', md: '100%' }}
                  height="60vh"
                  // boxShadow="2xl"
                  objectFit="cover"
                  src="./image_8.jpg"
                  alt="sport picture"
                />
              </a>
            </Box>
            <Text {...textStyle}>
              I chose to build this site in Svelte, in part for the faster load
              and build times. Portfolio sites can be very heavy in content, so
              I wanted a solution that could perform well with massive amounts
              of photo and video data. Also knowing that later updates to the
              site may mean even more content will be added.
            </Text>

            <Text {...textStyle}>
              I spent a considerable amount of time finding the best solutions
              for optimization. That’s when Cloudinary came in. I wanted to
              reduce the load time as much as possible. Amazon AWS could have
              also been an option. But Cloudinary felt easier to use, simpler —
              when it comes to ease of use, when products consider new devs with
              empathy, I’m always down.
            </Text>

            <Text {...textStyle}>
              While the design appears simple, the complexity in the code was
              real! Svelte does a great job to efficiently handle data
              reactivity and properties. Vertical parallax (on desktop) and
              carousel combo, the two way binding (thankyou SVELTE for doing
              this automatically!!), dynamic index on the way finding, and the
              layers of fixed modules, etc. Just a few of things that
              contributed to challenges at hand!
            </Text>

            <Text {...textStyle}>
              And of course the CSS, the styling. Combining different font
              treatments between the modals, the wayfinding and the copy slides,
              the varying layouts within each slide, and not to mention the
              differences for mobile. Working with the designers to understand
              their intentions was really key to guide my understanding of the
              design, how to make it responsive and the way I structured my
              code.
            </Text>

            <Text {...textStyle}>
              Understanding the content (creative work) and the people I built
              this site for (creatives) was crucial: in this case, it meant
              doing a lot of work to maintain the integrity of the framing and
              ratios of each image, regardless of weight, size, browser and
              device. This condition was foundational in the decision I had to
              make. For mobile, particularly, this meant an entire new approach:
              we built it on Javascript to maintain the ratios and allow for
              navigation on a rotated device.
            </Text>

            <Flex
              alignItems="flex-end"
              wrap="wrap"
              justifyContent={{ base: 'flex-end', md: 'flex-end' }}
            >
              {/* <Link
                href="/superbonjour"
                as={NextLink}
                variant="ghost"
                p={[1, 4]}
              >
                Superbonjour
              </Link> */}
            </Flex>
          </Box>

          <Box
            width={{ base: '100vw', md: '42vw' }}
            marginLeft={{ base: '0', md: '60px' }}
          >
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              <a href="https://ansa-times.netlify.app/" target="_blank">
                Ansa Akyea
              </a>
            </Heading>

            <Image
              width={{ base: '100vw', md: '100%' }}
              //boxShadow="2xl"
              height="60vh"
              objectFit="cover"
              src="./image_7.jpg"
              alt="sport picture"
            />
            <Text fontSize="18px" fontWeight="400" paddingY="30px">
              This is a porfolio site for a professional actor/theater built
              usng JS, CSS, HTML. Vite was used to serve code locally during
              development and bundle and assets for production. Using Vite for
              all the frontend tooling, with lightning fast HMR and optimized
              build was preferable to other build tools.
            </Text>
            <Text {...textStyle}>
              I spent a considerable amount of time finding the best solutions
              for optimization. That’s when Cloudinary came in. I wanted to
              reduce the load time as much as possible. Amazon AWS could have
              also been an option. But Cloudinary felt easier to use, simpler —
              when it comes to ease of use, when products consider new devs with
              empathy, I’m always down.
            </Text>
            <Text {...textStyle}>
              I spent a considerable amount of time finding the best solutions
              for optimization. That’s when Cloudinary came in. I wanted to
              reduce the load time as much as possible. Amazon AWS could have
              also been an option. But Cloudinary felt easier to use, simpler —
              when it comes to ease of use, when products consider new devs with
              empathy, I’m always down.
            </Text>
          </Box>

          <Box
            width={{ base: '100vw', md: '42vw' }}
            marginLeft={{ base: '0', md: '0px' }}
          >
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              Vesper
            </Heading>

            <Image
              width={{ base: '100vw', md: '100%' }}
              //boxShadow="2xl"
              height="60vh"
              objectFit="cover"
              src="./image_9.jpg"
              alt="sport picture"
            />

            <Text fontSize="18px" fontWeight="400" paddingY="30px">
              This web app was done with Ruby on Rails. Final project for the Le
              Wagon 8 weeks intensive bootcamp. Ruby, rails, SCSS, Cloudinary,
              Heroku are some of the tools used. For this group project I
              focused on the backend, I'm usually more frontend. PostgresSQl,
              Active Records, Cloudinary, and heroku were used for the backend.
            </Text>
            <Text {...textStyle}>
              I spent a considerable amount of time finding the best solutions
              for optimization. That’s when Cloudinary came in. I wanted to
              reduce the load time as much as possible. Amazon AWS could have
              also been an option. But Cloudinary felt easier to use, simpler —
              when it comes to ease of use, when products consider new devs with
              empathy, I’m always down.
            </Text>
            <Text {...textStyle}>
              I spent a considerable amount of time finding the best solutions
              for optimization. That’s when Cloudinary came in. I wanted to
              reduce the load time as much as possible. Amazon AWS could have
              also been an option. But Cloudinary felt easier to use, simpler —
              when it comes to ease of use, when products consider new devs with
              empathy, I’m always down.
            </Text>
          </Box>

          <Box
            width={{ base: '100vw', md: '42vw' }}
            marginLeft={{ base: '0', md: '60px' }}
          >
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              <a href="https://jolly-sawine-819822.netlify.app/" target="_blank">
                A 3-D Yield Curve
              </a>
            </Heading>

            <a href="https://jolly-sawine-819822.netlify.app/" target="_blank">
              <Image
                width={{ base: '100vw', md: '100%' }}
                height="60vh"
                objectFit="contain"
                bg="white"
                padding="4"
                src="./interest-rate.jpg"
                alt="3-D wireframe of yield curves across maturities from 1995 to 2020"
              />
            </a>

            <Text {...textStyle}>
              A modern rebuild of the New York Times’ 2015 “3-D yield curve”
              interactive. Daily U.S. Treasury yields from 1990 to 2015 become
              a surface you can orbit: each slice is a single day’s yield
              curve, from the 1-month bill out to the 30-year bond, and stacked
              together they turn interest-rate history into a landscape.
            </Text>
            <Text {...textStyle}>
              Built with Vite, Svelte 5, Three.js and d3. Svelte drives a
              guided, step-by-step tour that moves the camera through the
              data: reading a normal curve, the zero interest-rate era after
              2008, and a top-down view where color shows when borrowing was
              cheap or expensive.
            </Text>
          </Box>

          <Box
            width={{ base: '100vw', md: '42vw' }}
            marginLeft={{ base: '0', md: '0px' }}
          >
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              <a href="https://beamish-biscotti-f60939.netlify.app/" target="_blank">
                FINA
              </a>
            </Heading>

            <a href="https://beamish-biscotti-f60939.netlify.app/" target="_blank">
              <Image
                width={{ base: '100vw', md: '100%' }}
                height="60vh"
                objectFit="cover"
                objectPosition="top left"
                src="./fina.jpg"
                alt="FINA chapter library home page with a column for each finance chapter"
              />
            </a>

            <Text {...textStyle}>
              A corporate-finance chapter library. The original chapter PDFs
              are reflowed into searchable HTML, from present value and the
              yield curve to CAPM and financial statements, and every page
              links back to the source PDF.
            </Text>
            <Text {...textStyle}>
              The equations are live: change an input and the printed formula
              recalculates in place. More than 400 equation regions were
              audited against the source, keeping the book’s own values and
              flagging where a printed result doesn’t add up. Built in vanilla
              JavaScript, with Elasticsearch search and a browser search
              fallback.
            </Text>
          </Box>

          <Box
            width={{ base: '100vw', md: '42vw' }}
            marginLeft={{ base: '0', md: '60px' }}
          >
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              <a href="https://delightful-moonbeam-f3fac3.netlify.app/" target="_blank">
                Bureau Normal
              </a>
            </Heading>

            <a href="https://delightful-moonbeam-f3fac3.netlify.app/" target="_blank">
              <Image
                width={{ base: '100vw', md: '100%' }}
                height="60vh"
                objectFit="cover"
                src="./bureau-normal.jpg"
                alt="Bureau Normal overview page, a grid of architecture photographs"
              />
            </a>

            <Text {...textStyle}>
              A site for an architecture studio, built in SvelteKit and Svelte
              5 from a Figma design, with plain CSS and no component library.
              The layout follows the design to the pixel on a shared grid: 8
              columns on desktop, 6 on tablet and 4 on mobile.
            </Text>
            <Text {...textStyle}>
              The landing page ends on the studio’s wordmark, then a featured
              gallery slides up over it. Wheel, swipe, arrow keys and side
              buttons move through the images, and Escape closes it. Other
              pages include an image overview, a project index with hover
              previews, and project pages with full-screen slides.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default Projects
