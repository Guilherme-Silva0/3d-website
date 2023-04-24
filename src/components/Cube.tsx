const Cube = () => {
  return (
    <mesh rotation={[90, 0, 90]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Cube;
