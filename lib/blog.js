import Container from "../comnponents/Container";
import { Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { getAllPostsFromHome } from "../lib/api";
import PostPreview from "../components/PostPreview";

export default function blog({allPosts}) {  
    const posts = allPosts;
    console.log(posts)
    return <Container>
        <Heading as="h3" mt={6} mb={6} size="xl" textAlign="center">
            Blog Posts.
        </Heading>
        <SimpleGrid width="100%"
                    maxwidth="1200px"
                    px={6}
                    mt={[0,8]}
                    mx="auto"
                    columns={{ sm:1, md: 2, lg: 3}}
                    gap={6}
                    >
            {posts && posts.map((posts) => (
                <PostPreview
                    key={posts.slug}
                    title={posts.title}
                    coverImage={post.coverImage}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    />
            ))}
        </SimpleGrid>
    </Container>
}

export async function getStaticProps() {
    const allPosts = await getAllPostsFromHome();
    return {
        props: {allPosts},
    };
}
