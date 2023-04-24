import { Suspense } from "react";
import TextSessionTitle from "./components/TextSessionTitle";
import Cube from "./components/Cube";
import AnimatedSphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import RenderElement3D from "./components/RenderElement3D";
import Section from "./components/Section";
import Main from "./components/Main";
import Title from "./components/Title";
import Text from "./components/Text";
import TextGroup from "./components/TextGroup";

const App = () => {
  return (
    <Suspense>
      <TextSessionTitle />
      <Main>
        <Section>
          <RenderElement3D rotate={true}>
            <Cube />
          </RenderElement3D>
          <TextGroup>
            <Title>Cube</Title>
            <Text>A simple 3D cube</Text>
          </TextGroup>
        </Section>
        <Section>
          <RenderElement3D rotate={false}>
            <AnimatedSphere />
          </RenderElement3D>
          <TextGroup>
            <Title>Animated sphere</Title>
            <Text>A sphere with distortion animation</Text>
          </TextGroup>
        </Section>
        <Section>
          <RenderElement3D rotate={true}>
            <Iphone />
          </RenderElement3D>
          <TextGroup>
            <Title>IPhone</Title>
            <Text>A 3D model of an iPhone</Text>
          </TextGroup>
        </Section>
      </Main>
    </Suspense>
  );
};

export default App;
