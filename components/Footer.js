import React from "react";
import { Text, Box, Flex, Link } from "rebass/styled-components";

const Footer = function (props) {
  return (
    <Flex textAlign="center" pb={2} flexWrap="wrap">
      <Box width={[1, 1, 1 / 2]} mx="auto">
        <Text fontSize={[2, 3]}>
          Get in Contact:
          <Link
            color="white"
            ml={3}
            href="mailto:learningfigma@gmail.com?subject=Question for you..."
          >
            Email
          </Link>
          <Link color="white" ml={3} href="https://twitter.com/georgiatdavis">
            Twitter
          </Link>
        </Text>
      </Box>
      <Text mx="auto" mt={3}>
        Learning Figma is not Affiliated with Figma
      </Text>
    </Flex>
  );
};

export default Footer;
