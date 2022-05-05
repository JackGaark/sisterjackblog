import Container from '../components/Container'
import { Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Code  from "../components/Code";





const Superbonjour = () => {

  console.log('Yey update me')

  const code = `const myName = "super bonjour"`

  return (
    <Container>
      <NextSeo
        title="Contact Us | Jack Gaarkeuken | Developer | Youtuber"
        description="Contact Page for Jack Gaarkeuken"
      />
      <Heading>Superbonjour</Heading>
      
      <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code>
      Heading
      <Code language="js" code={code}></Code>

    </Container>
  )
}

export default Superbonjour
