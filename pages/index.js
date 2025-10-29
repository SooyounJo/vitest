import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Component1 = dynamic(() => import('../components/cssblob/1'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component2 = dynamic(() => import('../components/cssblob/2'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const Component3 = dynamic(() => import('../components/cssblob/3'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'black' }} />
});

const B1 = dynamic(() => import('../components/blob2/b1'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B2 = dynamic(() => import('../components/blob2/b2'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B3 = dynamic(() => import('../components/blob2/b3'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B4 = dynamic(() => import('../components/blob2/b4'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B5 = dynamic(() => import('../components/blob2/b5'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B6 = dynamic(() => import('../components/blob2/b6'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B7 = dynamic(() => import('../components/blob2/b7'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

const B8 = dynamic(() => import('../components/blob2/b8'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'white' }} />
});

export default function Home() {
  const [version, setVersion] = useState(1); // 1: cssblob, 2: blob2
  const [currentComponent, setCurrentComponent] = useState(1);

  const renderComponent = () => {
    if (version === 1) {
      // cssblob 버전
      switch(currentComponent) {
        case 1: return <Component1 />;
        case 2: return <Component2 />;
        case 3: return <Component3 />;
        default: return <Component1 />;
      }
    } else {
      // blob2 버전
      switch(currentComponent) {
        case 1: return <B1 />;
        case 2: return <B2 />;
        case 3: return <B3 />;
        case 4: return <B4 />;
        case 5: return <B5 />;
        case 6: return <B6 />;
        case 7: return <B7 />;
        case 8: return <B8 />;
        default: return <B1 />;
      }
    }
  };

  const getButtonList = () => {
    return version === 1 ? [1, 2, 3] : [1, 2, 3, 4, 5, 6, 7, 8];
  };

  const handleVersionChange = (newVersion) => {
    setVersion(newVersion);
    setCurrentComponent(1); // 버전 전환 시 첫 번째 컴포넌트로 리셋
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
      {/* 좌측 버전 선택 버튼 */}
      <div style={{ 
        position: 'fixed',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000
      }}>
        <button
          onClick={() => handleVersionChange(1)}
          style={{
            padding: '10px 16px',
            backgroundColor: version === 1 ? '#2196F3' : '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '12px',
            fontWeight: version === 1 ? 'bold' : 'normal'
          }}
        >
          ver1
        </button>
        <button
          onClick={() => handleVersionChange(2)}
          style={{
            padding: '10px 16px',
            backgroundColor: version === 2 ? '#2196F3' : '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '12px',
            fontWeight: version === 2 ? 'bold' : 'normal'
          }}
        >
          ver2
        </button>
      </div>

      {/* 상단 컴포넌트 번호 버튼 */}
      <div style={{ 
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 1000
      }}>
        {getButtonList().map((num) => (
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