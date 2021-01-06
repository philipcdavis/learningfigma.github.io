import React from "react";
import Logo from "../components/Logo";
import { BtnRainbow } from "../components/Button";
import { Box, Flex } from "rebass/styled-components";

const Nav = () => (
  <Flex
    css={{
      maxWidth: "70em",
      position: "relative",
    }}
    mt={4}
    mx="auto"
    pb={2}
    alignItems="flex-start"
  >
    <Logo mt={"4px"} flex={1} width="58px" display="block" />
  </Flex>
);

export default Nav;
