import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const List = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spacing.medium};
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? props.theme.colors.secondary : 'transparent')};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ConversationTitle = styled.div`
  font-weight: bold;
  margin-left: ${(props) => props.theme.spacing.medium};
`;

export const Window = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.medium};
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: ${(props) => props.theme.spacing.medium};
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.text};
`;

export const SendButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 50%;
  padding: ${(props) => props.theme.spacing.medium};
  margin-left: ${(props) => props.theme.spacing.medium};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const PerformanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const PerformanceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;