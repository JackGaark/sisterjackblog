import { Text, Stack, Avatar  } from "@chakra-ui/react";

export default function AuthorPicture({name, picture}) {
    return (
        <Stack isInline spacing={4}>
            <Avatar src={picture} alt={name} />
            <Text mt={2}>{name}</Text>
        </Stack>
    )
}