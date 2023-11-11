import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Components/Rapier/World";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";
import { Couch } from "Components/couch";
import { Desk } from "Components/desk";
import { Keyboard } from "Components/keyboard";
import { Lamp } from "Components/deskLamp";
import { Chair } from "Components/chair";


const InteractiveDioramaPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
      <Couch />
      <Desk />
      <Lamp />
      <Keyboard />
      <Chair />
    </Layout>
  );
};

export { InteractiveDioramaPage };
