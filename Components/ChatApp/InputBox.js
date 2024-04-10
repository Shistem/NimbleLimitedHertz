import React from 'react';
import { InputContainer, ChatInput, SendButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function InputBox({ inputText, onInputChange, onSendMessage }) {
  return (
    <InputContainer>
      <ChatInput
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Type your message..."
      />
      <SendButton onClick={onSendMessage}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </SendButton>
    </InputContainer>
  );
}

export default InputBox;