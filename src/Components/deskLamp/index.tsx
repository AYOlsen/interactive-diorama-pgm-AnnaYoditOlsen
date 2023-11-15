import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState } from "react";
import { PointLight } from "three";

import gltfLamp from "./assets/lamp.glb";

const Lamp = () => {
    const { scene } = useGLTF(gltfLamp) as GLTF;
    const lampRef = useRef<THREE.Group | null>(null);
    const [lightVisible, setLightVisible] = useState(false);
    const light = new PointLight(0xfff5b6, 0.2);

    light.position.set(-0.54, 1.1, -1.55);

    const toggleLight = () => {
        setLightVisible((prev) => !prev);
    };

    return (
        <group name="Lamp" position={[0, -0.1, -0.35]} onClick={toggleLight}>
            <primitive object={scene!} ref={lampRef} />
            {lightVisible && <primitive object={light} />}
        </group>
    );
};

export { Lamp };