import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import gltfDesk from "./assets/desk.glb";
import gltfMat from "./assets/mat.glb";
import gltfCoffee from "./assets/coffee.glb";
import gltfPlant from "./assets/plant.glb";
import gltfComputer from "./assets/computer.glb";

const Desk = () => {
    const { scene: desk } = useGLTF(gltfDesk) as GLTF;
    const { scene: mat } = useGLTF(gltfMat) as GLTF;
    const { scene: coffee} = useGLTF(gltfCoffee) as GLTF;
    const { scene: plant } = useGLTF(gltfPlant) as GLTF;
    const { scene: computerStand } = useGLTF(gltfComputer) as GLTF;

    return (
        <group name="Desk" position={[0, -0.1, -0.35]}>
            <primitive object={ coffee } />
            <primitive object={ desk } />
            <primitive object={ mat } />
            <primitive object={ computerStand }/>
            <primitive object={ plant } position={[0, 0, -0.10]}/>
        </group>
    );
};

export { Desk }