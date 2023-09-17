import styled from "styled-components";
import { mainColor } from "./colorSettings";

export const Panel = styled.div.attrs({
  className: "panel",
})`
  margin: 0.75rem 0 0 0;
`;

export const PanelHeader = styled.div.attrs({
  className: "panel-heading is-size-6 p-2",
})`
  display: flex;
  align-items: center;
`;

export const PanelHeaderButton = styled.button.attrs({
  className: "button is-small head-button",
})`
  margin-left: auto;
`;

export const PanelBlock = styled.div.attrs({
  className: "panel-block",
})``;
