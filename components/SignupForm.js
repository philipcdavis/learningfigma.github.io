import React, { Component } from "react";
import { InputDark } from "./Tile";
import { BtnInput } from "../components/Button";
import { Box, Flex } from "rebass/styled-components";

const url =
  "https://learningfigma.us7.list-manage.com/subscribe/post?u=113d6a46bd93a27dd0eebdef8&amp;id=69bd159ab2";

class SignupForm extends Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action={url}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <Flex id="mc_embed_signup_scroll" mx="auto" flexWrap="wrap">
            <Box
              flexGrow={1}
              mr={[0, 2]}
              mb={[3, 0]}
              className="mc-field-group"
            >
              <InputDark
                group
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
              <span id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </span>

              <div
                style={{ position: "absolute", left: -5000 }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_4b8048aee994b838162f80e3a_21229251bb"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
            </Box>

            <BtnInput
              as="input"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </Flex>
        </form>
      </div>
    );
  }
}

export default SignupForm;
