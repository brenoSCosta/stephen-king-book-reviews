import styled from 'styled-components';
export const InfoBarButton = styled.button`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.orange_200};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50rem;
  transition: all 0.4s;
  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.orange_300};
  }
`;
