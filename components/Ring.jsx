import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
const Box = () => {
  const meshRef = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <torusGeometry args={[2, 0.4, 30, 200]} />
      <meshStandardMaterial color="#50EED7" />
    </mesh>
  );
};

const Ring = () => {
  return (
    <>
      <Canvas shadows>
        <ambientLight color="#50EED7" intensity="2.4" />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
};

export default Ring;
