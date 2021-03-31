import React, { useEffect } from "react";
import Head from "./Head";
import ReactMarkdown from "react-markdown/with-html";
import { Heading, Text, Flex, Box } from "rebass/styled-components";
import Logo from "./Logo";
import { GlobalStyle, color } from "./Tile";
import { BtnRainbow } from "./Button";
import { RainbowHr } from "./Text";
import CodeAnimation from "./CodeAnimation";
import { Markdown } from "./Text";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Syntax from "./Syntax";

function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={Syntax}>
      {value}
    </SyntaxHighlighter>
  );
}

const Post = function (props) {
  return (
    <>
      <Head
        title={props.frontmatter.title}
        description={props.frontmatter.description}
        image={props.frontmatter.image}
      />
      <GlobalStyle />
      <CodeAnimation colors={props.colors} />

      <Box px={[3, 3, 6]} py={[5, 5]}>
        <Box color={color.gray0} width={["100%", "600px"]} mx="auto">
          <Markdown>
            <ReactMarkdown
              renderers={{ code: CodeBlock }}
              escapeHtml={false}
              source={props.content}
            />
          </Markdown>

          <Box textAlign="center" mt={[4, 5]}>
            <RainbowHr width="70%" />
            <Flex flexWrap="wrap" mt={[4, 5]} mb={[4, 5]}>
              <Box mx="auto" width={["100%", "70%"]}>
                <Logo width="60px" />
                <Heading fontSize={3} color="white">
                  A Figma Course for Beginners
                </Heading>
                <Text mt="15px" mb="25px" fontSize={2}>
                  Figma is a powerful design tool. If you're interested in using
                  Figma I made a course for you.
                </Text>
                <BtnRainbow
                  href="https://gumroad.com/l/learningfigma"
                  target="_blank"
                >
                  Learning Figma
                </BtnRainbow>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Post;
