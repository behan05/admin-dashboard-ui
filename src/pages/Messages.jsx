import React, { useState } from "react";
import style from "../styles/messages.module.css";

function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", text: "Hello, how can I reset my password?", time: "10:30 AM" },
    { id: 2, sender: "Jane Smith", text: "Can I get an invoice for my purchase?", time: "11:00 AM" },
    { id: 3, sender: "Michael Brown", text: "My account is locked. Please help!", time: "12:15 PM" }
  ]);

  return (
    <div className={style.container}>
      <h2>Messages</h2>

      <div className={style.messageList}>
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className={style.message}>
              <div className={style.messageHeader}>
                <strong>{msg.sender}</strong>
                <span className={style.time}>{msg.time}</span>
              </div>
              <p>{msg.text}</p>
              <button className={style.replyBtn}>Reply</button>
            </div>
          ))
        ) : (
          <p className={style.noMessage}>No new messages.</p>
        )}
      </div>
    </div>
  );
}

export default Messages;
