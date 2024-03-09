import './style.css'
import * as THREE from 'three';
import { Layer } from './lib/layer.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
	75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
camera.position.setZ(30); // move back

renderer.render(scene,camera)

// Example usage
const gridSize = 5;
const spacing = 2;
const nn_layer = new Layer(50, 50, 3);
scene.add(nn_layer.group);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5,5,5);

const ambient = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight,ambient)

const controls = new OrbitControls(camera,renderer.domElement);

window.addEventListener('resize', () =>
{
		// Update sizes
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight

		// Update camera
		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()

		// Update renderer
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
	requestAnimationFrame(animate);

	nn_layer.group.rotation.y += 0.001; 

	controls.update();

	renderer.render(scene,camera);
}

animate()
