import React from "react";
import MyMessage from "./MyMessage";
import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  console.log(props);
  return <div>ChatFeed</div>;
};

export default ChatFeed;
