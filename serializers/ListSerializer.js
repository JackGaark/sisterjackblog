import { Flex } from "@chakra-ui/react";

const ListSerializer = props => {
    const { node, children} = props;
    return (<Flex align="center" justify="center">
        <List styleType="disc">
            {children}
        </List>
    </Flex>)
}

export default ListSerializer;