import './style.css'
import * as THREE from 'three'

// canvas
const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// objects
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

// object position
// cube1.position.x = 0;
// cube1.position.y = 0;
// cube1.position.z = 0;
cube1.position.set(0, 0, 0);
group.position.y = -1;

// normalizing a vector
// cube1.position.normalize();

// object scale
// cube1.scale.x = 1;
// cube1.scale.y = 1;
// cube1.scale.z = 1;
cube1.scale.set(1, 1, 1);

// euler rotation
cube1.rotation.reorder('YXZ');
cube1.rotation.x = Math.PI / 2;
cube1.rotation.y = 0;

// quarternion rotation

// axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// sizes
const sizes = {
    width: 800,
    height: 600
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

camera.lookAt(cube1.position);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// length & distanceTo
console.log(cube1.position.length());                                // center to object
console.log(cube1.position.distanceTo(new THREE.Vector3(0, 0, 3)));  // (0, 0, 3) to object
console.log(cube1.position.distanceTo(camera.position));             // camera to object