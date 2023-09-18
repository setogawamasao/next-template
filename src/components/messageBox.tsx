"use client";
import styled from "styled-components";
import { useMessage } from "@/states/messageStore";

export default function MessageBox() {
  const { message, isOpen, open, close } = useMessage();
  return (
    <div className={`modal ${isOpen ? "is-active" : undefined}`}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <p>INFORMATION</p>
            <button className="delete" aria-label="delete" onClick={close} />
          </div>
          <div className="message-body">{message}</div>
        </article>
      </div>
    </div>
  );
}
