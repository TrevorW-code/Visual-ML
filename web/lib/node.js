import * as THREE from 'three';

// Define loader and sprite
const loader = new THREE.TextureLoader()
const sprite = loader.load('/weight.png')

// Materials

export class Node {
    /*
    TODOs
    - edges, how will we handle?
    */
    constructor(x,y,z,size) {
	
        const material = new THREE.SpriteMaterial( { map: sprite, color: 0xffffff } );
	this.weight = Math.random();
	this.id = "id" + Math.random().toString(16).slice(2)
        this.sprite = new THREE.Sprite( material );
        this.sprite.scale.set(size, size, size);
	this.sprite.position.set(x,y,z);
    }
}

// scene.add( sprite );
