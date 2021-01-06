import styled from "styled-components";
import { Btn, color } from "./Tile";
import { shadowColorChange, colorChange } from "./Utils";

export const BtnLink = styled(Btn).attrs({ as: "a" })`
  text-decoration: none;
  display: inline-block;
`;

export const BtnRainbow = styled(BtnLink)`
  animation: ${shadowColorChange("inset 0 0 0 2px", 0.8)} 10s infinite alternate;
  background-color: ${color.black};
  margin-right: 0;
  border-width: 2px;
  color: white;
  position: relative;
`;

export const BtnInput = styled(BtnRainbow).attrs({ as: "input" })`
  -webkit-appearance: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 12px;
`;
