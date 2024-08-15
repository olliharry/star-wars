import * as THREE from "three";
export function CreatePlanet(scene : THREE.Scene){
   
    const textureLoader = new THREE.TextureLoader();
    const bumpTexture = textureLoader.load('/textures/Coruscant (Bump).png');
    const cloudBumpTexture = textureLoader.load('/textures/Coruscant (Clouds Bump).png');
    const diffuseTexture = textureLoader.load('/textures/Coruscant (Diffuse).png');
    const cloudTexture = textureLoader.load('/textures/Coruscant (Clouds).png');
    const emissiveMap = textureLoader.load('/textures/Coruscant.png');

    const planetGeometry = new THREE.SphereGeometry(500, 64, 64);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: diffuseTexture,             // Base color texture
      bumpMap: bumpTexture,            // Bump map for surface depth
      bumpScale: 0.3,                 // Adjust this for the right amount of bumpiness
      roughness: 1,                    // Higher roughness for less shiny appearance
      metalness: 0,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.z = 1000;
    scene.add(planet);
    const cloudGeometry = new THREE.SphereGeometry(501, 64, 64); // Slightly larger than planet to float above
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,               // Cloud texture
      bumpMap: cloudBumpTexture,       // Cloud bump map for depth
      bumpScale: 0.2,                 // Adjust for slight cloud bump effect
      transparent: true,               // Clouds should be see-through
      opacity: 0.8                     // Opacity to control cloud transparency
    });

    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.position.z=1000;
    scene.add(clouds);
    
}

