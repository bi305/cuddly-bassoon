import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

 
const DragonModel = (props) => {
  const [mixer] = useState(() => new THREE.AnimationMixer());

  const group = useRef();
  const actions = useRef();
  const model = useGLTF("./crystal.glb");
  const { nodes, scene, materials, animations } = model;

  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = { idle: mixer.clipAction(animations[0], group.current) };
    actions.current.idle.play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);

  return (
    <group ref={group} dispose={null}>
      <ambientLight intensity={4} />
      <pointLight intensity={5} />{" "}
      <primitive
        ref={group}
        object={nodes["RootNode"]}
        scale={0.01}
        position-y={0}
        rotation-y={0}
        {...props}
      />
    </group>
  );
};
export default DragonModel;
useGLTF.preload("./crystal.glb");
