import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';
import { useLoginForm } from './useLoginForm';

const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();
  console.log(errors.name);
  return (
    <S.LoginFormContainer>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <S.LoginFormTitle>Entre em sua conta</S.LoginFormTitle>
        <Input
          label='Nome'
          id='name'
          placeholder='Nome'
          type='text'
          className='Input'
          {...register('name')}
          error={errors.name}
        />
        <Input label='Nosme' id='nasme' placeholder='Nosme' type='text' className='Input' />
        <Button typePrimary={true} type='submit'>
          Entrar
        </Button>
        <Button type='button'>Cadastrar</Button>
      </S.LoginForm>
    </S.LoginFormContainer>
  );
};
export default LoginForm;
