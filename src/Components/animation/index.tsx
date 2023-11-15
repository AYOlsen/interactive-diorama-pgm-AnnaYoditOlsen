import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { AnimationMixer, Mesh } from "three";

import animationGlb from "./assets/animatie.glb";

const Animation = () => {
  const { scene, animations }: any = useGLTF(animationGlb, true);
  const animationClip = animations[0];
  const animationRef = useRef<Mesh>(null!);
  const mixer = new AnimationMixer(animationRef.current);

  useEffect(() => {
    mixer.clipAction(animationClip, animationRef.current).play();
  }, [animationClip, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group name="Animation" position={[-0.1, -0.1, -0.35]}>
      <primitive object={scene} ref={animationRef} />
    </group>
  );
};

export { Animation };
