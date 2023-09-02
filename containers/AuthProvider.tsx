'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
  pageProps?: SessionProviderProps;
};

export const NextAuthProvider = ({ children, pageProps }: Props) => {
  return (
    <SessionProvider session={pageProps?.session}>{children}</SessionProvider>
  );
};
