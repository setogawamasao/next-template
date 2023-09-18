"use client";
import React, { ReactNode } from "react";
import { useLoading } from "@/states/loadingStore";
import { useMessage } from "@/states/messageStore";
import { setOnError, parseApiError } from "@/services/errorHandler";

export const ErrorHandlerSetup: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  console.log("ErrorHandlerSetup");
  const { setMessage, open } = useMessage();

  setOnError((error: Error) => {
    const { status, axiosError } = parseApiError(error);
    if (axiosError?.code === "ECONNABORTED") {
      setMessage("接続に問題が発生しました。");
    } else if (status === 403) {
      setMessage("サインアウトして、再度サインインを行ってください。");
    } else {
      setMessage("エラーが発生しました。");
    }
    open();
  });

  return <>{children}</>;
};
