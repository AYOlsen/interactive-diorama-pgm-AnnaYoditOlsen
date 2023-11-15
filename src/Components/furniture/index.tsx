import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfCouch from "./assets/couch.glb";
import gltfCarpet from "./assets/carpet.glb";

const Furniture = () => {
    const { scene: couch } = useGLTF(gltfCouch) as GLTF;
    const { scene: carpet } = useGLTF(gltfCarpet) as GLTF;

    return (
        <group name="Couch"  >
            <primitive object={ couch } position={[-0.15, -0.1, -0.2]} />
            <primitive object={ carpet }  position={[-0.05, -0.1, 0]}/>
        </group>
    );
};

export { Furniture }