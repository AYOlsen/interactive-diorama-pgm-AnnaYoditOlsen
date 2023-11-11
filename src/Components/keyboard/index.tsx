import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfKeyboard from "./assets/keyboard.glb";

const Keyboard = () => {
    const { scene } = useGLTF(gltfKeyboard) as GLTF;

    return (
        <group name="Keyboard" position={[0, -0.1, -0.4]}>
            <primitive object={scene!} />
        </group>
    );
};

export { Keyboard }