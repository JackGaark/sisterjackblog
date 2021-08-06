import { parseISO, format } from "date-fns";
import { Text } from "@chakra-ui/react";

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return (
        <Text mt={2} ml={8} dateTime={dateString}>
            {" "}
            Posted on {format(date, "LLLL d, yyyy")}
        </Text>
    )
}