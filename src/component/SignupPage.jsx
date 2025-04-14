// SignupPage.jsx
import React, { useState } from 'react';
import './SignupPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Initialize useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setSuccess('');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    // Save user data in localStorage (simple demo)
    localStorage.setItem('user', JSON.stringify({ fullName, email, password }));

    // Show success message
    setError('');
    setSuccess('Account created successfully!');

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate('/'); // Redirect to login page
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div>
        <h2>Sign Up to</h2>
        <p className='access'>The Quadra</p>
        <p className="login-text">
          Already have an account? 
          <p className='log-here'><Link to="/login">Login here !</Link></p>
        </p>
        </div>
       
         <img
          src="src/component/Saly-14.png"
          alt="Illustration"
          className="signup-illustration"
        />
      </div>

      <div className="signup-right">
        <h3>Sign Up</h3>

        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       <div className="input-group">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Create Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

<div className="input-group">
  <input
    type={showConfirmPassword ? 'text' : 'password'}
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">
    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>



       
          <button type="submit" className="signup-btn">Create Account</button>
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

export default SignupPage;


 

 