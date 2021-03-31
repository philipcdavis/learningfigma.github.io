import React from "react";
import Logo from "../components/Logo";
import { Text, Box, Heading, Link } from "rebass/styled-components";
import { GlobalStyle } from "../components/Tile";

const NotFoundPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Box p={6}>
      <Logo flex={1} ml={0} mb={3} width="58px" display="block" />
      <Heading>404: Page Not found</Heading>
      <Text>This URL doesnt exist. Eeep.</Text>

      <Link href="https://learningfigma.com" color="white">
        Return Home
      </Link>
    </Box>
  </React.Fragment>
);

export default NotFoundPage;
