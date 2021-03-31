import React from "react";
import Nav from "../components/Nav";
import { GlobalStyle } from "../components/Tile";
import { Text, Box, Heading } from "rebass/styled-components";
import { BtnRainbow } from "../components/Button";

const Preview = () => (
  <>
    <GlobalStyle />
    <Box px={[3, 6]} py={[3, 5]}>
      <Nav />

      <Box
        width={1}
        mt={4}
        css={{
          height: 0,
          paddingBottom: 900 / 16 + "%",
          position: "relative",
          overflow: "hidden",
          "& > iframe": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            left: 0,
            border: 0,
          },
        }}
      >
        <iframe
          title="Design the Figma Logo"
          width="560"
          height="315"
          src="https://player.vimeo.com/video/530365726"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <Box textAlign="center">
        <Text textAlign={["left", "center"]} fontSize={3} mt={5} mb={3}>
          If you like this video, you'll probably like the full course.
        </Text>
        <BtnRainbow href="https://gumroad.com/l/learningfigma" target="_blank">
          Get the Full Course
        </BtnRainbow>
      </Box>
    </Box>
  </>
);

export default Preview;
