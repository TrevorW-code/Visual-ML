import * as THREE from 'three';

export class Layer {
    constructor(row,col,spacing) {
        this.group = new THREE.Group();

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                const sphereGeometry = new THREE.SphereGeometry(1, 32, 32); 
                
                const sphereMaterial = new THREE.MeshBasicMaterial({ // sphere material (will change)
                    color: 0xffffff,
                });
                
                const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

                sphere.position.x = i * spacing - (row - 1) * spacing * 0.5;
                sphere.position.y = j * spacing - (col - 1) * spacing * 0.5;

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