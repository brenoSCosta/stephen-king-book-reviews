import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginFormTitle = styled.h1`
  font-size: ${(props) => props.theme.font.sizes.medium};
  align-self: center;
`;

export const LoginForm = styled.form`
  width: 50rem;
  height: 50%;
  min-height: 20rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginButton = styled.button<{ $primary?: boolean }>`
  font-size: 1.1rem;
  color: white;
  align-self: center;
  width: 70%;
  background-color: ${(props) =>
    props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
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
