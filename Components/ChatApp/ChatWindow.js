import React, { useRef, useEffect } from 'react';
import Message from './Message';
import { Window, MessageContainer } from './styles';

function ChatWindow({ messages }) {
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Window>
      <MessageContainer ref={messageContainerRef}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </MessageContainer>
    </Window>
  );
}

export default ChatWindow;