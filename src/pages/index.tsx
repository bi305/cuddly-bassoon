import Head from "next/head";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "@/components/Loader";

import Gear from "@/components/Scene";
import DragonModel from "@/components/Silver_dragon";

export default function Home() {
  useEffect(() => {
    const getLocation = async () => {
      try {
        // Fetching the IP address from the external API
        const api = "https://ipinfo.io/json?token=532545df492f24";
        const response = await fetch(api);
        const data = await response.json();
   
        // Sending the IP data to your server's endpoint
        const backendResponse = await fetch('http://localhost:3003/location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const backendMessage = await backendResponse.text();
       } catch (error) {
        console.log("Error:", error);
      }
    };
  
    getLocation();
  }, []);
  
  return (
    <>
      <Head>
        <title>Bilal Raza Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative w-full h-screen mx-auto  ">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
      <div style={{ height: "5000px" }}>
        <h1
          className="section__text"
          style={{ fontSize: "15rem", color: "white", textAlign: "center" }}
        >
          <div>
            <h1 className={`  text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Bilal</span>
            </h1>
            <p className={`  mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </h1>
      </div>
    </>
  );
}

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.51} groundColor="white" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={0.7}
        position={[-1, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};
