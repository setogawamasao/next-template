"use client";
import { useMessage } from "@/states/messageStore";

export default function MessageBox() {
  const { message, isOpen, close } = useMessage();
  return (
    <div className={`modal ${isOpen ? "is-active" : undefined}`}>
      <div className="modal-background" onClick={close}></div>
      <div className="modal-content">
        <article className="message">
          <div className="message-header">
            <p>INFORMATION</p>
            <button className="delete" aria-label="delete" onClick={close} />
          </div>
          <div className="message-body" style={{ whiteSpace: "pre-wrap" }}>
            {message}
          </div>
        </article>
      </div>
    </div>
  );
}
