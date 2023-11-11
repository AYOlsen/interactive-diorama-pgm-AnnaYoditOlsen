import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfLamp from "./assets/lamp.glb";

const Lamp = () => {
    const { scene } = useGLTF(gltfLamp) as GLTF;

    return (
        <group name="Lamp" position={[0, -0.1, -0.45]}>
            <primitive object={scene!} />
        </group>
    );
};

export { Lamp }