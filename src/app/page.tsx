"use client";
import styled from "styled-components";

export default function Home() {
  const row = {
    no: 1,
    title: "bbb",
    description: "ccc",
    dueDate: "ddd",
    createdAt: "eee",
  };

  const rows = [];

  for (let i = 1; i <= 50; i++) {
    rows.push(row);
  }

  return (
    <div className="container">
      <Panel>
        <PanelHeader>
          検索条件
          <PanelHeaderButton>
            {/* <font-awesome-icon :icon="['fas', 'magnifying-glass']" className="mr-1" /> */}
            検索
          </PanelHeaderButton>
        </PanelHeader>
        <PanelBlock>
          <div className="control p-2">
            <Columns>
              <Column>
                <Caption>タイトル</Caption>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                  v-model="title"
                />
              </Column>
              <Column>
                <Caption>説明</Caption>
              </Column>
              <Column>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Text input"
                  v-model="description"
                />
              </Column>
              <Column>
                <Caption>完了済</Caption>
              </Column>
              <Column>
                <div className="select is-small" style={{ width: "100%" }}>
                  <select style={{ width: "100%" }} v-model="isDone">
                    <option value="">すべて</option>
                    <option value="false">未完了</option>
                    <option value="true">完了</option>
                  </select>
                </div>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Caption>期限</Caption>
              </Column>
              <TwoColumn>
                {/* <Datepicker
                v-model="dueDateFrom"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="from"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
                <span className="mx-2">-</span>
                {/* <Datepicker
                v-model="dueDateTo"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="to"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
              </TwoColumn>
              <Column>
                <Caption>登録日</Caption>
              </Column>
              <TwoColumn>
                {/* <Datepicker
                v-model="createdAtFrom"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="from"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
                <span className="mx-2">-</span>
                {/* <Datepicker
                v-model="createdAtTo"
                :language="ja"
                :format="$formatDate.fromJs"
                placeholder="to"
                style="width: 100%"
                input-className="input form is-small"
              /> */}
              </TwoColumn>
            </Columns>
          </div>
        </PanelBlock>
      </Panel>
      <Panel>
        <PanelHeader>
          検索結果
          <PanelHeaderButton>
            {/* <font-awesome-icon :icon="['fas', 'plus']" className="mr-1" />  */}
            追加
          </PanelHeaderButton>
        </PanelHeader>
        <PanelBlock>
          <TableContainer>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <TableHeader>No</TableHeader>
                  <TableHeader>完了</TableHeader>
                  <TableHeader>タイトル</TableHeader>
                  <TableHeader>内容</TableHeader>
                  <TableHeader>期限</TableHeader>
                  <TableHeader>登録日</TableHeader>
                  <TableHeader>削除</TableHeader>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr>
                    <td>
                      <a>#1</a>
                    </td>
                    <td align="center">
                      <label className="checkbox">
                        <input type="checkbox" v-model="row.isDone" />
                      </label>
                    </td>
                    <td>title</td>
                    <td>description</td>
                    <td>dueDate</td>
                    <td>createdAt</td>
                    <td>
                      <button className="button is-small head-button">
                        {/* <font-awesome-icon :icon="['fas', 'trash-can']" /> */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </PanelBlock>
      </Panel>
    </div>
  );
}

const TableContainer = styled.div.attrs({
  className: "control",
})`
  overflow: auto;
  height: 350px;
`;

const TableHeader = styled.th.attrs({
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

const Panel = styled.div.attrs({
  className: "panel",
})`
  margin: 0.75rem 0 0 0;
`;

const PanelHeader = styled.div.attrs({
  className: "panel-heading is-size-6 p-2",
})`
  display: flex;
  align-items: center;
`;

const PanelHeaderButton = styled.button.attrs({
  className: "button is-small head-button",
})`
  margin-left: auto;
`;

const PanelBlock = styled.div.attrs({
  className: "panel-block",
})``;

const Columns = styled.div.attrs({
  className: "columns is-vcentered",
})``;

const Column = styled.div.attrs({
  className: "column is-2",
})`
  padding: 0.25rem;
`;

const TwoColumn = styled.div.attrs({
  className: "column is-4 flexbox",
})`
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
`;

const Caption = styled.div`
  background-color: hsl(0, 0%, 93%);
  color: black;
  font-size: 0.75rem;
  padding: 0.35rem;
  text-align: center;
  border-radius: 2px;
`;
