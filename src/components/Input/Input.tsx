import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = 'text', id = '', label = '', placeholder = '', className = 'Input', ...props },
    ref
  ) => {
    return (
      <S.InputDiv>
        <S.LabelStyled htmlFor={id}>
          {label}
        </S.LabelStyled >
        <S.InputStyled
          type={type}
          placeholder={placeholder}
          ref={ref}
          id={id}
          className={className}
          {...props}
        />
      </S.InputDiv>
    );
  }
);

export default Input;