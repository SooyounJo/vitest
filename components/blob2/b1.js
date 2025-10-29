import React from 'react';

const B1 = () => {
  return (
    <div className="container">
      <div className="blob-container">
        {/* 메인 블롭 - 제공된 스타일 적용 */}
        <div className="main-blob"></div>
        
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .blob-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
        }

        .main-blob {
          position: absolute;
          width: 400px;
          height: 400px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(151.64deg);
          background: radial-gradient(ellipse at center 60%, #361EAE 0%, #FF9CD4 40%, #FFE6C3 70%, transparent 100%);
          border-radius: 50%;
          filter: blur(30px);
          animation: windFloat 12s ease-in-out infinite;
        }


        @keyframes windFloat {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(151.64deg) translateX(0px) translateY(0px) scale(1);
            filter: blur(30px);
          }
          5% {
            transform: translate(-50%, -50%) rotate(158deg) translateX(15px) translateY(-10px) scale(1.05);
            filter: blur(32px);
          }
          10% {
            transform: translate(-50%, -50%) rotate(145deg) translateX(25px) translateY(-5px) scale(1.08);
            filter: blur(35px);
          }
          15% {
            transform: translate(-50%, -50%) rotate(162deg) translateX(35px) translateY(5px) scale(1.12);
            filter: blur(38px);
          }
          20% {
            transform: translate(-50%, -50%) rotate(155deg) translateX(40px) translateY(15px) scale(1.15);
            filter: blur(40px);
          }
          25% {
            transform: translate(-50%, -50%) rotate(148deg) translateX(35px) translateY(25px) scale(1.12);
            filter: blur(38px);
          }
          30% {
            transform: translate(-50%, -50%) rotate(142deg) translateX(20px) translateY(30px) scale(1.08);
            filter: blur(35px);
          }
          35% {
            transform: translate(-50%, -50%) rotate(138deg) translateX(0px) translateY(35px) scale(1.05);
            filter: blur(32px);
          }
          40% {
            transform: translate(-50%, -50%) rotate(135deg) translateX(-20px) translateY(30px) scale(1.02);
            filter: blur(30px);
          }
          45% {
            transform: translate(-50%, -50%) rotate(132deg) translateX(-35px) translateY(20px) scale(0.98);
            filter: blur(28px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(130deg) translateX(-40px) translateY(5px) scale(0.95);
            filter: blur(25px);
          }
          55% {
            transform: translate(-50%, -50%) rotate(128deg) translateX(-35px) translateY(-10px) scale(0.92);
            filter: blur(22px);
          }
          60% {
            transform: translate(-50%, -50%) rotate(125deg) translateX(-25px) translateY(-20px) scale(0.90);
            filter: blur(20px);
          }
          65% {
            transform: translate(-50%, -50%) rotate(122deg) translateX(-10px) translateY(-25px) scale(0.88);
            filter: blur(18px);
          }
          70% {
            transform: translate(-50%, -50%) rotate(120deg) translateX(5px) translateY(-30px) scale(0.85);
            filter: blur(15px);
          }
          75% {
            transform: translate(-50%, -50%) rotate(118deg) translateX(20px) translateY(-25px) scale(0.88);
            filter: blur(18px);
          }
          80% {
            transform: translate(-50%, -50%) rotate(120deg) translateX(30px) translateY(-15px) scale(0.92);
            filter: blur(22px);
          }
          85% {
            transform: translate(-50%, -50%) rotate(125deg) translateX(35px) translateY(-5px) scale(0.95);
            filter: blur(25px);
          }
          90% {
            transform: translate(-50%, -50%) rotate(130deg) translateX(30px) translateY(5px) scale(0.98);
            filter: blur(28px);
          }
          95% {
            transform: translate(-50%, -50%) rotate(135deg) translateX(20px) translateY(10px) scale(1.02);
            filter: blur(30px);
          }
        }

        /* 반응형 디자인 */
        @media (max-width: 768px) {
          .main-blob {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default B1;

