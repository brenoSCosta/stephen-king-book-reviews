
import { Input } from "../Input";
import * as S from "./styles";

const LoginForm= ()=>{
    return <S.LoginFormContainer>
      
                <S.LoginFormDiv>
                <Input
                  label='Nome'
                  id='name'
                  placeholder='Nome'
                  type='text'
                  className='Input'
                />
                 <Input
                  label='Nome'
                  id='name'
                  placeholder='Nome'
                  type='text'
                  className='Input'
                />
                    <S.LoginButton>Sign in</S.LoginButton>
                    <S.LoginButton>dsadas</S.LoginButton>
                </S.LoginFormDiv>
        </S.LoginFormContainer>
}
export default LoginForm;