// LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user data from localStorage (saved during signup)
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user exists
    if (!storedUser) {
      setError('No account found. Please sign up.');
      setSuccess('');
      return;
    }

    // Validate email and password
    if (storedUser.email !== email) {
      setError('Invalid email address.');
      setSuccess('');
      return;
    }

    if (storedUser.password !== password) {
      setError('Incorrect password.');
      setSuccess('');
      return;
    }

    // If validation is successful
    setError('');
    setSuccess('Login successful!');
    
    // Redirect to the home page or dashboard
    setTimeout(() => {
      navigate('/dashboard'); // Redirect to dashboard or another page
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className='login-left-text'>
           <h2>Sign in to</h2>
        <p className='access'>access workspace</p>
        <p className="register-text">
          If you don’t have an account, 
          <p>You can <Link to="/signup">Register here !</Link></p> 
        </p>
        </div>
       
          <img
          src="src/component/Saly-14.png"
          alt="Illustration"
          className="login-illustration"
        />
      </div>

      <div className="login-right">
        <h3>Sign in</h3>

        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot">Forgot password?</div>
          <button type="submit" className="login-btn">Login</button>
        </form>
            <p className="alt-signup-text">or continue with</p>
        <div className="social-icons">
          <span>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              className="signup-link"
            />
          </span>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="apple"
              className="signup-link"
            />
          </span>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="facebook"
              className="signup-link"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
