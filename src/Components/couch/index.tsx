import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfCouch from "./assets/couch.glb";
import gltfCarpet from "./assets/carpet.glb";
import gltfWallDeco from "./assets/wallDeco.glb";

const Couch = () => {
    const { scene: couch } = useGLTF(gltfCouch) as GLTF;
    const { scene: wallDeco } = useGLTF(gltfWallDeco) as GLTF;
    const { scene: carpet } = useGLTF(gltfCarpet) as GLTF;

    return (
        <group name="Couch"  >
            <primitive object={ couch } position={[-0.2, -0.1, 0]} />
            <primitive object={ carpet }  position={[0, 0.05, 0]}/>
            <primitive object={ wallDeco } position={[ -0.25, 0.2, 0]} />
        </group>
    );
};

export { Couch }