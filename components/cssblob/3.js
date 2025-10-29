import React, { useState } from 'react';

const Component3 = () => {
  const [mode, setMode] = useState(1);

  return (
    <div className="container">
      <div className="metaballs">
        <div className="metaball metaball--small metaball-1"></div>
        <div className={`metaball metaball--small metaball-2 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--small metaball-3 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--small metaball-4 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--small metaball-5 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--small metaball-6 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--tiny metaball-7 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--tiny metaball-8 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
        <div className={`metaball metaball--tiny metaball-9 ${mode === 2 ? 'color-mode' : ''} ${mode === 3 ? 'rotate-mode' : ''}`}></div>
      </div>

      <div className="mode-buttons">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setMode(num)}
            className={`mode-button ${mode === num ? 'active' : ''}`}
          >
            {num}
          </button>
        ))}
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

        /* 모드 2: 컬러 모드 - 각각 다른 색상으로 시작 */
        .color-mode.metaball-2 {
          background: #ff0000;
          animation: moveFromTop 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-3 {
          background: #00ff00;
          animation: moveFromRight 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-4 {
          background: #0000ff;
          animation: moveFromBottom 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-5 {
          background: #ffff00;
          animation: moveFromLeft 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-6 {
          background: #ff00ff;
          animation: moveFromTopRight 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-7 {
          background: #00ffff;
          animation: moveFromBottomLeft 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-8 {
          background: #ff8800;
          animation: moveFromTopLeft 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        .color-mode.metaball-9 {
          background: #8800ff;
          animation: moveFromBottomRight 8s infinite ease-in-out, fadeToBlack 8s infinite ease-in-out;
        }

        /* 모드 3: 회전 모드 */
        .rotate-mode {
          animation-name: rotateAndGather !important;
        }

        .rotate-mode.metaball-2 {
          animation: rotateAndGather2 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-3 {
          animation: rotateAndGather3 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-4 {
          animation: rotateAndGather4 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-5 {
          animation: rotateAndGather5 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-6 {
          animation: rotateAndGather6 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-7 {
          animation: rotateAndGather7 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-8 {
          animation: rotateAndGather8 8s infinite ease-in-out;
        }

        .rotate-mode.metaball-9 {
          animation: rotateAndGather9 8s infinite ease-in-out;
        }

        .mode-buttons {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 1000;
        }

        .mode-button {
          width: 40px;
          height: 40px;
          border: 2px solid #333;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
          background: white;
          font-weight: bold;
        }

        .mode-button:hover {
          transform: scale(1.1);
        }

        .mode-button.active {
          transform: scale(1.2);
          background: #2196F3;
          color: white;
          border-color: #2196F3;
          box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
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

        /* 모드 2: 색상 페이드 애니메이션 */
        @keyframes fadeToBlack {
          0% {
            filter: blur(15px) brightness(1);
          }
          50% {
            filter: blur(15px) brightness(0.3);
          }
          100% {
            filter: blur(15px) brightness(1);
          }
        }

        /* 모드 3: 회전하며 모이는 애니메이션 */
        @keyframes rotateAndGather2 {
          0%, 100% {
            top: 15%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather3 {
          0%, 100% {
            top: 50%;
            left: 85%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather4 {
          0%, 100% {
            top: 85%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather5 {
          0%, 100% {
            top: 50%;
            left: 15%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather6 {
          0%, 100% {
            top: 20%;
            left: 80%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather7 {
          0%, 100% {
            top: 80%;
            left: 20%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather8 {
          0%, 100% {
            top: 20%;
            left: 20%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }

        @keyframes rotateAndGather9 {
          0%, 100% {
            top: 80%;
            left: 80%;
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
          }
          50% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(720deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Component3;