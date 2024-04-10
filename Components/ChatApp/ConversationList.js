import React from 'react';
import { List, ListItem, ConversationTitle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function ConversationList({ conversations, currentConversation, onConversationSwitch }) {
  return (
    <List>
      {conversations.map((conversation) => (
        <ListItem
          key={conversation.id}
          active={conversation.id === currentConversation?.id}
          onClick={() => onConversationSwitch(conversation)}
        >
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
          <ConversationTitle>{conversation.title}</ConversationTitle>
        </ListItem>
      ))}
    </List>
  );
}

export default ConversationList;