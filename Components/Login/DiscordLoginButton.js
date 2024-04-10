import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7289da;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: ${(props) => props.theme.spacing.medium} ${(props) => props.theme.spacing.large};
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #677bc4;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${(props) => props.theme.spacing.medium};
`;

function DiscordLoginButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon icon={faDiscord} />
      Login with Discord
    </Button>
  );
}

export default DiscordLoginButton;