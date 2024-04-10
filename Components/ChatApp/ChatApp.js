import React from 'react';
import ChatWindow from './ChatWindow';
import ConversationList from './ConversationList';
import InputBox from './InputBox';
import PerformanceInfo from './PerformanceInfo';
import { useChat } from '../../hooks/useChat';
import { Container, Wrapper } from './styles';

function ChatApp() {
  const {
    messages,
    currentConversation,
    conversations,
    inputText,
    handleInputChange,
    handleSendMessage,
    handleConversationSwitch,
    tokenGenerationRate,
    totalTime,
    firstTokenTime,
  } = useChat();

  return (
    <Container>
      <Wrapper>
        <ConversationList
          conversations={conversations}
          currentConversation={currentConversation}
          onConversationSwitch={handleConversationSwitch}
        />
        <ChatWindow messages={messages} />
        <InputBox
          inputText={inputText}
          onInputChange={handleInputChange}
          onSendMessage={handleSendMessage}
        />
        <PerformanceInfo
          tokenGenerationRate={tokenGenerationRate}
          totalTime={totalTime}
          firstTokenTime={firstTokenTime}
        />
      </Wrapper>
    </Container>
  );
}

export default ChatApp;