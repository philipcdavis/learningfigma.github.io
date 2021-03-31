import React from "react";
import styled from "styled-components";
import { Box, Flex, Heading, Text } from "rebass/styled-components";
import { color } from "./Tile";
import SellingPoint from "./SellingPoint";

const Lesson = function (props) {
  return (
    <Flex width={[1]} px={[0, 4]} py={3}>
      <SellingPoint mt={4} number={props.number} color={props.color} />
      <Heading mt={1} ml={3} mb={2} color="white" fontSize={3}>
        {props.heading}
      </Heading>
    </Flex>
  );
};

export default Lesson;
