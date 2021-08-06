import { imageBuilder } from "../lib/api";
import { Image } from "@chakra-ui/react";


const ImageSerializer = (props) => {
    const { node } = props;
    return <Image src={imageBuilder.image(node.asset)} loading="eager" />
};

export default ImageSerializer;