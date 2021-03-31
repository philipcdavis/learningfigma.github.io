import React from "react";
import Head from "../components/Head";
import { GlobalStyle } from "../components/Tile";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Gradients from "../components/Gradients.js";
import Footer from "../components/Footer";
import { Box } from "rebass/styled-components";
import { RainbowHr } from "../components/Text";
import Lessons from "../components/Lessons";
import PurchaseCard from "../components/PurchaseCard";
import FreqAskedQuestions from "../components/FreqAskedQuestions";

export default function Home() {
  return (
    <React.Fragment>
      <Head title="Learning Figma" description="" />
      <GlobalStyle />
      <Gradients />
      <Box>
        <Box px={[3, 3, 6]} py={[2, 5]}>
          <Box width={["100%"]} mt={2} mx="auto">
            <Nav />
          </Box>
          <Intro />
        </Box>
        <RainbowHr />
        <Box px={[3, 0]}>
          <Lessons />
          <PurchaseCard />
          <FreqAskedQuestions />
        </Box>
        <Box px={[3, 3, 6]} py={[2, 5]}>
          <Box width={["100%", "600px"]} mt={4} mx="auto">
            <Footer />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
