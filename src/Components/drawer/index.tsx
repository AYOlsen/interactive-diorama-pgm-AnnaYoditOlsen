import { useGLTF } from "@react-three/drei";
import { useState, useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfDrawer from "./assets/drawer.glb";

const Drawer = () => {
    const { scene: drawer } = useGLTF(gltfDrawer) as GLTF;
    const [drawerPosition, setDrawerPosition] = useState<[number, number, number]>([0, -1, -0.35]);

    const openDrawer = () => {
        setDrawerPosition([0, -1, -0.1]);
    };

    return (
        <group name="Drawer" position={drawerPosition} onClick={openDrawer} >
        <primitive object={drawer} />
        </group>
    );
};

export { Drawer };
