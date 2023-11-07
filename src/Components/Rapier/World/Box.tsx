import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


const RapierWorldBox = () => {
  return (
    <RigidBody position={[-2, 3, -2]} type="fixed">
      <Box args={[0.2, 4, 5]} castShadow={true} receiveShadow={true}
            position={[-0.4, -1, 2]} rotation={[0, 0, 0]}
            >
        <meshStandardMaterial color={0xffffff} />
      </Box>
      <Box args={[0.2, 4, 5]} castShadow={true} receiveShadow={true}
            position={[2, -1, -0.5]} rotation={[0, 1.6, 0]}
            >
        <meshStandardMaterial color={0xffffff} />
      </Box>
    </RigidBody>
  );
};

export { RapierWorldBox };
