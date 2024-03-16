import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const LabelStyled = styled.label`
  margin-bottom: 0.7rem;
  display: block;
  font-size:  ${(props) => props.theme.font.sizes.xxsmall};
  font-weight:  ${(props) => props.theme.font.semiBold};
`;

export const InputStyled = styled.input`
  border: .1rem solid  ${(props) => props.theme.colors.neutral};
  border-radius: .8rem;
  padding: .7rem;
  &:focus{
    border: .18rem solid  ${(props) => props.theme.colors.primary};
  }
`;