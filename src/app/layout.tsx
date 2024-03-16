'use client';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import StyledComponentsRegistry from '@/lib/registry';
import Head from 'next/head';
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='../../public/favicon.ico' />
      </Head>

      <body>
        <StyledComponentsRegistry>
          <>
            <ThemeProvider theme={theme}>
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
