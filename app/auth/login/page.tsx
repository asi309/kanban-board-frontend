import LoginForm from './form';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
      <section className="">
        <LoginForm />
      </section>
      <section>
        <div>Don't have an account yet?</div>
        <Link href="/auth/register">Sign up</Link> for a new account
      </section>
    </div>
  );
};

export default LoginPage;
