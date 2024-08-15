
import * as THREE from 'three';
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { MTLLoader } from "three/examples/jsm/Addons.js";

export function ModelLoader(scene: THREE.Scene, objDir:string, mtlDir:string){
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath("/objects/");
    mtlLoader.load(mtlDir, (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("/objects/");
      objLoader.load(
        objDir,
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

