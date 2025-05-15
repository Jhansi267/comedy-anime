import React, { useState } from 'react';
import './Signup.scss';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, password } = form;
    if (name && email && password) {
      alert('😂 Woohoo! Welcome to LaughVerse!');
    } else {
      alert('😅 Don’t ghost us! Fill everything!');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-top">
        <h1>😂 LaughVerse – Signup to Stream Giggles!</h1>
      </div>
      <div className="signup-card">
        <div className="signup-image">
          <img
            src="https://media.tenor.com/tD6Z5l88XHgAAAAC/anime-laughing-laugh.gif"
            alt="Laughing anime"
          />
        </div>
        <div className="signup-form">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <label>
            <input type="checkbox" /> Keep me updated with memes & scenes!
          </label>
          <button onClick={handleSubmit}>🤣 Sign Me Up!</button>
          <p>
            Already     laughing with us? <span className="login-link">Log In!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
