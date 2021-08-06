import Link  from "next/link";
import CoverImage from "./CoverImage";
import { Heading, Text, Box  } from "@chakra-ui/react";


export default function PostPreview ({ title, coverImage, excerpt, slug}) {
    return (
        <Box mb={5}>
            <Box mb={5}>
                <CoverImage slug={slug} title={title} url={coverImage} />
            </Box>
            <Heading as="h3" mb={6} size="xl" textAlign="center">
                <Link as={`/post/${slug}`} href="/post/[slug]">
                    <a>{title}</a>
                </Link>
            </Heading>
            <Text fontsize="xl" mt={2} mb={6}>
                {excerpt}
            </Text>
        </Box>
    )
}