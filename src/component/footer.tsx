"use client";
import { useState } from "react";
import styled from "styled-components";
import { mainColor, mainColorFont } from "./colorSettings";

export default function footer() {
  return (
    <FooterStyle>
      <FooterTitle>@2023 sample Co., Ltd.</FooterTitle>
    </FooterStyle>
  );
}

export const FooterStyle = styled.div`
  width: 100%;
  height: 30px;
  background: ${mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterTitle = styled.h1`
  color: ${mainColorFont};
  font-size: 15px;
`;
