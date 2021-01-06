import React from "react";
import styled from "styled-components";
import { color } from "./Tile";
import { Box, Text } from "rebass/styled-components";

const SellingPoint = function (props) {
  return (
    <Box mb={[3, 4]}>
      <Numeral color={props.color} size={28}>
        {props.number}
      </Numeral>
      <StyledHeading fontSize={[2, 3]}>{props.label}</StyledHeading>
    </Box>
  );
};

const Numeral = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 100px;
  background-color: ${(props) => props.color};
  display: inline-block;
  font-weight: bold;
  color: ${color.black};
  text-align: center;
`;

const StyledHeading = styled(Text)`
  position: relative;
  top: 0px;
  left: 20px;
  display: inline-block;
  color: white;
`;

export default SellingPoint;
