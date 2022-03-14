import Container from '../components/Container'
import { Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Prism from 'prismjs'

import { useEffect } from 'react'
const Superbonjour = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  console.log('Yey update me')

  const code = `const myName = "super bonjour"`

  return (
    <Container>
      <NextSeo
        title="Contact Us | Jack Gaarkeuken | Developer | Youtuber"
        description="Contact Page for Jack Gaarkeuken"
      />
      <Heading>Superbonjour</Heading>
      <pre className="language-js" style={{ marginTop: '1em' }}>
        <code>{code}</code>
      </pre>
    </Container>
  )
}

export default Superbonjour
