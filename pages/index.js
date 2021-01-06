import React from "react";
import Head from "../components/Head";
import { GlobalStyle } from "../components/Tile";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import PurchaseCard from "../components/PurchaseCard";
import Lessons from "../components/Lessons";
import FAQ from "../components/FreqAskedQuestions";
import Footer from "../components/Footer";
import { RainbowHr } from "../components/Text";
import { Box } from "rebass/styled-components";

export default function Home() {
  return (
    <React.Fragment>
      <Head title="Learning Figma" description="" />
      <GlobalStyle />

      <Box>
        <Box px={[3, 3, 6]} py={[5, 5]}>
          <Box width={["100%", "600px"]} mt={4} mx="auto">
            <Nav />
          </Box>
          <Intro />

          <Box width={["100%", "300px"]} mt={6} mx="auto">
            <RainbowHr />
            <Footer />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
