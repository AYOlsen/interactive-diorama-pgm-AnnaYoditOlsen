import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfDesk from "./assets/desk.glb";
import gltfMat from "./assets/mat.glb";
import gltfCoffee from "./assets/coffee.glb";
import gltfPlant from "./assets/plant.glb";

const Desk = () => {
    const { scene: desk } = useGLTF(gltfDesk) as GLTF;
    const { scene: mat } = useGLTF(gltfMat) as GLTF;
    const { scene: coffee} = useGLTF(gltfCoffee) as GLTF;
    const { scene: plant } = useGLTF(gltfPlant) as GLTF;

    return (
        <group name="Desk" position={[0, -0.1, -0.4]}>
            <primitive object={ desk } />
            <primitive object={ mat } />
            <primitive object={ coffee } />
            <primitive object={ plant } />
        </group>
    );
};

export { Desk }