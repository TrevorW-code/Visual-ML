import * as THREE from 'three';
import { floatToHex }  from './helpers.js';
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
	this.id = "id" + Math.random().toString(16).slice(2)
	this.weight = Math.random();
	console.log(this.weight);

	const material = new THREE.SpriteMaterial( { map: sprite, color: floatToHex(this.weight) } );
        this.sprite = new THREE.Sprite( material );
        this.sprite.scale.set(size, size, size);
	this.sprite.position.set(x,y,z);
    }
}
