import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { generateString } from "@/test/testUtil";
import ItemForm from "./page";

// mock
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => {
        return;
      },
    };
  },
}));

// テスト開始
describe("画面が表示されたとき", () => {
  test("ページタイトルが「TODO新規登録」であることのテスト", () => {
    render(<ItemForm />);

    const nameLabel = screen.getByText("TODO新規登録");
    expect(nameLabel).toBeInTheDocument();
  });
});

describe("登録ボタンを押下した時", () => {
  const user = userEvent.setup();
  test("タイトル項目の必須チェックのテスト", async () => {
    render(<ItemForm />);

    const registerButton = screen.getByRole("button", { name: "登録" });

    await user.click(registerButton);

    const resultLabel = screen.getByText("必須項目です");
    expect(resultLabel).toBeInTheDocument();
  });

  test("説明項目のMAX長チェックのテスト", async () => {
    render(<ItemForm />);

    const descriptionInput = screen.getByPlaceholderText("Textarea");
    const registerButton = screen.getByRole("button", { name: "登録" });

    await user.type(descriptionInput, generateString(301));
    await user.click(registerButton);

    const resultLabel = screen.getByText("300文字以上入力できません");
    expect(resultLabel).toBeInTheDocument();
  });
});
