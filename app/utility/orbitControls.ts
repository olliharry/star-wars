import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/Addons.js";

export function SetOrbitControls(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer : THREE.WebGLRenderer){
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    return controls;
}