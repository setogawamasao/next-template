// HINT:https://nextjs.org/docs/app/api-reference/file-conventions/not-found
export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center", // 上下中央寄せ
        justifyContent: "center", // 左右中央寄せ
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // 上から下に要素並べる
          alignItems: "center", // 上下中央寄せだけど、上から下に要素並べる、左右中央寄せ
        }}
      >
        <div style={{ fontSize: "10rem", lineHeight: 1 }}>404</div>
        <div style={{ fontSize: "3rem" }}>Page Not Found</div>
      </div>
    </div>
  );
}
