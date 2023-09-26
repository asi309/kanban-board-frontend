import SigninForm from './form';
import Link from 'next/link';

const SigninPage = () => {
  return (
    <div>
      <section className="">
        <SigninForm />
      </section>
      <section>
        <div>Don't have an account yet?</div>
        <Link href="/auth/register">Sign up</Link> for a new account
      </section>
    </div>
  );
};

export default SigninPage;
