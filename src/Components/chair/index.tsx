import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfChair from "./assets/chair.glb";

const Chair = () => {
    const { scene } = useGLTF(gltfChair) as GLTF;

    return (
        <group name="Chair" position={[0, -1.1, -0.4]}>
            <primitive object={scene!} />
        </group>
    );
};

export { Chair }