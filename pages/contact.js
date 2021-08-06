import React from "react";
import { useForm, ValidationError } from "@statickit/react";
import Container from "../components/Container";
import { Box, Heading, Input, Text, Textarea, Button } from "@chakra-ui/core";
import { NextSeo } from "next-seo";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <Container>
        <NextSeo
          title="Contact Us | James Perkins | Developer | Youtuber"
          description="Contact Page for James Perkins"
        />
        <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
          <Heading mb={2} size="2xl" as="h1">
            {" "}
            Contact Me
          </Heading>
          <Text mb={2} textAlign="center">
            {" "}
            Thank you for contacting me
          </Text>
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <NextSeo
        title="Contact Us | James Perkins | Developer | Youtuber"
        description="Contact Page for James Perkins"
      />
      <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
        <Heading mb={2} size="2xl" as="h1">
          {" "}
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            mt={8}
            placeholder="batman@gmail.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me what you are looking for"
            mt={8}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            leftIcon="email"
            variantColor="blue"
            variant="outline"
            type="submit"
            mt={8}
            width="100%"
            isLoading={state.submitting}
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
