import React from 'react';

const Component1 = () => {
  return (
    <div className="container">
      <div className="outer-container">
        <div className="inner-container">
          <div className="metaball metaball-1"></div>
          <div className="metaball metaball-2"></div>
          <div className="metaball metaball-3"></div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .outer-container {
          width: 800px;
          height: 400px;
          filter: contrast(120%) brightness(105%);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .inner-container {
          width: 100%;
          height: 100%;
          position: relative;
          filter: blur(15px);
        }

        .metaball {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
        }

        .metaball-1 {
          width: 300px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: float 6s infinite ease-in-out;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .metaball-2 {
          width: 280px;
          height: 280px;
          animation: moveLeft 8s infinite ease-in-out;
          background: linear-gradient(135deg, #ff5858 0%, #f09819 100%);
        }

        .metaball-3 {
          width: 260px;
          height: 260px;
          animation: moveRight 7s infinite ease-in-out;
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }

        @keyframes moveLeft {
          0%, 100% {
            left: 60%;
            top: 45%;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            left: 30%;
            top: 55%;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes moveRight {
          0%, 100% {
            left: 40%;
            top: 55%;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            left: 70%;
            top: 45%;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Component1;