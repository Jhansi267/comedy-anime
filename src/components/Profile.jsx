import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const avatarOptions = [
  '/Avatars/avatar1.jfif',
  '/Avatars/avatar2.jfif',
  '/Avatars/avatar3.jfif',
  '/Avatars/avatar4.jfif',
  '/Avatars/avatar5.jfif',
  '/Avatars/avatar6.jfif',
  '/Avatars/avatar7.jfif',
  '/Avatars/avatar8.jfif',
];

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const openPopup = () => {
    setNewName('');
    setSelectedAvatar('');
    setEditingIndex(null);
    setShowPopup(true);
    setError('');
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setNewName(profiles[index].name);
    setSelectedAvatar(profiles[index].avatar);
    setShowPopup(true);
    setError('');
  };

  const handleSubmit = () => {
    if (!newName.trim() || !selectedAvatar) {
      setError('Please enter all details');
      return;
    }

    const isDuplicate = profiles.some(
      (p, i) =>
        i !== editingIndex &&
        p.name.toLowerCase() === newName.trim().toLowerCase()
    );
    if (isDuplicate) {
      setError('Profile name already exists');
      return;
    }

    if (editingIndex !== null) {
      const updated = [...profiles];
      updated[editingIndex] = { name: newName.trim(), avatar: selectedAvatar };
      setProfiles(updated);
    } else {
      if (profiles.length >= 8) {
        setError('Maximum 8 profiles allowed');
        return;
      }
      setProfiles([...profiles, { name: newName.trim(), avatar: selectedAvatar }]);
    }

    setShowPopup(false);
    setNewName('');
    setSelectedAvatar('');
    setEditingIndex(null);
    setError('');
  };

  const handleTabClick = (tab) => {
    if (tab === 'profiles') return;

    const routeMap = {
      subscription: '/CurrentSubscription',
      history: '/history',
      account: '/accountsetting',  // Navigate to Accountsetting component
      downloads: '/downloads',
    };

    const path = routeMap[tab] || `/${tab}`;
    navigate(path);
  };

  return (
    <>
    <Navbar/>
        <div className="profile-page" style={{marginTop:'85px'}}>
      <div className="emoji-background">
        {[
          { emoji: '😂', size: '5rem' },
          { emoji: '🤣', size: '3rem' },
          { emoji: '😹', size: '1.8rem' },
          { emoji: '😆', size: '2.5rem' },
          { emoji: '🙃', size: '3.2rem' },
          { emoji: '😜', size: '2.2rem' },
          { emoji: '😝', size: '1.5rem' },
          { emoji: '🎭', size: '2.8rem' },
        ].map((item, index) => (
          <span
            key={`emoji-${index}`}
            className={`emoji emoji-${index}`}
            style={{ fontSize: item.size }}
          >
            {item.emoji}
          </span>
        ))}

        {[ // floating images
          '/Avatars/Banana.png',
          '/Avatars/confetti.png',
          '/Avatars/exaggerated-clipart-20.jpg',
          '/Avatars/speechbubles.png',
        ].map((src, index) => (
          <img
            key={`img-${index}`}
            src={src}
            alt={`bg-${index}`}
            className={`floating-img floating-img-${index}`}
          />
        ))}
      </div>

      <h1>LOL Profiles</h1>

      <div className="tabs">
        {['profiles', 'subscription', 'history', 'account', 'downloads'].map(tab => (
          <button
            key={tab}
            className={tab === 'profiles' ? 'active' : ''}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="profile-section">
        <button className="add-button" onClick={openPopup}>+ Add Profile</button>
        <div className="profile-list">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <img src={profile.avatar} alt={profile.name} />
              <div className="profile-info">
                <p className="profile-name">{profile.name}</p>
                <button className="edit-button" onClick={() => startEdit(index)}>✎</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <>
          <div className="overlay" onClick={() => setShowPopup(false)}></div>
          <div className="popup">
            <h2>{editingIndex !== null ? 'Edit Profile' : 'Add Profile'}</h2>
            <input
              type="text"
              placeholder="Enter name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="avatar-select">
              {avatarOptions.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`avatar-${index}`}
                  className={selectedAvatar === url ? 'selected' : ''}
                  onClick={() => setSelectedAvatar(url)}
                />
              ))}
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="popup-buttons">
              <button className="cancel" onClick={() => setShowPopup(false)}>Cancel</button>
              <button className="confirm" onClick={handleSubmit}>
                {editingIndex !== null ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    <Footer/>
    </>

  );
};

export default Profile;
