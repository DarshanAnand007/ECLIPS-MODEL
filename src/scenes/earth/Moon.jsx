import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Moon = () => {
  const moonRef = useRef()

  const [moonTexture] = useTexture(['/assets/moon_map.jpg'])
  const xAxis = 12
  useFrame(({ clock }) => {
    // Orbit Rotation
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.23) * xAxis
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.23) * xAxis
    // Axis Rotation
    moonRef.current.rotation.y += 0.008
  })

  return (
    <mesh castShadow receiveShadow ref={moonRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  )
}

export default Moon
