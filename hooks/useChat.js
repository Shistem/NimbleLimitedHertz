import { useState, useEffect } from 'react';
import { getConversationsFromStorage, saveConversationsToStorage } from '../utils/localStorage';
import { sendMessage } from '../utils/api';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [tokenGenerationRate, setTokenGenerationRate] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [firstTokenTime, setFirstTokenTime] = useState(0);

  useEffect(() => {
    const storedConversations = getConversationsFromStorage();
    if (storedConversations) {
      setConversations(storedConversations);
      setCurrentConversation(storedConversations[0]);
    }
  }, []);

  useEffect(() => {
    saveConversationsToStorage(conversations);
  }, [conversations]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        content: inputText,
        role: 'user',
      };

      const updatedConversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, newMessage],
      };

      const updatedConversations = conversations.map((conv) =>
        conv.id === updatedConversation.id ? updatedConversation : conv
      );

      setConversations(updatedConversations);
      setCurrentConversation(updatedConversation);
      setInputText('');

      try {
        const { tokenGenerationRate, totalTime, firstTokenTime, assistantMessage } = await sendMessage(
          updatedConversation.messages
        );
        setTokenGenerationRate(tokenGenerationRate);
        setTotalTime(totalTime);
        setFirstTokenTime(firstTokenTime);

        const finalUpdatedConversation = {
          ...updatedConversation,
          messages: [...updatedConversation.messages, assistantMessage],
        };

        const finalUpdatedConversations = conversations.map((conv) =>
          conv.id === finalUpdatedConversation.id ? finalUpdatedConversation : conv
        );

        setConversations(finalUpdatedConversations);
        setCurrentConversation(finalUpdatedConversation);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleConversationSwitch = (conversation) => {
    setCurrentConversation(conversation);
  };

  return {
    messages: currentConversation?.messages || [],
    currentConversation,
    conversations,
    inputText,
    handleInputChange,
    handleSendMessage,
    handleConversationSwitch,
    tokenGenerationRate,
    totalTime,
    firstTokenTime,
  };
}