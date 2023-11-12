import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      h={"40px"}
      bg="gray.200"
      bgColor={"#C5E7FC"}
    >
      <Text fontSize="sm" fontWeight="bold">
        &copy; {new Date().getFullYear()} Centurion University. All rights
        reserved.
      </Text>
    </Flex>
  );
}

export default Footer;
