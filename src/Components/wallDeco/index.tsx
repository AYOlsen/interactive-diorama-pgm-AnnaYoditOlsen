import { useGLTF, Text } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshStandardMaterial  } from "three";
import { useState } from "react";

import gltfWallDeco from "./assets/wallDeco.glb";

const WallDeco = () => {
    const { scene } = useGLTF(gltfWallDeco) as GLTF;

    const colorSequence = ["#b97859", "#e8a8a3", "#ebd3bd", "#e5aa99", "#919eaf", "#e7e7e7"];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const toggleColor = (mesh: Mesh) => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorSequence.length);

        const material = mesh.material as MeshStandardMaterial;
        material.color.set(colorSequence[currentColorIndex]);

        if (currentColorIndex === colorSequence.length - 1) {
            setCurrentColorIndex(0);
        }
    };

    return (
        <group
            name="WallDeco"
            position={[-0.2, -0.6, 0]}
        >
            <Text
                position={[-1.8, 2.7, 0.8]}
                fontSize={0.2}
                color="#ffffff"
                rotation={[0, Math.PI / 2, 0]}
            >
                Change my color
            </Text>
            <mesh onClick={(e) => toggleColor(e.object as Mesh)}>
                <primitive object={scene} />
                <meshStandardMaterial color={colorSequence[currentColorIndex]} />
            </mesh>
        </group>
    );
};
export { WallDeco };
