import React from 'react';

const B8 = () => {
  return (
      <div className="container">
        <div className="glass-overlay"></div>
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
          background: #FFF8F0;
          position: relative;
          overflow: hidden;
        }

        .glass-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(240, 235, 230, 0.3) 70%,
            rgba(230, 225, 220, 0.5) 85%,
            rgba(220, 215, 210, 0.7) 100%
          );
          backdrop-filter: blur(0px);
          filter: blur(1px);
          z-index: 10;
          pointer-events: none;
          mix-blend-mode: soft-light;
        }

        .glass-overlay::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          right: -10%;
          bottom: -10%;
          background: 
            radial-gradient(ellipse 150% 120% at 20% 30%, rgba(255, 200, 220, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 130% 110% at 80% 70%, rgba(200, 220, 255, 0.1) 0%, transparent 50%);
          filter: blur(60px);
          animation: glassDistortion 15s ease-in-out infinite;
        }

        @keyframes glassDistortion {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translate(-5%, 8%) scale(1.05);
            opacity: 0.8;
          }
          66% {
            transform: translate(8%, -5%) scale(0.95);
            opacity: 0.7;
          }
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
          filter: blur(0px);
          transform: perspective(1000px) translateZ(0);
          animation: containerDistortion 12s ease-in-out infinite;
        }

        @keyframes containerDistortion {
          0%, 100% {
            filter: blur(0px);
          }
          50% {
            filter: blur(0.5px);
          }
        }

        .blob-wrapper {
          position: absolute;
          width: 559px;
          height: 559px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          animation: bloomWave 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          filter: drop-shadow(0 8px 32px rgba(255, 184, 211, 0.3)) 
                  drop-shadow(0 4px 16px rgba(255, 184, 211, 0.2))
                  drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
        }

        .main-blob {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          transform: rotate(-180deg);
          background: radial-gradient(70.32% 70.88% at 47.16% 93.14%, #FFD5E5 0%, #FFB8D3 38.04%, #EBDDE1 65%, #F5D5E0 80%, #F0F0F0 85%, rgba(240, 240, 240, 0.3) 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.4),
            0 0 5px 1px rgba(255, 184, 211, 0.2);
        }

        .main-blob.sharp {
          filter: blur(0px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 60%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 60%);
          z-index: 2;
          animation: sharpBloom 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .main-blob.blurred {
          filter: blur(25px);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 70%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 70%);
          z-index: 1;
          animation: blurredBloom 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .trail-blob {
          position: absolute;
          width: 559px;
          height: 559px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-180deg);
          background: radial-gradient(70.32% 70.88% at 47.16% 93.14%, #FFD5E5 0%, #FFB8D3 38.04%, #EBDDE1 65%, #F5D5E0 80%, #F0F0F0 85%, rgba(240, 240, 240, 0.3) 100%);
          border-radius: 50%;
        }

        /* 잔상 레이어들 - 뒤에서 점점 흐려지는 효과 */
        .trail-blob {
          z-index: 0;
        }

        .trail-1 {
          z-index: 4;
          opacity: 0.7;
          filter: blur(17px);
          animation: trailBloom1 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.25),
            0 0 5px 1px rgba(255, 184, 211, 0.15);
        }

        .trail-2 {
          z-index: 3;
          opacity: 0.5;
          filter: blur(19px);
          animation: trailBloom2 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.2),
            0 0 5px 1px rgba(255, 184, 211, 0.1);
        }

        .trail-3 {
          z-index: 2;
          opacity: 0.35;
          filter: blur(21px);
          animation: trailBloom3 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.15),
            0 0 5px 1px rgba(255, 184, 211, 0.08);
        }

        .trail-4 {
          z-index: 1;
          opacity: 0.22;
          filter: blur(23px);
          animation: trailBloom4 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.1),
            0 0 5px 1px rgba(255, 184, 211, 0.05);
        }

        .trail-5 {
          z-index: 0;
          opacity: 0.12;
          filter: blur(25px);
          animation: trailBloom5 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          box-shadow: 
            0 0 0 1px rgba(255, 184, 211, 0.07),
            0 0 5px 1px rgba(255, 184, 211, 0.03);
        }

        @keyframes bloomWave {
          0%, 35% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 8px 32px rgba(255, 184, 211, 0.3)) 
                    drop-shadow(0 4px 16px rgba(255, 184, 211, 0.2))
                    drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.8);
            filter: drop-shadow(0 12px 48px rgba(255, 184, 211, 0.5)) 
                    drop-shadow(0 6px 24px rgba(255, 184, 211, 0.4))
                    drop-shadow(0 3px 12px rgba(0, 0, 0, 0.15));
          }
          65%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 8px 32px rgba(255, 184, 211, 0.3)) 
                    drop-shadow(0 4px 16px rgba(255, 184, 211, 0.2))
                    drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
          }
        }

        @keyframes sharpBloom {
          0%, 35% {
            filter: blur(0px) brightness(1);
          }
          50% {
            filter: blur(35px) brightness(1.15);
          }
          65%, 100% {
            filter: blur(0px) brightness(1);
          }
        }

        @keyframes blurredBloom {
          0%, 35% {
            filter: blur(25px) brightness(1);
          }
          50% {
            filter: blur(80px) brightness(1.15);
          }
          65%, 100% {
            filter: blur(25px) brightness(1);
          }
        }

        @keyframes trailBloom1 {
          0%, 35% {
            filter: blur(17px) brightness(1);
          }
          50% {
            filter: blur(70px) brightness(1.1);
          }
          65%, 100% {
            filter: blur(17px) brightness(1);
          }
        }

        @keyframes trailBloom2 {
          0%, 35% {
            filter: blur(19px) brightness(1);
          }
          50% {
            filter: blur(75px) brightness(1.1);
          }
          65%, 100% {
            filter: blur(19px) brightness(1);
          }
        }

        @keyframes trailBloom3 {
          0%, 35% {
            filter: blur(21px) brightness(1);
          }
          50% {
            filter: blur(80px) brightness(1.1);
          }
          65%, 100% {
            filter: blur(21px) brightness(1);
          }
        }

        @keyframes trailBloom4 {
          0%, 35% {
            filter: blur(23px) brightness(1);
          }
          50% {
            filter: blur(85px) brightness(1.1);
          }
          65%, 100% {
            filter: blur(23px) brightness(1);
          }
        }

        @keyframes trailBloom5 {
          0%, 35% {
            filter: blur(25px) brightness(1);
          }
          50% {
            filter: blur(90px) brightness(1.1);
          }
          65%, 100% {
            filter: blur(25px) brightness(1);
          }
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

export default B8;
