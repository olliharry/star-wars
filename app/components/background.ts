import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/Addons.js";

export function CreateBackGround(scene : THREE.Scene, renderer: THREE.WebGLRenderer){
    const rgbeLoader = new RGBELoader();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    rgbeLoader.load("/textures/nebula.hdr", (hdrEquirect) => {
      const hdrTexture =
        pmremGenerator.fromEquirectangular(hdrEquirect).texture;

      // Set HDR texture as the environment map
      scene.background = hdrTexture;
      scene.environment = hdrTexture;

      hdrEquirect.dispose();
      pmremGenerator.dispose();
    });
}