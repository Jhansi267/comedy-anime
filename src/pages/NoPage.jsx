import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();
const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#1c1c1c',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#ff4d6d',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: '0.3s',
    },
  };
return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Oops! The page you're looking for doesn't exist.</p>
      <button style={styles.button} onClick={() => navigate('/home')}>
        Go Home
      </button>
    </div>
  );
};
export default NoPage;