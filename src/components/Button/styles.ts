import styled from 'styled-components';
export const Button = styled.button<{ $primary?: boolean }>`
  font-size: 1.1rem;
  color: white;
  align-self: center;
  width: 70%;
  background-color: ${(props) =>
    props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) => (props.$primary ? props.theme.colors.secondary : props.theme.colors.primary)};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 1.4rem;
  transition: all 0.4s;
  height: 4rem;
  /* &:focus, */
  &:hover {
    opacity: 0.8;
  }
`;
