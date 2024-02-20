import './style.css'

import * as THREE from 'three';

class Layer {
  constructor(gridSize, spacing) {
    this.group = new THREE.Group();

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); 
        
        const sphereMaterial = new THREE.MeshBasicMaterial({ // sphere material (will change)
          color: 0xffffff,
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        sphere.position.x = i * spacing - (gridSize - 1) * spacing * 0.5;
        sphere.position.y = j * spacing - (gridSize - 1) * spacing * 0.5;

        this.group.add(sphere);
      }
    }

    // Create a bounding box for all spheres
    const boundingBox = new THREE.Box3().setFromObject(this.group);
    const boxSize = new THREE.Vector3();
    boundingBox.getSize(boxSize);

    // Calculate the center of the bounding box manually
    const centerX = boundingBox.min.x + boxSize.x / 2;
    const centerY = boundingBox.min.y + boxSize.y / 2;
    const centerZ = boundingBox.min.z + boxSize.z / 2;

    // Create a box geometry with the size of the bounding box
    const boxGeometry = new THREE.BoxGeometry(boxSize.x, boxSize.y, boxSize.z);
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const boundingBoxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    // Set the position of the bounding box mesh to the calculated center
    boundingBoxMesh.position.set(centerX, centerY, centerZ);
    
    this.group.add(boundingBoxMesh);
  }
}




import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(30); // move back

renderer.render(scene,camera)

// scene.add(nn_layer);

// Example usage
const gridSize = 5;
const spacing = 2;
const nn_layer = new Layer(gridSize, 3);
scene.add(nn_layer.group);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5,5,5);

const ambient = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight,ambient)

const controls = new OrbitControls(camera,renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  nn_layer.group.rotation.y += 0.001; 

  controls.update();

  renderer.render(scene,camera);
}

animate()