import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352fd"
        attach="material"
        distort={0.5}
        speed={1.7}
        roughness={0.6}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
