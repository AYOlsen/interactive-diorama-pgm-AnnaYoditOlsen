import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Components/Rapier/World";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";
import { Couch } from "Components/couch";
import { Desk } from "Components/desk";


const InteractiveDioramaPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
      <Couch />
      <Desk />
    </Layout>
  );
};

export { InteractiveDioramaPage };
