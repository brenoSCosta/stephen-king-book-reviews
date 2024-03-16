import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';
import { FieldError } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: FieldError;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', id = '', label = '', placeholder = '', error, ...props }, ref) => {
    return (
      <S.InputDiv>
        <S.LabelStyled htmlFor={id}>{label}</S.LabelStyled>
        <S.InputStyled
          type={type}
          placeholder={placeholder}
          ref={ref}
          id={id}
          {...props}
          $error={error ? true : false}
        />
        {error && <S.TextError>{error.message}</S.TextError>}
      </S.InputDiv>
    );
  }
);

export default Input;
