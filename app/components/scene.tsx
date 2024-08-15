"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";
import { SetOrbitControls } from "../utility/orbitControls";
import { CreatePlanet } from "./planet";
import { CreateBackGround } from "./background";

import { ModelLoader } from "../utility/modelLoader";
import { LoadXWing } from "./loadXWing";

const ThreeScene = () => {
  // Use ref to hold the DOM element where Three.js will render
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Set up the camera (perspective camera)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(10, 100, 10).normalize();
    scene.add(light);

    const controls = SetOrbitControls(scene, camera, renderer);

    LoadXWing(scene);
    CreatePlanet(scene);
    CreateBackGround(scene, renderer);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    // Animation loop (optional, used for rendering or animation purposes)
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
