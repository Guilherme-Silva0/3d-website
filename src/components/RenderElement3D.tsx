import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Children } from "react";

type Props = {
  children: React.ReactNode;
  rotate: boolean;
};

const RenderElement3D = ({ children, rotate }: Props) => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        autoRotate={rotate}
        autoRotateSpeed={rotate ? 0.9 : 0}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      {children}
    </Canvas>
  );
};

export default RenderElement3D;
