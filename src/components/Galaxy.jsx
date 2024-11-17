/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Galaxy = () => {
  const points = useMemo(() => {
    const count = 40000;
    const radius = 28;
    const branches = 20;
    const randomness = 0.3;
    const randomnessPower = 0.2;
    const spin = 0.2; // Spin multiplier for branches

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const insideColor = new THREE.Color("#9d50ff");
    const outsideColor = new THREE.Color("#58ff16");

    for (let i = 0; i < count; i++) {
      const branch = (i % branches) / branches;
      const angle = branch * Math.PI * 2;

      // Add spin effect based on distance from the center
      const distance = Math.random() * radius;
      const spinAngle = distance * spin;

      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1);

      // Apply spin to x and z positions
      positions[i * 3] =
        Math.cos(angle + spinAngle) * distance + randomX * randomness;
      positions[i * 3 + 1] = randomY * randomness; // Y-axis randomness
      positions[i * 3 + 2] =
        Math.sin(angle + spinAngle) * distance + randomZ * randomness;

      // Add gradient coloring (center to outer edge)
      const mixedColor = insideColor
        .clone()
        .lerp(outsideColor, distance / radius);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);

  const galaxyRef = useRef();

  // Animation for rotation
  useFrame(() => {
    galaxyRef.current.rotation.y += 0.003; // Revolve around Y-axis
  });

  return (
    <points ref={galaxyRef} rotation={[0.4, 0.2, 0.2]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points.positions}
          count={points.positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={points.colors}
          count={points.colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Galaxy;
