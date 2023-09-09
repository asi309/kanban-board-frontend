import { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { KANBAN_API } from '@import/constants/url';
// import { setCookie } from 'cookies-next';

type NextAuthOptionsCallback = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuthOptions;

export const authOptions: NextAuthOptionsCallback = (req, res) => {
  return {
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

            const cookie = response.headers.get('set-cookie');
            console.log('Cookie', cookie);
            if (cookie) {
              // res.setHeader('Set-Cookie', cookie);
              // setCookie('express:sess', cookie);
            }

            if (response.status === 200 && cookie) {
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
};
