import { withAuth } from 'next-auth/middleware';

export const config = { matcher: ['/((?!auth|favicon).*)'] };

export default withAuth(
  (req) => {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({req, token}) => {
        return !!token;
      }
    },
    // pages: {
    //   signIn: '/auth/login',
    // },
  }
);
