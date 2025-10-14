import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Component4 = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff00ff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00ffff, 1.5);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      '/fu.glb',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        
        // Apply matte white material to all meshes
        model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              metalness: 0,
              roughness: 1
            });
          }
        });
        
        // Center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 45 / maxDim; // 더욱 확대
        model.scale.setScalar(scale);
        
        // 위치 조정: 아래로 많이, 우측으로 많이
        model.position.x = -center.x * scale + 3; // 우측으로 3 단위 이동
        model.position.y = -center.y * scale - 5; // 아래로 5 단위 이동
        model.position.z = -center.z * scale;
        
        // 측면 상단이 보이도록 회전 (X축과 Y축 회전)
        model.rotation.x = -0.4; // 약 -23도 회전 (상단이 더 보이도록)
        model.rotation.y = 0.3; // 약 17도 회전 (측면이 보이도록)
        
        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    // Animation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // No rotation - model stays still

      pointLight.position.x = Math.sin(Date.now() * 0.001) * 5;
      pointLight.position.z = Math.cos(Date.now() * 0.001) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    />
  );
};

export default Component4;
