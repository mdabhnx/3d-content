import React from 'react';
import { useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';
const Bird = () => {
  const bird = useGLTF(birdScene);

  return (
    <mesh>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
