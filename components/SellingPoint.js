import React from "react";
import styled from "styled-components";
import { color } from "./Tile";
import { Flex, Box, Text } from "rebass/styled-components";

const SellingPoint = function (props) {
  return (
    <Flex mb={[3, 4]}>
      <Box>
        <Numeral color={props.color}>{props.number}</Numeral>
      </Box>
      <Box>
        <StyledHeading fontSize={[2, 3]}>{props.label}</StyledHeading>
      </Box>
    </Flex>
  );
};

const Numeral = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 100px;
  background-color: ${(props) => props.color};
  display: inline-block;
  font-weight: bold;
  color: ${color.black};
  text-align: center;
  padding-top: 3px;

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
    font-size: 16px;
    padding-top: 2px;
    line-height: 1;
  }
`;

const StyledHeading = styled(Text)`
  margin-left: 20px;
  position: relative;
  top: 0px;

  display: inline-block;
  color: white;
  @media (max-width: 500px) {
    margin-left: 10px;
  }
`;

export default SellingPoint;
