"use client";
import styled from "styled-components";
import { useMessage } from "@/states/messageStore";
import { useLoading } from "@/states/loadingStore";

export default function MessageBox() {
  const { setMessage, open } = useMessage();
  const { show, hide } = useLoading();

  const openMessage = () => {
    setMessage("こんちには");
    open();
  };
  return (
    <div className="container">
      <button onClick={openMessage}>open message</button>
      <button onClick={show}>show loading</button>
    </div>
  );
}
