import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const actionNames = ["Animation"];

const ThreeDModal = () => {
  const model = useGLTF("./desktop_pc/scene.gltf");
  const animations = useAnimations(model.animations, model.scene);
  useFrame(() => {
    actionNames.forEach((actionNames) => {
      const action = animations.actions[actionNames];
      if (!action) {
        return;
      }
      action.play();
    });
  });
  return (
    <mesh>
      <hemisphereLight intensity={0.51} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={model.scene}
        scale={0.7}
        position={[-1, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

export default ThreeDModal;
