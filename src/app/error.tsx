"use client"; // Error components must be Client Components
// HINT:https://nextjs.org/docs/app/building-your-application/routing/error-handling

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center", // 上下中央寄せ
        justifyContent: "center", // 左右中央寄せ
        flexDirection: "column", // 上から下に要素並べる
      }}
    >
      <div style={{ fontSize: "3rem" }}>Unexpected Error : {error.message}</div>
      <div>{error.stack}</div>
      <button
        className="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
