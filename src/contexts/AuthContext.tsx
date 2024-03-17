import { recoverUserInformation, signInRequest } from '@/services/auth';
import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { User } from '@/Types/User';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  isAuthenticaded: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const isAuthenticaded = false;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { 'skbooks-token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'skbooks-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(user);
    router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticaded, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
