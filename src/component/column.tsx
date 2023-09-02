import styled from "styled-components";

export const Columns = styled.div.attrs({
  className: "columns is-vcentered",
})``;

export const Column = styled.div.attrs({
  className: "column is-2",
})`
  padding: 0.25rem;
`;

export const TwoColumn = styled.div.attrs({
  className: "column is-4 flexbox",
})`
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
`;

export const ColumnLabel = styled.div`
  background-color: hsl(0, 0%, 93%);
  color: black;
  font-size: 0.75rem;
  padding: 0.35rem;
  text-align: center;
  border-radius: 2px;
`;
