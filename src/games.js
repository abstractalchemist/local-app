import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import React from 'react';

class Canvas extends React.Component {

    constructor() {
	super();
	console.log("canvas up");
	
    }

    componentDidMount() {
	this.scene = new Scene();
	this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	
	this.renderer = new WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById("gl_content").appendChild( this.renderer.domElement );
	let geometry = new BoxGeometry( 1, 1, 1 );
	let material = new MeshBasicMaterial( { color: 0x00ff00 } );
	this.cube = new Mesh( geometry, material );
	this.scene.add( this.cube );

	this.camera.position.z = 5;
	this.glRender();
    }

    glRender() {
	requestAnimationFrame( this.glRender.bind(this) );
	this.cube.rotation.x += 0.1;
	this.cube.rotation.y += 0.1;
	this.renderer.render( this.scene, this.camera )	
    }

    render() {
	return (<div id="gl_content"/>);
    }
}

export default Canvas;
