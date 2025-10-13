import React from 'react';

const Component5 = () => {
  return (
    <div style={{
      width: '300px',
      height: '300px',
      position: 'relative',
      transformStyle: 'preserve-3d',
      animation: 'morph 5s ease-in-out infinite'
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(315deg, #E91E63, #FF4081)',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        boxShadow: '0 0 30px rgba(233, 30, 99, 0.3)'
      }} />
      <style jsx>{`
        @keyframes morph {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default Component5;