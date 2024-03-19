import styled from 'styled-components';
export const HeaderDescription = styled.div`
  align-self: center;
  width: 20%;
  min-width: 30rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
`;
export const HeaderDescriptionTitle = styled.h3`
  text-align: center;
`;
export const HeaderDescriptionText = styled.p`
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: justify;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 40rem;
  width: 30rem;
`;
