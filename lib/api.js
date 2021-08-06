import client from "./sanity";
import sanityImage from '@sanity/image-url';

export const imageBuilder = sanityImage(client);

const getUniquePosts = (posts) => {
    const slugs = new Set();
    return posts.filter((post) => {
        if (slugs.has(post.slug)) {
            return false;
        }   else {
            slugs.add(post.slug);
            return true;
        }
    });
}


const postFields = `
    name,
    title,
    date,
    excerpt,
    'slug': slug.current,
    'coverImage': coverImage.asset -> url,
    'author': author -> {name, 'picture': picture.asset -> url},
`

export async function getAllPostsFromHome() {
    const results = await client.fetch(`*[_type = "post] | order(date desc, _updatedAt desc)`);
    return getUniquePosts(results);
}

export async function getAllPostsWithSlug() {
    const data = await client.fetch(`*[_type = "post"] { 'slug': slug.current}`);
    return data;
}

export async function getAllPostAndMorePosts(slug) {
    const curClient = client;
    const [post, morePosts] = await Promise.all([
        curClient.fetch(`*[_type = 'post' && slug.current = $slug] | order(_updatedAt desc){
            ${postFields}
            content,
        }`,
        {slug})
    .then((res) => res?.[0]),
        curClient.fetch(
            `*[_type = "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
                ${postFields}
                content,
            }[0...2]`, {slug}
        ),
    ]);
    return {post, morePosts: getUniquePosts(morePosts) };
}