import React, { useState } from 'react';
import Component2_1 from './2-1';
import Component2_2 from './2-2';
import Component2_3 from './2-3';
import Component2_4 from './2-4';
import Component2_5 from './2-5';

const Component2 = () => {
  const [colorScheme, setColorScheme] = useState(0);

  const renderComponent = () => {
    switch(colorScheme) {
      case 0:
        return <Component2_1 />;
      case 1:
        return <Component2_2 />;
      case 2:
        return <Component2_3 />;
      case 3:
        return <Component2_4 />;
      case 4:
        return <Component2_5 />;
      default:
        return <Component2_1 />;
    }
  };

  return (
    <div className="container">
      {renderComponent()}
      <div className="color-buttons">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => setColorScheme(index)}
            className={`color-button ${colorScheme === index ? 'active' : ''}`}
          />
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

        .color-buttons {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 1000;
        }

        .color-button {
          width: 40px;
          height: 40px;
          border: 2px solid;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .color-button:hover {
          transform: scale(1.1);
        }

        .color-button.active {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }

        .color-button:nth-child(1) {
          background: black;
          border-color: #333;
        }

        .color-button:nth-child(2) {
          background: linear-gradient(135deg, #ff0000, #ffd700);
          border-color: #ff0000;
        }

        .color-button:nth-child(3) {
          background: linear-gradient(135deg, #ff0082, #0095ff);
          border-color: #ff0082;
        }

        .color-button:nth-child(4) {
          background: linear-gradient(135deg, #ff3399, #33b5ff);
          border-color: #ff3399;
        }

        .color-button:nth-child(5) {
          background: linear-gradient(135deg, #ff3399, #c864ff);
          border-color: #ff3399;
        }
      `}</style>
    </div>
  );
};

export default Component2;

