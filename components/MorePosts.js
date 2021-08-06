import PostPreview from "../components/PostPreview";
import { Box, Heading, SimpleGrid} from "chakra-ui/react";

export default function MorePosts({posts}) {
    return (
        <Box>
            <Heading as="h3" mt={6} mb={6} size="xl" textAlign="left">
                More Posts
            </Heading>
            <SimpleGrid>
                {post.map((posts) => (
                    <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    slug={post.slug}
                    excerpt={post.excerpt} />
                ))}
            </SimpleGrid>
        </Box>
    );
}