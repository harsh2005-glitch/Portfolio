import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Torus, Octahedron, MeshDistortMaterial } from '@react-three/drei'

function FloatingShape({ position, color, speed = 1, distort = 0.3, shape = 'sphere' }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  const material = (
    <MeshDistortMaterial
      color={color}
      transparent
      opacity={0.18}
      distort={distort}
      speed={2}
      roughness={0}
      metalness={0.1}
    />
  )

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      {shape === 'sphere' && (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
          {material}
        </Sphere>
      )}
      {shape === 'torus' && (
        <Torus ref={meshRef} args={[1, 0.35, 32, 64]} position={position}>
          {material}
        </Torus>
      )}
      {shape === 'octa' && (
        <Octahedron ref={meshRef} args={[1]} position={position}>
          {material}
        </Octahedron>
      )}
    </Float>
  )
}

export default function HeroCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#22d3ee" />

        <FloatingShape position={[-3.5, 1.5, -2]} color="#6366f1" speed={0.8} shape="sphere" distort={0.4} />
        <FloatingShape position={[3.8, -1.2, -3]} color="#22d3ee" speed={1.2} shape="torus" distort={0.3} />
        <FloatingShape position={[0, 2.5, -4]} color="#818cf8" speed={0.6} shape="octa" distort={0.5} />
        <FloatingShape position={[-2, -2.5, -2]} color="#67e8f9" speed={1.0} shape="sphere" distort={0.25} />
        <FloatingShape position={[4, 2, -5]} color="#a5b4fc" speed={0.7} shape="sphere" distort={0.35} />
      </Canvas>
    </div>
  )
}
