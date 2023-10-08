import { useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import { useRef } from 'react'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'

import Earth from './scenes/earth/Earth'

import Sun from './scenes/sun'

// import EclipseCalendar from './EclipseCalendar';


const MainContainer = () => {


  const directionalLightRef = useRef()
  // const directionalLightRefTwo = useRef()
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)
  // useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
  return (
    <>
      <color attach='background' args={['black']} />
      <AnimatedStars />
      {/* <canvas> */}
      <Sun displacementScale={0.05}/>
      
      
      <directionalLight
        castShadow
        ref={directionalLightRef}
        position={[0, 0, 70]}
      />
      {/* <ambientLight />  */}
      {/* </canvas> */}
      <Earth displacementScale={0.15} />
      {/* <EclipseCalendar /> */}

    </>
  )
}

export default MainContainer
