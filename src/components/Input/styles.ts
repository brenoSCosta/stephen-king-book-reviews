import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const LabelStyled = styled.label`
  margin-bottom: 0.7rem;
  display: block;
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
  font-weight: ${(props) => props.theme.font.semiBold};
`;

export const InputStyled = styled.input<{ $error?: boolean }>`
  border: 0.1rem solid
    ${(props) => (props.$error ? props.theme.colors.danger : props.theme.colors.neutral)};
  border-radius: 0.8rem;
  padding: 0.7rem;
  &:focus {
    border: 0.18rem solid
      ${(props) => (props.$error ? props.theme.colors.danger : props.theme.colors.primary)};
  }
`;

export const TextError = styled.p`
  padding-top: 0.6rem;
  padding-left: 0.6rem;
  font-size: ${(props) => props.theme.font.sizes.xxsmall};
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.danger};
`;
