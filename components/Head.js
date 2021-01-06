import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "Learning Figma";
  const description = props.description
    ? props.description
    : "Learn Figma with Georgia";
  const image = props.image
    ? props.image
    : "https://farm2.staticflickr.com/1849/43676135265_5d6be8f15a_o.png";
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
          site_name: "React for Design",
        }}
        twitter={{
          handle: "@philipcdavis",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
