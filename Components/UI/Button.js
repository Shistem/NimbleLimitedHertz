import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  padding: ${(props) => props.theme.spacing.medium} ${(props) => props.theme.spacing.large};
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Button;