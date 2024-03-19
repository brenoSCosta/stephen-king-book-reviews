import * as S from './styles';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  typePrimary?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'submit', typePrimary = true, name = '', className = 'Button', ...props }, ref) => {
    return (
      <S.Button type={type} name={name} {...props} ref={ref} $primary={typePrimary}>
        {name}
      </S.Button>
    );
  }
);

export default Button;
