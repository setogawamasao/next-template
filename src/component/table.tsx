import styled from "styled-components";

export const TableContainer = styled.div.attrs({
  className: "control",
})`
  overflow-y: scroll;
  height: 350px;
`;

export const TableHeader = styled.th.attrs({
  style: { borderWidth: "0" },
})`
  border: none;
  border-width: none;
  position: sticky;
  z-index: 1;
  top: 0;
  background: white;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #dbdbdb;
  }
`;
