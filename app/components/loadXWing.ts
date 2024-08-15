import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";

export function LoadXWing(scene: THREE.Scene,){
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("/objects/");
    mtlLoader.load("x-wing.mtl", (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("/objects/");
      objLoader.load(
        "x-wing.obj",
        function (object) {
          scene.add(object);
        },
        undefined,
        function (error) {
          console.error("error loading obj", error);
        }
      );
    });
};