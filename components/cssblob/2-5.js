import React from 'react';

const Component2_5 = () => {
  return (
    <div className="container">
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          
          <radialGradient id="gradient-big" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff3399" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#d966cc" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#b366ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c864ff" stopOpacity="0.75" />
          </radialGradient>
          
          <radialGradient id="gradient-small" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#e680d9" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#d9a3e8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d0b3e8" stopOpacity="0.75" />
          </radialGradient>
        </defs>
      </svg>

      <div className="metaballs">
        <div className="metaball metaball--big metaball-1"></div>
        <div className="metaball metaball--small metaball-2"></div>
      </div>

      <style jsx>{`
        .container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          overflow: hidden;
        }

        .metaballs {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: url(#gooey);
        }

        .metaball {
          position: absolute;
          border-radius: 100%;
        }

        .metaball--big {
          width: 30vw;
          height: 30vw;
          top: calc(50% - 15vw);
          left: calc(50% - 15vw);
          background: radial-gradient(
            circle at 40% 40%, 
            rgba(255, 51, 153, 0.95) 0%, 
            rgba(217, 102, 204, 0.85) 30%,
            rgba(179, 102, 255, 0.75) 60%, 
            rgba(200, 100, 255, 0.65) 100%
          );
          animation: glowBig 6s infinite ease-in-out;
        }

        .metaball--small {
          width: 6rem;
          height: 6rem;
          background: radial-gradient(
            circle at 40% 40%, 
            rgba(255, 51, 153, 0.9) 0%, 
            rgba(217, 102, 204, 0.8) 30%,
            rgba(179, 102, 255, 0.7) 60%, 
            rgba(200, 100, 255, 0.6) 100%
          );
        }

        .metaball-2 {
          width: 7rem;
          height: 7rem;
          animation: move 8s infinite ease-in-out, fadeInOut 8s infinite ease-in, glowSmall 6s infinite ease-in-out;
        }

        @keyframes move {
          0% {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          50% {
            left: calc(50% - 3rem);
            top: 50%;
            transform: translateY(-50%);
          }
          100% {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 1;
          }
          35% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          65% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes glowBig {
          0% {
            filter: blur(2px) brightness(1);
          }
          50% {
            filter: blur(2px) brightness(1.3);
          }
          100% {
            filter: blur(2px) brightness(1);
          }
        }

        @keyframes glowSmall {
          0% {
            filter: blur(3px) brightness(1);
          }
          50% {
            filter: blur(3px) brightness(1.3);
          }
          100% {
            filter: blur(3px) brightness(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Component2_5;

