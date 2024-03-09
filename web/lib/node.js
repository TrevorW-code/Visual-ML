import * as THREE from 'three';

// Define loader and sprite
const loader = new THREE.TextureLoader()
sprite = loader.load('./test2.png')


// Materials
const nodeMaterial = new THREE.MeshLambertMaterial({
    map: sprite,
    transparent: true
});

export class Node {
    /*
    TODOs
    - edges, how will we handle?
    */
    constructor(w,h,z=1) {
        const map = new THREE.TextureLoader().load( 'textures/sprite.png' );
        const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

	this.pos = w,h,z   // can i do this? 
	this.weight = Math.random();
	this.id = "id" + Math.random().toString(16).slice(2)
        this.sprite = new THREE.Sprite( material );
        this.sprite.scale.set(w, h, z)
    }
}

// scene.add( sprite );
