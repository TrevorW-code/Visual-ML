import * as THREE from 'three';

export class Node {
    /*
    TODOs
    - unique ID
    - edges, how will we handle?
    */
    constructor(w,h,z=1) {
        const map = new THREE.TextureLoader().load( 'textures/sprite.png' );
        const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

        this.sprite = new THREE.Sprite( material );
        this.sprite.scale.set(w, h, z)
        
    }
}

// scene.add( sprite );