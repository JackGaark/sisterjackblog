import { useRouter } from "next/router";
import { Box, Divider, Heading } from "@chakra-ui/react";
import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import MorePosts from "../../components/MorePosts";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { NextSeo } from "next-seo";

export default function Post({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      {router.isFallback ? (
        <Heading>Loading....</Heading>
      ) : (
        <>
          <Box
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            maxWidth="900px"
            width="100%"
            as="article"
            px={6}
            mt={[0, 8]}
            mb={8}
            mx="auto"
          >
            <NextSeo
              title={post.title}
              description={post.excerpt}
              openGraph={{
                url: `https://jamesperkins.io/post/${post.slug}`,
                title: `${post.title}`,
                description: `${post.excerpt}`,
                images: [{ url: `${post.coverImage}` }],
                site_name: "James Perkins",
              }}
              twitter={{
                handle: "@JGaark",
                cardType: "summary_large_image",
              }}
            />
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
            />
            <Divider mb={6} />
            <PostBody content={post.content} />
            <Divider />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          </Box>
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
  return {
    props: {
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}