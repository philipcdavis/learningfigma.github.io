import React from "react";
import { P } from "../components/Text";
import { color } from "./Tile";
import { Heading, Box } from "rebass/styled-components";
import SignupForm from "../components/SignupForm";
import SellingPoint from "../components/SellingPoint";

const Intro = () => (
  <Box width={["100%", "600px"]} mt={5} mx="auto">
    <Heading color="white" mb="0px" fontWeight="500" fontSize={[3, 4]}>
      A Figma Course for Beginners
    </Heading>
    <Heading mb="30px" mt={0} fontWeight="500" fontSize={[2, 3]}>
      A 5 Day Free Email Course for getting started
    </Heading>
    <Box mb={4} width={["100%", "500px"]}>
      <SignupForm />
    </Box>
    <P>
      {`
        Finding design mentorship can be really challenging. With many people working remotely, it can be difficult to find opportunities to learn from other designers. My goal is to share my design process and make my favorite design tool a bit more accessible.
      `}
    </P>

    <P>{`
      I’ve developed resources so that no matter what your role is, you can get started with Figma. Whether you are an aspiring designer or your just a curious creative, you’ll gain confidence to work on your own projects in Figma. 
    `}</P>

    <Heading color="white" mb="30px" mt={0} fontWeight="500" fontSize={[2, 3]}>
      What You'll Learn
    </Heading>
    <SellingPoint
      number="1"
      color={color.green}
      label="How to get the most out of Figma community resources"
    />
    <SellingPoint
      number="2"
      color={color.blue}
      label="How to create the Figma logo in Figma"
    />
    <SellingPoint
      number="3"
      color={color.purple}
      label="How to translate designs into engineering specs"
    />
    <SellingPoint
      number="4"
      color={color.red}
      label="How to and collaborate and brainstorm using Figma"
    />

    <Heading color="white" mb={2} mt={5} fontWeight="500" fontSize={[3, 4]}>
      Get the first lesson now
    </Heading>
    <Box mb={4} width={["100%", "500px"]}>
      <SignupForm />
    </Box>
  </Box>
);

export default Intro;
