import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Make sure Loader is in the same folder or adjust path accordingly
import './Login.scss';

export default function Login() {
  const [loading, setLoading] = useState(true); // Loading state for 5 seconds
  const [step, setStep] = useState('login'); // login, signup, forgot-email, forgot-otp, forgot-reset

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Signup states
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // Forgot Password states
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Show loader for 5 seconds on mount
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Login submit
  const handleLoginSubmit = e => {
    e.preventDefault();
    if (email === 'funny@anime.com' && password === 'Laugh123') {
      alert('Welcome to Comedy Anime OTT!');
      setError('');
      setSuccess('');
    } else {
      setError('Incorrect email or password!');
      setSuccess('');
    }
  };

  // Signup submit
  const handleSignupSubmit = e => {
    e.preventDefault();
    if (!signupName.trim()) {
      setError('Please enter your name');
      setSuccess('');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setError("Passwords don't match");
      setSuccess('');
      return;
    }
    alert(`Account created for ${signupName}! Please login.`);
    setError('');
    setSuccess('Signup successful. Please login.');
    setStep('login');
    // Reset signup fields
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };

  // Forgot password email submit
  const handleForgotEmailSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    alert(`OTP sent to ${forgotEmail}`);
    setStep('forgot-otp');
  };

  // Forgot password OTP submit
  const handleForgotOtpSubmit = e => {
    e.preventDefault();
    if (otp.trim() === '123456') {
      setError('');
      setSuccess('');
      setStep('forgot-reset');
    } else {
      setError('Invalid OTP. Please try again.');
      setSuccess('');
    }
  };

  // Forgot password reset submit
  const handleForgotResetSubmit = e => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      setSuccess('');
      return;
    }
    alert('Password successfully reset!');
    setEmail(forgotEmail);
    setPassword(newPassword);
    setStep('login');
    setError('');
    setSuccess('Password reset successful. Please log in.');
    // Reset forgot password states
    setForgotEmail('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
  };

  if (loading) {
    return <Loader appName="Comedy Anime OTT" />;
  }

  return (
    <div className="page">
      <div className="left-side">
        <div className="centered-quote">
          <p className="quote">"Laughter is a sunbeam of the soul."</p>
        </div>
      </div>

      <div className="right-side">
        <div className="login-card">
          <h2 className="card-title">
            {step === 'signup'
              ? 'Create Your Account!'
              : step.startsWith('forgot')
              ? 'Reset Your Password'
              : 'Laugh Out Loud!'}
          </h2>

          {/* LOGIN FORM */}
          {step === 'login' && (
            <form onSubmit={handleLoginSubmit} className="form">
              <div className="input-group">
                <span className="icon">📧</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div className="input-group">
                <span className="icon">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="input no-eye"
                  required
                />
                <span
                  className="eye-icon"
                  onClick={toggleShowPassword}
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#888"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#888"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.88 10.88 0 0 1 12 19c-4.477 0-8.268-2.943-9.542-7a10.53 10.53 0 0 1 1.588-3.042" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                      <path d="M9.53 9.53a3.5 3.5 0 0 1 4.94 4.94" />
                    </svg>
                  )}
                </span>
              </div>

              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}

              <button type="submit" className="button">
                Sign In
              </button>

              <div className="extra-options">
                <button
                  type="button"
                  className="forgot"
                  onClick={() => {
                    setStep('forgot-email');
                    setSuccess('');
                    setError('');
                  }}
                >
                  Forgot Password?
                </button>
                <p className="signup-text">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="signup-link"
                    onClick={() => {
                      setStep('signup');
                      setError('');
                      setSuccess('');
                    }}
                  >
                    Signup
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* SIGNUP FORM */}
          {step === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="form">
              <div className="input-group">
                <span className="icon">👤</span>
                <input
                  type="text"
                  placeholder="Name"
                  value={signupName}
                  onChange={e => setSignupName(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="input-group">
                <span className="icon">📧</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={signupEmail}
                  onChange={e => setSignupEmail(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="input-group">
                <span className="icon">🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={e => setSignupPassword(e.target.value)}
                  className="input"
                  required
                />
              </div>
              <div className="input-group">
                <span className="icon">🔒</span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={signupConfirmPassword}
                  onChange={e => setSignupConfirmPassword (e.target.value)}
                    className="input"
                    required
                    />
              </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" className="button">
            Sign Up
          </button>

          <p className="signup-text">
            Already have an account?{' '}
            <button
              type="button"
              className="signup-link"
              onClick={() => {
                setStep('login');
                setError('');
                setSuccess('');
              }}
            >
              Login
            </button>
          </p>
        </form>
      )}

      {/* FORGOT PASSWORD - STEP 1: ENTER EMAIL */}
      {step === 'forgot-email' && (
        <form onSubmit={handleForgotEmailSubmit} className="form">
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={forgotEmail}
              onChange={e => setForgotEmail(e.target.value)}
              className="input"
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" className="button">
            Send OTP
          </button>

          <button
            type="button"
            className="back-button"
            onClick={() => {
              setStep('login');
              setError('');
              setSuccess('');
            }}
          >
            Back to Login
          </button>
        </form>
      )}

      {/* FORGOT PASSWORD - STEP 2: ENTER OTP */}
      {step === 'forgot-otp' && (
        <form onSubmit={handleForgotOtpSubmit} className="form">
          <div className="input-group">
            <span className="icon">🔢</span>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className="input"
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" className="button">
            Verify OTP
          </button>

          <button
            type="button"
            className="back-button"
            onClick={() => {
              setStep('forgot-email');
              setError('');
              setSuccess('');
            }}
          >
            Back
          </button>
        </form>
      )}

      {/* FORGOT PASSWORD - STEP 3: RESET PASSWORD */}
      {step === 'forgot-reset' && (
        <form onSubmit={handleForgotResetSubmit} className="form">
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="input"
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit" className="button">
            Reset Password
          </button>

          <button
            type="button"
            className="back-button"
            onClick={() => {
              setStep('forgot-otp');
              setError('');
              setSuccess('');
            }}
          >
            Back
          </button>
        </form>
      )}
    </div>
  </div>
</div>
  )
}
