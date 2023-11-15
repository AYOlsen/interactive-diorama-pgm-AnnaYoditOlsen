import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { PositionalAudio, Text } from "@react-three/drei";
import { useRef } from "react";
import { PositionalAudio as PositionalAudioType } from "three";

import gltfKeyboard from "./assets/keyboard.glb";
import keyboardAudio from "./sound/quick-mechanical-keyboard-14391.mp3";

const Keyboard = () => {
    const { scene } = useGLTF(gltfKeyboard) as GLTF;
    const positionalAudioRef = useRef<PositionalAudioType | null>(null);

    const handleClick = () => {
        if (positionalAudioRef.current) {
            positionalAudioRef.current.play();
            positionalAudioRef.current.setVolume(0.5);
            setTimeout(() => {
                if (positionalAudioRef.current) {
                    positionalAudioRef.current.stop();
                }
            }, 5000);
        }
    };

    return (
        <group name="Keyboard" position={[0, -0.1, -0.4]}>
            <primitive object={scene} onClick={handleClick}/>
            <PositionalAudio ref={positionalAudioRef} url={keyboardAudio} />
        </group>
    );
};

export { Keyboard };