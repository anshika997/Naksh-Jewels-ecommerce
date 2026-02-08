import React from 'react';

function Loader() {
  return (
    <div style={styles.loader}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    gap: '20px'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #d4af37',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  text: {
    color: '#666',
    fontSize: '16px'
  }
};

export default Loader;