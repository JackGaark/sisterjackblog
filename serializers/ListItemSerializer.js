import { ListItem } from "@chakra-ui/react";

const ListItemSerializer = props => {
    const { node, children } = props;

    return (
        <ListItem>{children}</ListItem>
    )
}

export default ListItemSerializer;