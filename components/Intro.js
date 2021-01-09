import React from "react";
import { P } from "../components/Text";
import { color } from "./Tile";
import { Heading, Box } from "rebass/styled-components";
import SignupForm from "../components/SignupForm";
import SellingPoint from "../components/SellingPoint";

const Intro = () => (
  <Box width={["100%", "600px"]} mt={[4, 5]} mx="auto">
    <Heading color="white" mb="0px" fontWeight="800" fontSize={[4, 5]}>
      Figma for Beginners
    </Heading>
    <Heading mb="30px" mt={0} fontWeight="500" fontSize={[2, 3]}>
      A five day email course. Get the first lesson today.
    </Heading>
    <Box width={["100%", "500px"]}>
      <SignupForm />
    </Box>
    <Heading color="white" mb="30px" mt={5} fontWeight="500" fontSize={[2, 3]}>
      What You'll Learn
    </Heading>
    <SellingPoint
      number="1"
      color={color.green}
      label="How to get  community resources"
    />
    <SellingPoint
      number="2"
      color={color.blue}
      label="How to create the Figma logo"
    />
    <SellingPoint
      number="3"
      color={color.purple}
      label="How to turn designs into specs"
    />
    <SellingPoint
      number="4"
      color={color.red}
      label="How to collaborate using Figma"
    />
    <Heading
      fontSize={[2, 3]}
      fontWeight="500"
      mb={3}
      mt={5}
      color={color.white}
    >
      What is this?
    </Heading>
    <P>
      {`
        Finding design mentorship can be really challenging. With many people working remotely, it can be difficult to find opportunities to learn from other designers. My goal is to share my design process and make my favorite design tool a bit more accessible.
      `}
    </P>

    <P>{`
      I’ve developed resources so that no matter what your role is, you can get started with Figma. Whether you are an aspiring designer or your just a curious creative, you’ll gain confidence to work on your own projects in Figma. 
    `}</P>

    <Heading color="white" mb={3} mt={5} fontWeight="500" fontSize={[2, 3]}>
      Get the first lesson now
    </Heading>
    <Box mb={4} width={["100%", "500px"]}>
      <SignupForm />
    </Box>
  </Box>
);

export default Intro;
