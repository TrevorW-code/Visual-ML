import * as THREE from 'three';
import { Node }  from './node.js';

export class Layer { 
    /*
    TODOs
    - Add Multiple States
        - clickable, expand and contract
    */
    constructor(row,col,spacing) {
        this.group = new THREE.Group();
	this.id = "id" + Math.random().toString(16).slice(2)
	this.color = 0xffffff 

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                
		// Create Node() here

                const x = i * spacing - (row - 1) * spacing * 0.5;
                const y = j * spacing - (col - 1) * spacing * 0.5;

		const node = new Node(x,y,1,1)
                
		this.group.add(node.sprite);
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
