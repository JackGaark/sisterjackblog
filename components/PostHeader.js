import AuthorPicture from '../components/AuthorPicture';
import Date from "../components/Date";
import { Stack, Heading } from "@chakra-ui/react";

export default function PostHeader ({ title, date, auhtor }) {
    return (
        <>
            <Heading as="h1" mb={6} size="2xl" textAlign="center">
                {title}
            </Heading>
            <Stack isInline>
                <AuthorPicture name={auhtor.name} picture={auhtor.picture} />
                <Date dateString={date} />
            </Stack>
        </>
    )
}