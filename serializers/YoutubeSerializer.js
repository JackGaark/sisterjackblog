import ReactPlayer from "react-player";
import { Box } from "@chakra-ui/react";

const YoutubeSeriaLizer = props => {
    const {url} = props.node;
    return (
        <Box className="player-wrapper">
            <ReactPlayer class="react-player" url={url} width="100%" height="100%" />

        </Box>
    );
};

export default YoutubeSeriaLizer;