import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const RapierWorldBox = () => {
  return (
    <RigidBody position={[-2, 3, -2]}>
      <Box args={[1, 5, 1]} castShadow={true} receiveShadow={true}>
        <meshStandardMaterial color={0xffffff} />
      </Box>
    </RigidBody>
  );
};

export { RapierWorldBox };
