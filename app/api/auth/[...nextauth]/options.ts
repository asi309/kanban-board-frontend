import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { KANBAN_API } from '@import/constants/url';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
  },
  // Setup providers for auth
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johndoe@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Send request for login to server
        const data = {
          email: credentials?.email,
          password: credentials?.password,
        };

        try {
          const response = await fetch(`${KANBAN_API}/users/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (response.status === 200) {
            const user = await response.json();
            return user;
          } else {
            return null;
            // TODO: return error callback to display the error thrown
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
};
