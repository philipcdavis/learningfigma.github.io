import React from "react";
import Logo from "../components/Logo";
import { BtnRainbow } from "../components/Button";
import { Flex } from "rebass/styled-components";

const Nav = () => (
  <Flex
    css={{
      position: "relative",
    }}
    mt={4}
    mx="auto"
    pb={2}
    alignItems="flex-start"
  >
    <Logo mt={"4px"} flex={1} width="58px" display="block" />

    <BtnRainbow href="https://gumroad.com/l/learningfigma" target="_blank">
      Purchase
    </BtnRainbow>
  </Flex>
);

export default Nav;
