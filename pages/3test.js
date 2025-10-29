import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const BlobComponent4 = dynamic(() => import('../components/cssblob/4'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

export default function ThreeTest() {
  const [currentComponent, setCurrentComponent] = useState(4);

  const renderComponent = () => {
    return <BlobComponent4 />;
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      background: 'white',
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
        <button
          onClick={() => setCurrentComponent(4)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          4
        </button>
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

