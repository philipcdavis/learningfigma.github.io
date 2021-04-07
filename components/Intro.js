import React from "react";
import { P } from "../components/Text";
import { Heading, Box } from "rebass/styled-components";
import SignupForm from "../components/SignupForm";

const Intro = () => (
  <Box width={["100%", "650px"]} mt={[4, "100px"]} mx="auto">
    <Heading
      textAlign="center"
      color="white"
      mb="0px"
      fontWeight="800"
      fontSize={[4, 5]}
    >
      A Figma Course for Beginners
    </Heading>

    <Box width={["100%", "530px"]} mt={[3, 4]} mx="auto">
      <P>
        {`
        Figma is a powerful design tool. I created this course to help more people learn Figma. I’ll guide you through my process as we design an app together.
      `}
      </P>

      <P>{`
      Whether you are an aspiring designer, you collaborate on a team, or you just want to make something fun, you’ll gain skills to make your own design projects in Figma. 
    `}</P>
      <P>{`
      I’ve created this course so that no matter what your experience, you can get started with Figma.
    `}</P>
    </Box>
    <Box width={["100%", "500px"]} mb={[3, 5]} mx="auto">
      <Heading
        color="white"
        textAlign="center"
        mb={4}
        fontWeight="800"
        fontSize={[3]}
      >
        Try out a lesson for free
      </Heading>
      <SignupForm />
    </Box>
  </Box>
);

export default Intro;
