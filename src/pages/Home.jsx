import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bird, Island, Plane, Sky } from '../models/_models';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenPosition, screenScale, rotation];
  };

  const [screenPosition, screenScale, rotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 flex items-center justify-center'>
        hello
      </div> */}
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor={'#000000'}
            intensity={2}
          />
          <Bird />
          <Sky />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
