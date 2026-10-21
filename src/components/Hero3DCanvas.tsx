import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Central3DOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15 + pointer.y * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2 + pointer.x * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1.2, 0.38, 128, 32]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#6d28d9"
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={2.2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

export const Hero3DCanvas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#ff007f" />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#f5b921" />

        <Central3DOrb />

        <Sparkles count={120} scale={10} size={2.5} speed={0.4} color="#00f0ff" />
        <Sparkles count={80} scale={12} size={3} speed={0.5} color="#ffd166" />
      </Canvas>
    </div>
  );
};
