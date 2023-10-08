import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'


const Sun = ({ displacementScale }) => {
  const sunRef = useRef()

  const [sunTexture, sunNormalMap, sunSpecularMap, sunDisplacementMap] =
    useTexture([
      '/assets/sun.jpg',
      '/assets/sun.jpg',
      '/assets/sun.jpg',
      '/assets/sun.jpg'
    ])

  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  })


  return (
    <group>
      <mesh ref={sunRef} position={[0, 0, 70]}>
        {/* Radius , X-axis , Y-axis */}
        <sphereGeometry args={[10, 32, 32]} />
        <ambientLight /> 
        <meshPhongMaterial
          map={sunTexture}
          normalMap={sunNormalMap}
          specularMap={sunSpecularMap}
          shininess={10000}
          displacementMap={sunDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>

    </group>
  )
}

export default Sun
