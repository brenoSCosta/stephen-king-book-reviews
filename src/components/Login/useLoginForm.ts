import { User } from '@/Types/User';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

const schema = z.object({
  name: z.string().refine((data) => data.trim() !== '', {
    message: 'Nome é obrigatório',
  }),
  // email: z.string().email({ message: 'Email inválido' }),
  // password: z.string().min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
  // .refine(
  //   (data) =>
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(data),
  //   {
  //     message:
  //       'Senha deve conter pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial',
  //   }
  // ),
});
export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(schema) });

  const context = useContext(AuthContext);

  const onSubmit: SubmitHandler<User> = async (data, event) => {
    event?.preventDefault();
    context.signIn({
      email: '',
      password: '',
    });
  };

  return { register, handleSubmit, errors, onSubmit };
};
