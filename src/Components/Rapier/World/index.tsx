import { GroupProps } from "@react-three/fiber";

import { RapierWorldBox as Box } from "Components/Rapier/World/Box";
import { RapierWorldFloor as Floor } from "Components/Rapier/World/Floor";

const RapierWorld = (props: GroupProps) => {
  return (
    <group name="World" {...props} position={[0, -1, 0]}>
      <Floor />
      <Box />
    </group>
  );
};

export { RapierWorld };
