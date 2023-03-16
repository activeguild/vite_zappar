import {
  BrowserCompatibility,
  ImageTracker,
  Loader,
  ZapparCamera,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import React, { FC, Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ZapparCanvas>
      <ZapparCamera />
      <mesh position={[0, 0, -5]}>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>
  );
}

export default App;
