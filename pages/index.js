import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Component1 = dynamic(() => import('../components/1'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component2 = dynamic(() => import('../components/metaball/2'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component3 = dynamic(() => import('../components/3'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component4 = dynamic(() => import('../components/4'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component5 = dynamic(() => import('../components/5'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const renderComponent = () => {
    switch(currentComponent) {
      case 1: return <Component1 />;
      case 2: return <Component2 />;
      case 3: return <Component3 />;
      case 4: return <Component4 />;
      case 5: return <Component5 />;
      default: return <Component1 />;
    }
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      background: 'black',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      {/* 버튼 컨테이너 */}
      <div style={{ 
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 1000
      }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentComponent(num)}
            style={{
              padding: '12px 24px',
              backgroundColor: currentComponent === num ? '#2196F3' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {/* 컴포넌트 렌더링 영역 */}
      <div style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        {renderComponent()}
      </div>
    </div>
  );
}