import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfCouch from "./assets/couch.glb";

const Couch = () => {
    const { scene } = useGLTF(gltfCouch) as GLTF;

    return (
        <group name="Couch"
        position={[-0.4, 0, 0]}
        >
            <primitive object={scene!} />
        </group>
    );
};

export { Couch }