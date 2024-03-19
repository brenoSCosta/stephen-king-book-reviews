import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0;
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
export const HeaderDescriptionTitle = styled.h3`
  text-align: center;
  font-size: ${(props) => props.theme.font.sizes.medium};
  @media ${(props) => props.theme.devices.tablet} {
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;
export const HeaderDescriptionText = styled.p`
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
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
`;
export const ImageContainer2 = styled.div`
  position: absolute;
  width: 30rem;
`;
export const imageStyle = {
  filter: 'drop-shadow(1px 1px 1px gray)',
};
