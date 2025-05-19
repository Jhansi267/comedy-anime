import React, { useState } from 'react';
import './AccountSetting.scss';

const AccountSetting = () => {
  const [formData, setFormData] = useState({
    name: 'Jhansi Regu',
    email: 'jhansi@gmail.com',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setMessage('🎉 Your account info was saved! 🎉');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="account-settings">
      <h1>🎭 Account Settings</h1>
      <div className="form">
        <label>
          🤩 Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          📧 Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          🔒 Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button onClick={handleSave}>💾 Save Changes</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AccountSetting;
