import BlockContent from "@sanity/block-content-to-react";
import YoutuSeriaLizer from "../serializers/YoutubeSerializer";
import BlockSerializer from "../serializers/BlockSerializer";
import CodeSeriaLizer from "../serializers/CodeSerializer";
import ImageSeriaLizer from "../serializers/ImageSerializer";
import ListSeriaLizer from "../serializers/ListSerializer";
import ListItemSeriaLizer from "../serializers/ListItemSerializer";
import { Code } from "@chakra-ui/layout";

export default function PostBody({ content }) {
    return (
      <BlockContent
        blocks={content}
        serializers={{
          types: {
            block: BlockSerializer,
            code: CodeSerializer,
            image: ImageSerializer,
            youtube: YouTubeSerializer,
          },
          list: ListSerializer,
          listItem: ListItemSerializer,
        }}
      />
    );
  }