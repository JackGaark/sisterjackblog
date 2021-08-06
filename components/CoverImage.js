import Link from "next/link";
import { imageBuilder } from "../lib/api";
import { Image, Box } from "@chakra-ui/react";

export default function CoverImage({ title,url, slug}) {
    const image = (
        <Image
            alt={`Cover Image for ${title}`}
            src={imageBuilder.image(url).url()}
            loading="eager"
            ignoreFallback
        /> 
    );
    return(
        <Box>
            {slug ? (
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </Box>
    );
}