import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  gap: 10rem;
  max-width: 100vw;
  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0;
    gap: 2rem;
  }
`;
export const HeaderDescription = styled.div`
  align-self: center;
  width: 20%;
  min-width: 30rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.devices.tablet} {
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;
export const HeaderDescriptionTitle = styled.h1`
  text-align: center;
  @media ${(props) => props.theme.devices.tablet} {
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;
export const HeaderDescriptionText = styled.p`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: justify;
  @media ${(props) => props.theme.devices.tablet} {
    font-size: ${(props) => props.theme.font.sizes.xxxsmall};
    margin: 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: '100%';
`;

export const imageStyle = {
  filter: 'drop-shadow(2px 1px 1px gray)',
  maxWidth: '100%',
};
