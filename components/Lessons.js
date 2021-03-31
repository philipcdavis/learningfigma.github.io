import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Flex } from "rebass/styled-components";
import Instructor from "./Instructor";
import { color } from "./Tile";
import Lesson from "../components/Lesson";

const LessonContainer = styled(Box)`
  max-width: 65em;
  margin-left: auto;
  margin-right: auto;
`;

const Lessons = function (props) {
  return (
    <LessonContainer pt={[4, 5]} mb={5}>
      <Box px={[3, 4]} sx={{ maxWidth: 700 }} mt={4}>
        <Heading color="white" mb={2} fontSize={[4, 5]}>
          Kickstart your Design Career
        </Heading>
        <Text>
          In this video course, I’ll walk you through my design process from
          starting with an idea all the way to designing an interactive
          prototype.
        </Text>
      </Box>
      <Flex>
        <Flex mt={5} width={[1, 1 / 2]} flexDirection={"column"}>
          <Lesson
            number="1"
            color={color.skittleYellow}
            heading="Getting started with Figma"
          />
          <Lesson
            number="2"
            color={color.skittleOrange}
            heading="Designing the Figma Logo"
          />
          <Lesson
            number="3"
            color={color.skittleRed}
            heading="Feedback and Engineer Handoff"
          />
          <Lesson
            number="4"
            color={color.skittlePink}
            heading="Moodboarding and Brainstorming"
          />
          <Lesson
            number="5"
            color={color.skittlePurple}
            heading="Planning and Wireframing"
          />
          <Lesson
            number="6"
            color={color.skittleTeal}
            heading="Building a Component Library"
          />
          <Lesson
            number="7"
            color={color.skittleCyan}
            heading="Advanced Layout Tools"
          />
          <Lesson
            number="8"
            color={color.skittleGreen}
            heading="Prototyping and Animations"
          />
        </Flex>
        <Box
          sx={{
            display: ["none", "block"],
          }}
          width={[1 / 2]}
        >
          <video width="100%" autoPlay muted loop>
            <source src="/assets/figma-logo.mp4" type="video/mp4" />
          </video>
        </Box>
      </Flex>
      <Instructor />
    </LessonContainer>
  );
};

export default Lessons;
