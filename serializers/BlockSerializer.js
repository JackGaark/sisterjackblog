import BlockContent from "@sanity/block-content-to-react";
import { Heading, Text } from "@chakra-ui/react";

const BlockSerializer = proper => {
    const style = props.node.style
    const elements = {
        h1: (<Heading as="h1" size= "2xl">{props.children}</Heading>),
        h2: (<Heading as="h2" size= "xl">{props.children}</Heading>),
        h3: (<Heading as="h3" size= "lg">{props.children}</Heading>),
        h4: (<Heading as="h4" size= "md">{props.children}</Heading>),
        h5: (<Heading as="h5" size= "sm">{props.children}</Heading>),
        h6: (<Heading as="h6" size= "xs">{props.children}</Heading>),
    }
    if(/^h\d/.test(style)) {
        return elements[style];
    }
    if (style = "normal") {
        return <Text mb={4}>{props.children}</Text>
    }
    return BlockContent.defaultSerializers.types.block(props);
};

export default BlockSerializer;