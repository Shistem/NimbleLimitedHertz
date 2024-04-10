import styled from 'styled-components';

export const Typography = styled.div`
  font-size: ${(props) => props.theme.fontSizes[props.variant || 'medium']};
  color: ${(props) => props.theme.colors.text};
`;