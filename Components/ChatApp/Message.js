import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => (props.role === 'user' ? props.theme.colors.secondary : props.theme.colors.background)};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 10px;
  max-width: 70%;
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};
`;

const MessageContent = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  flex-grow: 1;
`;

const CopyButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  margin-left: ${(props) => props.theme.spacing.medium};
`;

function Message({ message }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <MessageContainer role={message.role}>
      <MessageContent>{message.content}</MessageContent>
      <CopyButton onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} />
        {isCopied ? 'Copied!' : 'Copy'}
      </CopyButton>
    </MessageContainer>
  );
}

export default Message;