/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ninja = () => {
  const Ninjamodel = useGLTF("./fortnite_ninja_skin_styles/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[20, -45, 30]}
        angle={0.25}
        penumbra={1}
        intensity={1}
      />
      <pointLight intensity={2} />
      <primitive
        object={Ninjamodel.scene}
        scale={0.00038}
        position={[0, -4.5, -0.5]}
        rotation={[0, 4.5, 0]}
      />
    </mesh>
  );
};

const NinjaCanvas = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight)
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setCanvasHeight(window.innerHeight);
      setCanvasWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{height: canvasHeight, width: canvasWidth}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ninja />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default NinjaCanvas;
