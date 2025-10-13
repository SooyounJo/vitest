import React from 'react';

const Component3 = () => {
  return (
    <div className="container">
      <div className="metaballs">
        <div className="metaball metaball--small metaball-1"></div>
        <div className="metaball metaball--small metaball-2"></div>
        <div className="metaball metaball--small metaball-3"></div>
        <div className="metaball metaball--small metaball-4"></div>
        <div className="metaball metaball--small metaball-5"></div>
        <div className="metaball metaball--small metaball-6"></div>
        <div className="metaball metaball--tiny metaball-7"></div>
        <div className="metaball metaball--tiny metaball-8"></div>
        <div className="metaball metaball--tiny metaball-9"></div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .metaballs {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: contrast(40);
        }

        .metaball {
          position: absolute;
          background: black;
          border-radius: 100%;
          filter: blur(15px);
        }

        .metaball--small {
          width: 4rem;
          height: 4rem;
        }

        .metaball--tiny {
          width: 2rem;
          height: 2rem;
        }

        .metaball-1 {
          width: 4rem;
          height: 4rem;
          top: calc(50% - 2rem);
          left: calc(50% - 2rem);
        }

        .metaball-2 {
          width: 3.5rem;
          height: 3.5rem;
          animation: moveFromTop 8s infinite ease-in-out;
        }

        .metaball-3 {
          width: 3rem;
          height: 3rem;
          animation: moveFromRight 8s infinite ease-in-out;
        }

        .metaball-4 {
          width: 3.2rem;
          height: 3.2rem;
          animation: moveFromBottom 8s infinite ease-in-out;
        }

        .metaball-5 {
          width: 2.8rem;
          height: 2.8rem;
          animation: moveFromLeft 8s infinite ease-in-out;
        }

        .metaball-6 {
          width: 3rem;
          height: 3rem;
          animation: moveFromTopRight 8s infinite ease-in-out;
        }

        .metaball-7 {
          animation: moveFromBottomLeft 8s infinite ease-in-out;
        }

        .metaball-8 {
          animation: moveFromTopLeft 8s infinite ease-in-out;
        }

        .metaball-9 {
          animation: moveFromBottomRight 8s infinite ease-in-out;
        }

        @keyframes moveFromTop {
          0%, 100% {
            top: -10vh;
            left: 50%;
            transform: translate(-50%, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromRight {
          0%, 100% {
            top: 50%;
            left: 100vw;
            transform: translate(0, -50%);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromBottom {
          0%, 100% {
            top: 100vh;
            left: 50%;
            transform: translate(-50%, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromLeft {
          0%, 100% {
            top: 50%;
            left: -10vw;
            transform: translate(0, -50%);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromTopRight {
          0%, 100% {
            top: -10vh;
            left: 100vw;
            transform: translate(0, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromBottomLeft {
          0%, 100% {
            top: 100vh;
            left: -10vw;
            transform: translate(0, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromTopLeft {
          0%, 100% {
            top: -10vh;
            left: -10vw;
            transform: translate(0, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes moveFromBottomRight {
          0%, 100% {
            top: 100vh;
            left: 100vw;
            transform: translate(0, 0);
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Component3;