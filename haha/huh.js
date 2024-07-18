import * as THREE from 'three';
//below is for text
//import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "#FFF" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.add(camera)

const camera = new THREE.Camera();
scene.add(camera)

let source = new THREEx.ArToolkitSource({
  sourceType: 'webcam'
});

const context = new THREEx.ArToolkitContext({
  debug: true, 
  detectionMode: 'mono', 
  maxDetectionRate: 30,
  canvasWidth: 80 * 3,
  canvasHeight: 60 * 3,
})

const loader = new GLTFLoader()
const skyModel = '/public/sky.glb'

loader.load('/public/sky.glb', (gltf) => {
  scene.add(gltf.scene)
});
console.log(cube)
console.log(skyModel)
window.addEventListener('resize', function() {
  arToolkitSource.onResize(renderer.domElement)
});

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
