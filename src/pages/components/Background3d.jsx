import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function AnimatedCamera() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.mouse.x * 0.6,
      0.03
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.mouse.y * 0.35,
      0.03
    );
    state.camera.lookAt(0, 0, 0);
    state.camera.position.z = 8 + Math.sin(t * 0.25) * 0.15;
  });
  return null;
}

function ParticleField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 2200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.06) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.55}
      />
    </Points>
  );
}

function GlowingOrb({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.22;
      meshRef.current.position.x = position[0] + Math.cos(t * 0.6) * 0.16;
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.7, 8]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.12}
          metalness={0.35}
          distort={0.35}
          speed={1.8}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

function CentralEnergySphere() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.12;
      ref.current.rotation.y = t * 0.18;
      ref.current.position.y = Math.sin(t * 0.7) * 0.12;
    }
  });

  return (
    <mesh ref={ref} scale={2.15}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#a5d8ff"
        emissive="#60a5fa"
        emissiveIntensity={0.9}
        roughness={0.08}
        metalness={0.55}
        distort={0.28}
        speed={2.2}
        transparent
        opacity={0.82}
      />
    </mesh>
  );
}

function SoftGlow() {
  return (
    <>
      <mesh position={[-3.8, 2.4, -4]} scale={[4.5, 4.5, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#c4b5fd"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </mesh>

      <mesh position={[4, -2.5, -4]} scale={[5.5, 5.5, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#7dd3fc"
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>

      <mesh position={[0, 0, -5]} scale={[8, 8, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

function BackgroundPlane() {
  return (
    <mesh position={[0, 0, -8]} scale={[40, 24, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
}

function LightRig() {
  return (
    <>
      <ambientLight intensity={1.4} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#93c5fd" />
      <directionalLight position={[-4, -2, 3]} intensity={1.5} color="#c4b5fd" />
      <pointLight position={[0, 0, 3]} intensity={2.4} color="#60a5fa" />
      <pointLight position={[3, 2, 2]} intensity={1.6} color="#a78bfa" />
      <pointLight position={[-3, -2, 2]} intensity={1.5} color="#22d3ee" />
    </>
  );
}

function SceneContent() {
  return (
    <>
      <BackgroundPlane />
      <fog attach="fog" args={["#ffffff", 10, 24]} />
      <LightRig />
      <SoftGlow />

      <ParticleField />

      <Sparkles
        count={90}
        scale={[12, 8, 12]}
        size={1.6}
        speed={0.35}
        opacity={0.35}
        color="#93c5fd"
      />

      <CentralEnergySphere />

      <GlowingOrb position={[-4, 2, -1]} color="#67e8f9" scale={0.72} speed={0.9} />
      <GlowingOrb position={[4, -1.4, -2]} color="#a78bfa" scale={0.62} speed={1.15} />
      <GlowingOrb position={[-3, -2.3, -3]} color="#60a5fa" scale={0.52} speed={1.3} />
      <GlowingOrb position={[3.5, 2.2, -2.5]} color="#f9a8d4" scale={0.46} speed={1.05} />

      <Environment preset="studio" />
      <AnimatedCamera />
    </>
  );
}

export default function Background3d() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background:
          "radial-gradient(circle at top left, rgba(125,211,252,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(196,181,253,0.18), transparent 30%), #ffffff",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}