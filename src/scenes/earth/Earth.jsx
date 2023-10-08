import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Moon from './Moon'
import ISS from './ISS'

const Earth = ({ displacementScale }) => {
  const earthRef = useRef()

  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      '/assets/earth_day.jpg',
      '/assets/earth_normal.jpg',
      '/assets/earth_specular.jpg',
      '/assets/earth_displacement.jpg',
    ])
   let xAxis = 20; 
  useFrame(({clock}) => {

    earthRef.current.rotation.y += 0.002
    // earthRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * xAxis
    // earthRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.5) * xAxis
    
  })
  

  return (
    <group>
      <mesh receiveShadow castShadow ref={earthRef} position={[0, 0, 0]}>
        {/* Radius , X-axis , Y-axis */}
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={10000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      
      <ISS />
      <Moon />
    </group>
  )
}

export default Earth
