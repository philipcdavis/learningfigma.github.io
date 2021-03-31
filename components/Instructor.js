import React from "react";
import styled from "styled-components";
import { Flex, Box, Image, Text } from "rebass/styled-components";
import { color } from "./Tile";
import { BtnLink } from "./Button";

function Instructor(props) {
  return (
    <Flex
      textAlign={["center", "left"]}
      flexDirection={["column", "row"]}
      mt={[70, 140]}
      mb={[0, 85]}
      mx={"auto"}
      sx={{ maxWidth: "750px" }}
    >
      <Box width={[1, 3 / 12]}>
        <Image
          mt={-1}
          height="130px"
          sx={{ borderRadius: 100, filter: "saturate(1.2)" }}
          width="130px"
          src="https://pbs.twimg.com/profile_images/1344396292684996613/jrcEkT84_400x400.jpg"
        />
      </Box>
      <Flex width={[1, 9 / 12]} flexDirection={"column"}>
        <Text mb={2} color={color.white} fontWeight="bold">
          About the Instructor
        </Text>
        <Text fontSize={18} color={color.gray0}>
          Hi, my name is Georgia Davis and I am product designer at Clever. I
          was an online course designer at Udacity and still love teaching
          things I'm passionate about. Come learn Figma with me!
        </Text>
      </Flex>
    </Flex>
  );
}

export default Instructor;
