import React from "react";
import styled from "styled-components";
import { color } from "./Tile";
import { hexToRGB } from "./Utils";
import { Flex, Box } from "rebass";

const Orb = styled.div`
  width: 150%;
  left: -15%;
  height: 200px;
  background: ${(props) => props.color};
  border-radius: 200px;
  top: -120px;
  position: relative;
`;

const OrbContainer = styled.div`
  width: 25%;
`;

const Container = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 500px;
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${hexToRGB(color.black, 0.3)};
  backdrop-filter: blur(60px);
  z-index: 1;
`;

const Gradients = () => (
  <Container>
    <Flex>
      <OrbContainer>
        <Orb color={color.red} />
      </OrbContainer>
      <OrbContainer>
        <Orb color={color.purple} />
      </OrbContainer>
      <OrbContainer>
        <Orb color={color.blue} />
      </OrbContainer>
      <OrbContainer>
        <Orb color={color.green} />
      </OrbContainer>
    </Flex>
    <Blur />
  </Container>
);
export default Gradients;
