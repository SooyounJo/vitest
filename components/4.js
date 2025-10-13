import React from 'react';

const Component4 = () => {
  return (
    <div style={{
      width: '300px',
      height: '300px',
      position: 'relative',
      animation: 'spin 4s linear infinite'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        height: '200px',
        marginLeft: '-100px',
        marginTop: '-100px',
        border: '20px solid transparent',
        borderTop: '20px solid #9C27B0',
        borderRadius: '50%',
        animation: 'ripple 2s ease-out infinite'
      }} />
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Component4;