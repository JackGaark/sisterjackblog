import React from 'react'
import { useEffect, useRef } from 'react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import {
  Link,
  Divider,
  useColorMode,
  Button,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react'
import Footer from '../components/Footer'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  /* backdrop-filter: saturate(180%) blur(20px); */
  transition: background-color 0.1 ease-in-out;
`

export default function Container({ children }) {
  const { colorMode } = useColorMode()

  const primarytextColor = {
    light: 'black',
    dark: 'white',
  }

  const BALLS_NUM = 12

  const cursorsWrapperRef = useRef(null)
  const aimRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!cursorsWrapperRef.current) return
    const { current: cursorsWrapperEl } = cursorsWrapperRef

    const balls = cursorsWrapperEl.querySelectorAll('div')

    balls.forEach((ball, index) => {
      let currentX = 0
      let currentY = 0

      let speed = 0.3 - index * 0.015

      const animate = function () {
        currentX += (aimRef.current.x - currentX) * speed
        currentY += (aimRef.current.y - currentY) * speed

        ball.style.left = currentX + 'px'
        ball.style.top = currentY + 'px'

        requestAnimationFrame(animate)
      }

      animate()
    })
  }, [])

  return (
    <>
      <div
        className="App"
        onMouseMove={(e) => {
          aimRef.current.x = e.pageX
          aimRef.current.y = e.pageY
        }}
      >
        <div className="cursors" ref={cursorsWrapperRef}>
          {Array.from(new Array(BALLS_NUM), (_, i) => (
            <div key={i} />
          ))}
        </div>
        <StickyNav
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          display={{ md: 'flex' }}
          width="100%"
          //bg={navBgColor[colorMode]}
          as="nav"
          p={{ base: '6', md: '40px' }}
          mt={[0, 8]}
          mb={8}
          mx="auto"
        >
          {/* <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        /> */}
          <Heading>
            <Link
              href="/"
              as={NextLink}
              variant="ghost"
              bg="transparent"
              padding={0}
              fontSize="36px"
              color="orange.300"
            >
              Jack Gaarkeuken
            </Link>
          </Heading>
          <Box>
            <Link href="/projects" as={NextLink} variant="ghost" p={[1, 4]}>
              Projects
            </Link>
            <Link
              href="https://github.com/JackGaark"
              as={NextLink}
              variant="ghost"
              p={[1, 4]}
            >
              Github
            </Link>
            <Link href="/contact" as={NextLink} variant="ghost" p={[1, 4]}>
              Contact
            </Link>
          </Box>
        </StickyNav>
        <Flex
          as="main"
          justifyContent="center"
          flexDirection="column"
          //bg={bgColor[colorMode]}
          color={primarytextColor[colorMode]}
          //px={{ base: 2, md: 8 }}
        >
          {children}
        </Flex>
        <Box padding="32px">
          <Divider borderColor="orange.300" width="30vw" marginLeft="68%" />
        </Box>
        <Footer />
      </div>
    </>
  )
}
