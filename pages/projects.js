import React from "react";
import Container from "../components/Container";
import { Box, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
const Projects = () => {
 
  return (
    <Container>
      <NextSeo
        title="Contact Us | James Perkins | Developer | Youtuber"
        description="Contact Page for James Perkins"
      />
      <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
        <Heading mb={2} size="2xl" as="h1">
          {" "}
          Projects
        </Heading>
      </Box>
    </Container>
  );
};

export default Projects;

{/* <link href="https://blogfonts.com/css/aWQ9MTk4OTg2JnN1Yj05ODYmYz1yJnR0Zj1SYW51YVRyaWFscy1Cb2xkLm90ZiZuPXJhbnVhLXRyaWFscy01/Ranua Trials.otf" rel="stylesheet" type="text/css"/>

font-family: 'ranua-trials-5', sans-serif; */}
