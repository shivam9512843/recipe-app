import React, { useState } from 'react';
import './AuthPage.css'; // Ensure this file contains the updated CSS

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Login:', { email, password });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Handle sign-up logic here (e.g., API call)
    console.log('Sign Up:', { fullName, email, password });
  };

  return (
    <div className="container">
      <div className="form-box">
        <form className="form" onSubmit={isLogin ? handleLogin : handleSignUp}>
          <span className="title">{isLogin ? 'Login' : 'Sign up'}</span>
          <span className="subtitle">
            {isLogin
              ? 'Sign in with your email and password.'
              : 'Create a free account with your email.'}
          </span>
          <div className="form-container">
            {!isLogin && (
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="form-button" type="submit">
            {isLogin ? 'Login' : 'Sign up'}
          </button>
        </form>
        <div className="form-section">
          <p>
            {isLogin ? 'Need an account?' : 'Have an account?'}{' '}
            <button className="link-button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
