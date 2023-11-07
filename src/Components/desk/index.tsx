import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfDesk from "./assets/desk.glb";

const Desk = () => {
    const { scene } = useGLTF(gltfDesk) as GLTF;

    return (
        <group name="Desk"
        >
            <primitive object={scene!} />
        </group>
    );
};

export { Desk }