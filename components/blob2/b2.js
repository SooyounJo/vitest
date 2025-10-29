import React from 'react';

const B2 = () => {
  return (
    <div className="container">
      <div className="blob-container">
        {/* 잔상 레이어들 - 뒤에서 앞으로 */}
        <div className="trail-blob trail-5"></div>
        <div className="trail-blob trail-4"></div>
        <div className="trail-blob trail-3"></div>
        <div className="trail-blob trail-2"></div>
        <div className="trail-blob trail-1"></div>
        
        {/* 메인 그라디언트 블롭 */}
        <div className="main-blob"></div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: #faf8f5;
          position: relative;
          overflow: hidden;
        }

        .blob-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-blob,
        .trail-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at 45% 35%,
            #FF1B8D 0%,
            #FF1B8D 8%,
            #FF3B9D 15%,
            #FF5BAD 22%,
            #FF78BD 28%,
            #FF94CB 33%,
            #FFA8D5 38%,
            #FFBADA 42%,
            #FFC5D0 46%,
            #FFCEC0 50%,
            #FFD5AD 54%,
            #FFDB9D 58%,
            #FFE090 62%,
            #FFE588 66%,
            #FFEA85 70%,
            #FFF0A0 74%,
            #FFF5C0 78%,
            #FFF9D8 82%,
            #FFFCE8 86%,
            #FFFEF5 90%,
            transparent 100%
          );
          border-radius: 47% 53% 45% 55% / 52% 48% 52% 48%;
          filter: blur(40px);
          animation: gentleFloat 10s ease-in-out infinite;
        }

        .main-blob {
          z-index: 5;
          opacity: 1;
        }

        /* 잔상 레이어들 - 뒤에서 점점 흐려지는 효과 */
        .trail-blob {
          z-index: 0;
        }

        .trail-1 {
          z-index: 4;
          opacity: 0.7;
          animation-delay: -0.3s;
          filter: blur(42px);
        }

        .trail-2 {
          z-index: 3;
          opacity: 0.5;
          animation-delay: -0.6s;
          filter: blur(44px);
        }

        .trail-3 {
          z-index: 2;
          opacity: 0.35;
          animation-delay: -0.9s;
          filter: blur(46px);
        }

        .trail-4 {
          z-index: 1;
          opacity: 0.22;
          animation-delay: -1.2s;
          filter: blur(48px);
        }

        .trail-5 {
          z-index: 0;
          opacity: 0.12;
          animation-delay: -1.5s;
          filter: blur(50px);
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            border-radius: 47% 53% 45% 55% / 52% 48% 52% 48%;
            filter: blur(40px);
          }
          25% {
            transform: translate(-48%, -52%) scale(1.05) rotate(2deg);
            border-radius: 50% 50% 47% 53% / 48% 52% 48% 52%;
            filter: blur(42px);
          }
          50% {
            transform: translate(-52%, -50%) scale(1.02) rotate(-2deg);
            border-radius: 53% 47% 50% 50% / 52% 48% 50% 50%;
            filter: blur(38px);
          }
          75% {
            transform: translate(-50%, -48%) scale(1.03) rotate(1deg);
            border-radius: 48% 52% 52% 48% / 50% 50% 52% 48%;
            filter: blur(41px);
          }
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .main-blob,
          .trail-blob {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .main-blob,
          .trail-blob {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default B2;

