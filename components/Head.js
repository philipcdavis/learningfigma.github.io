import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "Learning Figma";
  const description = props.description
    ? props.description
    : "A Free Email Course for Beginners";
  const image = props.image ? props.image : "learningfigma.com/assets/og.png";
  return (
    <>
      <NextHead>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/icon-thick.svg" />
        <link rel="apple-touch-icon" href="/icon-thick.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: image,
            },
          ],
          site_name: "Learning Figma",
        }}
        twitter={{
          handle: "@georgiatdavis",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
