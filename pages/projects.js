import Container from "../components/Container";
import { Box, Heading, VStack, SimpleGrid, Image, Text, Divider, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
const Projects = (image) => {
 
  return (
    <Container>
      <NextSeo
        title="Contact Us | Jack Gaarkeuken | Developer | Youtuber"
        description="Contact Page for Jack Gaarkeuken"
      />
      <Box w="100vw" alignItems="flex-start" padding="0" margin="0">
          <Flex alignItems="flex-start" wrap="wrap" justifyContent={{base: 'flex-start', md:'center'}} >
          <a href="//superbonjour.com" target="_blank">
            <Box width={{ base: '100vw', md: '45vw' }}>
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              Project Name
            </Heading>
            <Box>
              <Image
              width={{base: '100vw', md: '100%'}}
              height="45vh"
              boxShadow="2xl"
              src={'https://picsum.photos/200/300'}
              />
            </Box>
              <Text fontSize="18px" fontWeight="400" paddingY="30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus non, risus, vestibulum pulvinar dictum. Vel aliquam massa habitant ipsum. Nunc ac neque viverra augue rhoncus mattis bibendum nec. Sodales massa viverra aliquam aliquet neque, eget. Lectus dolor lacus habitasse elit. Congue auctor viverra neque aliquet dictumst quis ullamcorper neque. Tincidunt aliquet volutpat, nunc at nunc elementum. Nam leo tempus amet scelerisque adipiscing varius diam ipsum. Metus, sodales turpis lobortis quis diam tincidunt arcu.

              CSS, Javascript, HTML, Tagtag, Tagtagtag
              </Text>
            </Box>
          </a>
            <Box width={{ base: '100vw', md: '45vw' }} marginLeft={{ base: '0', md: '45px'}}>
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              Project Name
            </Heading>
            <Image
              width={{base: '100vw', md: '100%'}}
              boxShadow="2xl"
              height="45vh"
              src={'https://picsum.photos/200/300'}
              />
              <Text fontSize="18px" fontWeight="400" paddingY="30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus non, risus, vestibulum pulvinar dictum. Vel aliquam massa habitant ipsum. Nunc ac neque viverra augue rhoncus mattis bibendum nec. Sodales massa viverra aliquam aliquet neque, eget. Lectus dolor lacus habitasse elit. Congue auctor viverra neque aliquet dictumst quis ullamcorper neque. Tincidunt aliquet volutpat, nunc at nunc elementum. Nam leo tempus amet scelerisque adipiscing varius diam ipsum. Metus, sodales turpis lobortis quis diam tincidunt arcu.

              CSS, Javascript, HTML, Tagtag, Tagtagtag
              </Text>
            </Box>
          </Flex>
      </Box>
      <Box w="100vw" alignItems="flex-start" >
          <Flex alignItems="flex-start" wrap="wrap" justifyContent={{base: 'flex-start', md:'center'}}>
            <Box width={{ base: '100vw', md: '45vw' }}>
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              Project Name
            </Heading>
            <Image
              width={{base: '100vw', md: '100%'}}
              boxShadow="2xl"
              height="45vh"
              src={'https://picsum.photos/200/300'}
              />
              <Text fontSize="18px" fontWeight="400" paddingY="30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus non, risus, vestibulum pulvinar dictum. Vel aliquam massa habitant ipsum. Nunc ac neque viverra augue rhoncus mattis bibendum nec. Sodales massa viverra aliquam aliquet neque, eget. Lectus dolor lacus habitasse elit. Congue auctor viverra neque aliquet dictumst quis ullamcorper neque. Tincidunt aliquet volutpat, nunc at nunc elementum. Nam leo tempus amet scelerisque adipiscing varius diam ipsum. Metus, sodales turpis lobortis quis diam tincidunt arcu.

              CSS, Javascript, HTML, Tagtag, Tagtagtag
              </Text>
            </Box>
            <Box width={{ base: '100vw', md: '45vw' }} marginLeft={{ base: '0', md: '45px'}}>
            <Heading size="2xl" mb={2} as="h1" paddingY="30px">
              Project Name
            </Heading>
            <Image
              width={{base: '100vw', md: '100%'}}
              boxShadow="2xl"
              height="45vh"
              src={'https://picsum.photos/200/300'}
              />
              <Text fontSize="18px" fontWeight="400" paddingY="30px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus non, risus, vestibulum pulvinar dictum. Vel aliquam massa habitant ipsum. Nunc ac neque viverra augue rhoncus mattis bibendum nec. Sodales massa viverra aliquam aliquet neque, eget. Lectus dolor lacus habitasse elit. Congue auctor viverra neque aliquet dictumst quis ullamcorper neque. Tincidunt aliquet volutpat, nunc at nunc elementum. Nam leo tempus amet scelerisque adipiscing varius diam ipsum. Metus, sodales turpis lobortis quis diam tincidunt arcu.

              CSS, Javascript, HTML, Tagtag, Tagtagtag
              </Text>
            </Box>
          </Flex>
      </Box>
          <Divider borderColor='orange.300' width='330px' marginLeft='75%'/>
    </Container>
  );
};

export default Projects;