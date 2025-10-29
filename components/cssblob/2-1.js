import React from 'react';

const Component2_1 = () => {
  return (
    <div className="metaballs">
      <div className="metaball metaball--big metaball-1"></div>
      <div className="metaball metaball--small metaball-2"></div>
      <div className="metaball metaball--small metaball-3"></div>
      <div className="metaball metaball--small metaball-4"></div>
      <div className="metaball metaball--small metaball-5"></div>
      <div className="metaball metaball--small metaball-6"></div>
      <style jsx>{`
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
          filter: contrast(25);
        }

        .metaball {
          position: absolute;
          border-radius: 100%;
          filter: blur(20px);
          background: rgba(0, 0, 0, 0.8);
        }

        .metaball--big {
          width: 30vw;
          height: 30vw;
          top: calc(50% - 15vw);
          left: calc(50% - 15vw);
        }

        .metaball--small {
          width: 6rem;
          height: 6rem;
        }

        .metaball-2 {
          width: 7rem;
          height: 7rem;
          animation: move 8s infinite ease-in-out;
        }

        .metaball-3 {
          width: 5rem;
          height: 5rem;
          animation: move 7s infinite ease-in-out;
        }

        .metaball-4 {
          width: 6rem;
          height: 6rem;
          animation: move 16s infinite ease-in-out;
        }

        .metaball-5 {
          width: 4rem;
          height: 4rem;
          animation: move 11s infinite ease-in-out;
        }

        .metaball-6 {
          width: 8rem;
          height: 8rem;
          animation: move 6s infinite ease-in-out;
        }

        @keyframes move {
          0% {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          50% {
            left: 50vw;
            top: 50%;
            transform: translateY(-50%);
          }
          100% {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Component2_1;

