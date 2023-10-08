import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

const ISS = () => {
  const issRef = useRef()
  const memoizedISS = useMemo(() => {
    return useGLTF('/ISSModel/ISS_stationary.gltf')
  })
  const xAxis = 4
  useFrame(({ clock }) => {
    // Orbit Rotation
    issRef.current.position.x = Math.sin(clock.getElapsedTime() * 1.7) * xAxis
    issRef.current.position.z = Math.cos(clock.getElapsedTime() * 1.7) * xAxis
  })

  return (
    <mesh>
      <primitive
        ref={issRef}
        object={memoizedISS.scene}
        position={[xAxis, 0, 0]}
        scale={0.005}
      />
    </mesh>
  )
}

export default ISS
