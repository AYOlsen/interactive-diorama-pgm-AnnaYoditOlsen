import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Components/Rapier/World";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";
import { Furniture } from "Components/furniture";
import { Desk } from "Components/desk";
import { Keyboard } from "Components/keyboard";
import { Lamp } from "Components/deskLamp";
import { Chair } from "Components/chair";
import { WallDeco } from "Components/wallDeco";
import { Animation } from "Components/animation";
import { Drawer } from "Components/drawer";


const InteractiveDioramaPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
      <Furniture />
      <Desk />
      <Lamp />
      <Keyboard />
      <Chair />
      <WallDeco />
      <Animation />
      <Drawer />
    </Layout>
  );
};

export { InteractiveDioramaPage };
