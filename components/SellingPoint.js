import React from "react";
import styled from "styled-components";
import { color } from "./Tile";
import { Flex, Box, Text } from "rebass/styled-components";

const SellingPoint = function (props) {
  return <Numeral color={props.color}>{props.number}</Numeral>;
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

  @media (max-width: 630px) {
    transform: scale(0.7);
  }
`;

export default SellingPoint;
