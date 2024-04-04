/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { AnimationMixer, Euler } from "three";

const Ninja = () => {
  const { nodes, animations, scene } = useGLTF(
    "./low-poly_venom_-_spider-man_2_ps5.glb"
  );
  const group = React.useRef();
  const { actions, names } = useAnimations(animations, group);
  const [isAnimating, setIsAnimating] = useState(false);
  let mixer;
  if (animations.length) {
    mixer = new AnimationMixer(scene);
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      if (clip.name === "Idle") {
        action.reset().fadeIn(0.5).play();
      }
      if (isAnimating && clip.name === "Roar") {
        action.reset().fadeIn(0.5).play();
      }
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  useEffect(() => {
    // if (actions.length > 0) {
    //   actions.Idle.play();
    // }
  }, [actions, names]);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <mesh onClick={handleClick}>
      <ambientLight intensity={0.5} color="0xFFFFFF" />
      <spotLight
        position={[20, -45, 30]}
        angle={0.25}
        penumbra={1}
        intensity={1}
      />
      <pointLight intensity={2} />
      <primitive
        object={scene}
        scale={1.5}
        position={[0, -2.5, 0]}
        rotation={new Euler(0, Math.PI / 2, 0)}
      />
    </mesh>
  );
};

const NinjaCanvas = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

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
      //frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        height: canvasHeight,
        width: canvasWidth,
      }}
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
