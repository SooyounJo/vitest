import React from 'react';

const B6 = () => {
  return (
    <div className="container">
      <div className="blob-container">
        {/* 잔상 레이어들 - 뒤에서 앞으로 */}
        <div className="trail-blob trail-5"></div>
        <div className="trail-blob trail-4"></div>
        <div className="trail-blob trail-3"></div>
        <div className="trail-blob trail-2"></div>
        <div className="trail-blob trail-1"></div>
        
        {/* 메인 블롭 - 그라디언트 블러 효과 */}
        <div className="blob-wrapper">
          {/* 선명한 레이어 (위쪽) */}
          <div className="main-blob sharp"></div>
          {/* 블러 레이어 (아래쪽) */}
          <div className="main-blob blurred"></div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: #E8E0F0;
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
          width: 559px;
          height: 559px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          animation: shaderWave 8s ease-in-out infinite;
        }

        .main-blob {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          transform: rotate(0deg);
          background: linear-gradient(
            180deg,
            #FFD0E8 0%,
            #FFA8D8 15%,
            #E88CD0 30%,
            #D078C8 45%,
            #B068C0 60%,
            #8858B8 75%,
            #6048B0 90%,
            rgba(72, 64, 168, 0.5) 95%,
            transparent 100%
          );
          border-radius: 50%;
          box-shadow: 
            0 0 0 1px rgba(255, 168, 216, 0.3),
            0 0 5px 1px rgba(255, 168, 216, 0.15);
        }

        .main-blob.sharp {
          filter: blur(0px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 60%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 60%);
          z-index: 2;
          animation: sharpBloomEffect 8s ease-in-out infinite;
        }

        .main-blob.blurred {
          filter: blur(25px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 70%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 70%);
          z-index: 1;
          animation: bloomEffect 8s ease-in-out infinite;
        }

        .trail-blob {
          position: absolute;
          width: 559px;
          height: 559px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          background: linear-gradient(
            180deg,
            #FFD0E8 0%,
            #FFA8D8 15%,
            #E88CD0 30%,
            #D078C8 45%,
            #B068C0 60%,
            #8858B8 75%,
            #6048B0 90%,
            rgba(72, 64, 168, 0.5) 95%,
            transparent 100%
          );
          border-radius: 50%;
        }

        /* 잔상 레이어들 - 뒤에서 점점 흐려지는 효과 */
        .trail-blob {
          z-index: 0;
        }

        .trail-1 {
          z-index: 4;
          opacity: 0.4;
          filter: blur(17px);
          box-shadow: 
            0 0 0 1px rgba(255, 184, 217, 0.15),
            0 0 5px 1px rgba(255, 184, 217, 0.08);
          animation: shaderWave 8s ease-in-out infinite -0.3s, trailBloom1 8s ease-in-out infinite;
        }

        .trail-2 {
          z-index: 3;
          opacity: 0.3;
          filter: blur(19px);
          box-shadow: 
            0 0 0 1px rgba(255, 184, 217, 0.12),
            0 0 5px 1px rgba(255, 184, 217, 0.06);
          animation: shaderWave 8s ease-in-out infinite -0.6s, trailBloom2 8s ease-in-out infinite;
        }

        .trail-3 {
          z-index: 2;
          opacity: 0.2;
          filter: blur(21px);
          box-shadow: 
            0 0 0 1px rgba(255, 184, 217, 0.08),
            0 0 5px 1px rgba(255, 184, 217, 0.04);
          animation: shaderWave 8s ease-in-out infinite -0.9s, trailBloom3 8s ease-in-out infinite;
        }

        .trail-4 {
          z-index: 1;
          opacity: 0.12;
          filter: blur(23px);
          box-shadow: 
            0 0 0 1px rgba(255, 184, 217, 0.05),
            0 0 5px 1px rgba(255, 184, 217, 0.02);
          animation: shaderWave 8s ease-in-out infinite -1.2s, trailBloom4 8s ease-in-out infinite;
        }

        .trail-5 {
          z-index: 0;
          opacity: 0.06;
          filter: blur(25px);
          box-shadow: 
            0 0 0 1px rgba(255, 184, 217, 0.03),
            0 0 5px 1px rgba(255, 184, 217, 0.01);
          animation: shaderWave 8s ease-in-out infinite -1.5s, trailBloom5 8s ease-in-out infinite;
        }

        @keyframes shaderWave {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          12.5% {
            transform: translate(-50.3%, -50.2%) scale(1.008) rotate(0.3deg);
          }
          25% {
            transform: translate(-50.5%, -49.8%) scale(1.012) rotate(0.5deg);
          }
          37.5% {
            transform: translate(-50.2%, -50.5%) scale(1.005) rotate(0.2deg);
          }
          50% {
            transform: translate(-49.8%, -50.3%) scale(0.998) rotate(-0.2deg);
          }
          62.5% {
            transform: translate(-50.2%, -49.7%) scale(1.002) rotate(0.1deg);
          }
          75% {
            transform: translate(-49.6%, -50.1%) scale(1.006) rotate(-0.3deg);
          }
          87.5% {
            transform: translate(-50.4%, -50.4%) scale(1.003) rotate(0.2deg);
          }
        }

        @keyframes sharpBloomEffect {
          0%, 100% {
            filter: blur(0px) brightness(1);
          }
          25% {
            filter: blur(20px) brightness(1.3);
          }
          50% {
            filter: blur(40px) brightness(1.6);
          }
          75% {
            filter: blur(20px) brightness(1.3);
          }
        }

        @keyframes bloomEffect {
          0%, 100% {
            filter: blur(25px) brightness(1);
          }
          25% {
            filter: blur(60px) brightness(1.3);
          }
          50% {
            filter: blur(100px) brightness(1.6);
          }
          75% {
            filter: blur(60px) brightness(1.3);
          }
        }

        @keyframes trailBloom1 {
          0%, 100% {
            filter: blur(17px) brightness(1);
          }
          25% {
            filter: blur(50px) brightness(1.25);
          }
          50% {
            filter: blur(85px) brightness(1.5);
          }
          75% {
            filter: blur(50px) brightness(1.25);
          }
        }

        @keyframes trailBloom2 {
          0%, 100% {
            filter: blur(19px) brightness(1);
          }
          25% {
            filter: blur(55px) brightness(1.25);
          }
          50% {
            filter: blur(90px) brightness(1.5);
          }
          75% {
            filter: blur(55px) brightness(1.25);
          }
        }

        @keyframes trailBloom3 {
          0%, 100% {
            filter: blur(21px) brightness(1);
          }
          25% {
            filter: blur(60px) brightness(1.25);
          }
          50% {
            filter: blur(95px) brightness(1.5);
          }
          75% {
            filter: blur(60px) brightness(1.25);
          }
        }

        @keyframes trailBloom4 {
          0%, 100% {
            filter: blur(23px) brightness(1);
          }
          25% {
            filter: blur(65px) brightness(1.25);
          }
          50% {
            filter: blur(100px) brightness(1.5);
          }
          75% {
            filter: blur(65px) brightness(1.25);
          }
        }

        @keyframes trailBloom5 {
          0%, 100% {
            filter: blur(25px) brightness(1);
          }
          25% {
            filter: blur(70px) brightness(1.25);
          }
          50% {
            filter: blur(105px) brightness(1.5);
          }
          75% {
            filter: blur(70px) brightness(1.25);
          }
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .blob-wrapper,
          .trail-blob {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .blob-wrapper,
          .trail-blob {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default B6;

