import React, { useState } from "react";

const MessageForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <form action="" className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageForm;
