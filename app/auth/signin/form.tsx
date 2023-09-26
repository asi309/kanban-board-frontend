'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SigninForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseJSON = await response.json();
    console.log(responseJSON);
    if (response.status === 200) {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <div className="form-group">
        <label htmlFor="">Email Address</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      {/* {errors} */}
      <button className="btn btn-primary" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default SigninForm;
