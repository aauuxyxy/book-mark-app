import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Header from './components/Header';
import AuthWrapper from './components/AuthWrapper';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Header />
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;
