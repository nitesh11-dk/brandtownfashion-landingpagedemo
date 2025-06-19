/*
Fallback 3D Watch Model
Since the original Metaretail_watch_1.jsx was empty, this is a simple watch model
*/

import React from "react";

export function Model(props) {
  return (
    <group {...props} dispose={null}>
      {/* Watch Face */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Watch Bezel */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
      </mesh>

      {/* Watch Band */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Watch Crown */}
      <mesh position={[0.9, 0.2, 0]}>
        <cylinderGeometry
          args={[0.05, 0.05, 0.1, 8]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}
