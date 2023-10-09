"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Container } from "@/components/container";
import { mainColor, subColor, subColorFont } from "@/components/colorSettings";
import Graph from "@/components/graph";

export default function MessageBox() {
  const router = useRouter();
  return (
    <Container>
      <HomeCaption>ダッシュボード</HomeCaption>
      <div style={{ margin: "1rem" }}>
        <Graph />
      </div>
      <HomeCaption>メニュー</HomeCaption>
      <div style={{ margin: "1rem" }}>
        {Array(3)
          .fill(0)
          .map((rowNum) => {
            return (
              <Columns key={rowNum}>
                {Array(3)
                  .fill(0)
                  .map((columnNum) => {
                    return (
                      <Column key={columnNum}>
                        <MenuButton onClick={() => router.push("/todo/search")}>
                          TODO管理
                        </MenuButton>
                      </Column>
                    );
                  })}
              </Columns>
            );
          })}
      </div>
    </Container>
  );
}

const HomeCaption = styled.div`
  border-left: 8px solid ${mainColor};
  border-bottom: 2px solid ${mainColor};
  padding: 0.7em 0 0.7em 1em;
`;
const Columns = styled.div.attrs({
  className: "columns is-vcentered",
})`
  margin: 0;
`;

const Column = styled.div.attrs({
  className: "column is-one-third",
})`
  padding: 0.25rem;
`;

export const MenuButton = styled.button.attrs({
  className: "button",
})`
  background-color: ${subColor};
  border-color: ${subColor};
  color: ${subColorFont};
  width: 100%;
`;
