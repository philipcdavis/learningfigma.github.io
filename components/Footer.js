import React from "react";
import { Text, Box, Flex, Link } from "rebass/styled-components";

const Footer = function (props) {
  return (
    <Flex pt={3} pb={2} flexWrap="wrap">
      <Box p={3} width={[1]}>
        <Text textAlign={["center"]} fontSize={[2, 3]}>
          Created by{" "}
          <Link
            color="white"
            target="_blank"
            href="https://twitter.com/georgiatdavis"
          >
            Georgia
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
