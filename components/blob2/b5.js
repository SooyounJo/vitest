import React from 'react';

const B5 = () => {
  return (
    <div className="container">
      <div className="blob-container">
        {/* 위쪽 블롭 */}
        <div className="blob-wrapper top-blob">
          <div className="main-blob color1"></div>
          <div className="main-blob color2"></div>
        </div>
        
        {/* 아래쪽 블롭 */}
        <div className="blob-wrapper bottom-blob">
          <div className="main-blob color1"></div>
          <div className="main-blob color2"></div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: #FFF5E8;
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

        .blob-wrapper {
          position: absolute;
          width: 450px;
          height: 450px;
          left: 50%;
        }

        /* 위쪽 블롭 - 상단에 위치 */
        .top-blob {
          top: -5%;
          transform: translate(-50%, -50%) scale(1.2);
        }

        /* 아래쪽 블롭 - 하단에 위치, 더 크게 */
        .bottom-blob {
          top: 78%;
          transform: translate(-50%, -50%) scale(1.3);
        }

        .main-blob {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 50%;
        }

        /* 첫 번째 색상 - 기존 그라디언트 (명도↑ 채도↑) */
        .main-blob.color1 {
          background: radial-gradient(70.32% 70.88% at 47.16% 93.14%, #FFFF99 0%, #33FFAA 38.04%, #99FFDD 75.51%, #88FFAA 91.03%, #CCFFDD 100%);
          animation: fadeInOut1 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        /* 두 번째 색상 - 이미지 그라디언트 (명도↑ 채도↑) */
        .main-blob.color2 {
          background: radial-gradient(70.32% 70.88% at 47.16% 93.14%, #99FFEE 0%, #FFFFBB 38%, #99FFEE 76%, #99FF99 91%, #99FFEE 100%);
          animation: fadeInOut2 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        /* 위쪽 블롭의 main-blob은 회전 없음 */
        .top-blob .main-blob {
          transform: rotate(0deg);
          filter: blur(35px) hue-rotate(0deg) brightness(1) saturate(1);
          animation: fadeInOut1 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite, topColorShift 12s ease-in-out infinite;
        }

        .top-blob .main-blob.color2 {
          animation: fadeInOut2 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite, topColorShift 15s ease-in-out infinite;
        }

        /* 아래쪽 블롭의 main-blob은 180도 회전 */
        .bottom-blob .main-blob {
          transform: rotate(-180deg);
          filter: blur(5px) hue-rotate(0deg) brightness(1) saturate(1);
          animation: fadeInOut1 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite, bottomColorShift 12s ease-in-out infinite;
        }

        .bottom-blob .main-blob.color2 {
          animation: fadeInOut2 10s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite, bottomColorShift 15s ease-in-out infinite;
        }


        @keyframes fadeInOut1 {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes fadeInOut2 {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes topColorShift {
          0%, 100% {
            filter: blur(35px) hue-rotate(0deg) brightness(1) saturate(1);
          }
          25% {
            filter: blur(37px) hue-rotate(5deg) brightness(1.08) saturate(1.1);
          }
          50% {
            filter: blur(40px) hue-rotate(10deg) brightness(1.15) saturate(1.2);
          }
          75% {
            filter: blur(37px) hue-rotate(5deg) brightness(1.08) saturate(1.1);
          }
        }

        @keyframes bottomColorShift {
          0%, 100% {
            filter: blur(5px) hue-rotate(0deg) brightness(1) saturate(1);
          }
          25% {
            filter: blur(6px) hue-rotate(5deg) brightness(1.08) saturate(1.1);
          }
          50% {
            filter: blur(7px) hue-rotate(10deg) brightness(1.15) saturate(1.2);
          }
          75% {
            filter: blur(6px) hue-rotate(5deg) brightness(1.08) saturate(1.1);
          }
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .blob-wrapper {
            width: 500px;
            height: 500px;
          }

          .top-blob {
            top: 0%;
            transform: translate(-50%, -50%) scale(1.3);
          }

          .bottom-blob {
            top: 75%;
            transform: translate(-50%, -50%) scale(1.4);
          }
        }

        @media (max-width: 480px) {
          .blob-wrapper {
            width: 450px;
            height: 450px;
          }

          .top-blob {
            top: -2%;
            transform: translate(-50%, -50%) scale(1.4);
          }

          .bottom-blob {
            top: 72%;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default B5;

