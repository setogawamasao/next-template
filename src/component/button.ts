import styled from "styled-components";
import {
  mainColor,
  mainColorFont,
  subColor,
  subColorFont,
} from "@/component/colorSettings";

export const MainButton = styled.button.attrs({
  className: "button",
})`
  background-color: ${mainColor};
  border-color: ${mainColor};
  color: ${mainColorFont};
`;

export const SubButton = styled.button.attrs({
  className: "button",
})`
  background-color: ${subColor};
  border-color: ${subColor};
  color: ${subColorFont};
`;
