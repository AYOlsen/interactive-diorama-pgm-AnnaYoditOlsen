import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


const RapierWorldBox = () => {
  return (
    <RigidBody position={[-1.8, 3, -2]} type="fixed">
      <Box args={[0.2, 3.7, 4.5]} castShadow={true} receiveShadow={true}
            position={[-0.35, -1.15, 2]} rotation={[0, 0, 0]}
            >
        <meshStandardMaterial color={0xffffff} />
      </Box>
      <Box args={[0.2, 3.7, 4.5]} castShadow={true} receiveShadow={true}
            position={[1.8, -1.15, -0.3]} rotation={[0, 1.57, 0]}
            >
        <meshStandardMaterial color={0xffffff} />
      </Box>
    </RigidBody>
  );
};

export { RapierWorldBox };
