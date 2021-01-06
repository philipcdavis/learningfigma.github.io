import styled from "styled-components";
import { color, space, fontSize } from "./Utils";

export const InputLight = styled.input`
  background-color: white;
  font-family: inherit;
  margin: 0;
  padding: ${space[2] - 2 + "px"};
  font-size: ${fontSize[1]};
  border: none;
  outline: none;
  color: ${color.gray2};
  transition: 0.2s opacity ease;
  opacity: 0.9;
  width: 100%;
  border-radius: 6px;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    opacity: 1;
    outline: none;
    border-color: #555;
  }

  &::-webkit-input-placeholder {
    color: ${color.gray1};
  }
`;

export const InputDark = styled(InputLight)`
  background-color: ${color.gray2};
  color: ${color.white};
`;
