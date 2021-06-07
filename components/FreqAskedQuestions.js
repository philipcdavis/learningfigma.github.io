import React from "react";
import { Text, Box, Flex, Link, Heading } from "rebass/styled-components";
import { BtnRainbow } from "./Button";

const FAQ = function (props) {
  return (
    <Box
      sx={{
        maxWidth: "50em",
        margin: "0 auto",
      }}
      pt={[3, 5]}
    >
      <Heading
        mt={[5]}
        mb={-3}
        fontSize={[2, 3]}
        sx={{
          textTransform: "uppercase",
        }}
      >
        Frequently Asked Questions
      </Heading>
      <Flex flexWrap="wrap" mb={[4, 5]}>
        <Box pr={[0, 0, 0, 4]} width={[1, 1, 1, 1 / 2]}>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Why did you make this course?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            Over the years I’ve had a lot of people ask how I made the leap into
            product design. What really launched me into my design career was
            having design mentors. Finding design mentorship is hard.
            <br />
            <br />I made this course so that you can observe my design process
            in Figma and gain confidence to use Figma for your own projects.
          </Text>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            What will I learn?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            I’ll walk you through my design process from starting with an idea
            all the way to designing an interactive design prototype. Some of
            the topics covered include:
            <ul>
              <li>Basic tools by designing the Figma logo</li>
              <li>Figma collaboration and handoff features</li>
              <li>Brainstorming and wireframing </li>
              <li>Advanced tools like components and autolayout </li>
              <li>Prototyping and animations </li>
            </ul>
            You’ll develop these Figma skills all by working on a design
            project.
          </Text>
        </Box>

        <Box pl={[0, 0, 0, 4]} width={[1, 1, 1, 1 / 2]}>
          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Why Figma instead of other design tools?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            There are a lot of design tools out there, so why are we learning
            Figma?
            <br />
            <br />
            There are three main reasons why I like Figma:
            <ol>
              <li>Figma can be used for free.</li>
              <li>Figma is built for collaboration.</li>
              <li>Figma is an industry standard.</li>
            </ol>
            Figma makes design accessible to everyone.
          </Text>

          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            What if I don't like the course?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            If you don't like the course let me know within 7 days of purchase
            and i'll send you a refund.
          </Text>

          <Heading fontSize={[2, 3]} color="white" mt={[4, 5]} mb={2}>
            Is this course affiliated with Figma?
          </Heading>
          <Text fontSize={[2, "17px"]}>
            No. This course is neither created by Figma the company, nor
            affliated with them.
          </Text>
        </Box>
      </Flex>
      <Text textAlign={["left", "center"]} mt="4" mb={-1}>
        Have a different question?{" "}
        <Link
          color="inherit"
          target="_blank"
          href="https://twitter.com/georgiatdavis"
        >
          Let me know
        </Link>
      </Text>

      <Text color="white" fontSize={[4]} mb={3} textAlign={"center"} mt="5">
        Ready to start?
      </Text>
      <Text mb={4} textAlign={"center"}>
        <BtnRainbow
          href={
            props.affiliate
              ? props.affiliate
              : "https://gumroad.com/l/learningfigma"
          }
          target="_blank"
        >
          Get Access Now
        </BtnRainbow>
      </Text>
    </Box>
  );
};

export default FAQ;
