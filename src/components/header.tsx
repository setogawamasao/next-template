"use client";
import styled from "styled-components";
import { mainColor, mainColorFont } from "./colorSettings";

export default function Header() {
  return (
    <HeaderStyle>
      <HeaderTitle>SAMPLE</HeaderTitle>
    </HeaderStyle>
  );
}

export const HeaderStyle = styled.div`
  width: 100%;
  height: 60px;
  background: ${mainColor};
  display: flex; /* flexboxを作る */
  align-items: center; /* 上下中央に揃える */
  justify-content: space-between; /* 両端に配置 */
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;

export const HeaderTitle = styled.h1`
  color: ${mainColorFont};
  font-size: 30px;
  text-decoration: none;
`;
