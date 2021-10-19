import React from "react";
import MyMessage from "./MyMessage";
import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import { KeyObject } from "crypto";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages); //id of messages

    return keys.map((key, index) => {
      const msg = messages[key];
      const lastMsgKey = index == 0 ? null : keys[index - 1];
      const isMyMsg = userName === msg.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            isMyMsg ? <MyMessage msg={msg} />
            : <TheirMessage msg={msg} lastMsg={messages[lastMsgKey]} />
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMsg ? "18px" : "0px",
              marginLeft: isMyMsg ? "0px" : "69px",
            }}
          ></div>
        </div>
      );
    });
  };
  renderMessages();

  if (!chat) return "Loading...";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `{person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
