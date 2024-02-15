import React from 'react';
import { useFormik } from 'formik';

// Assuming getStrapiURL is a utility function you've defined elsewhere in your project.
import { getStrapiURL } from './utils';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    onSubmit: async (values) => {
      const res = await fetch(getStrapiURL('/auth/local'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const { jwt } = await res.json();
      localStorage.setItem('token', jwt);
    },
  });

  return (
    <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={formik.handleSubmit} className="login-form" style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
        <h1>Login</h1>
        <input
          onChange={formik.handleChange}
          value={formik.values.identifier}
          type="email"
          name="identifier"
          placeholder="Enter your email"
          style={{ padding: '8px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          placeholder="Enter your password"
          style={{ padding: '8px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', margin: '10px 0', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
