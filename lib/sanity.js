import sanityClient  from "@sanity/client";

const options = {
    dataset: "production",
    projectId: "flrx9ptv",
    useCdn: true,
}

export default sanityClient(options);