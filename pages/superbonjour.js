import Container from "../components/Container";
import { Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Prism from "prismjs";

const Superbonjour = () => {


  useEffect(() => {
    // Disable this to see that Slate returns properly formatted code
    Prism.highlightAll();
  }, []);

  const codeSample = `{
    "dev": "svelte dev"
   }`;

    return (
        <Container>
        <NextSeo
          title="Contact Us | Jack Gaarkeuken | Developer | Youtuber"
          description="Contact Page for Jack Gaarkeuken"
        />
        <Heading>Superbonjour</Heading>
        <pre>
        <code>
          {codeSample}
        </code>
        </pre>
      </Container>
    );
};

export default Superbonjour;