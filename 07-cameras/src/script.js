import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

console.log(OrbitControls);

// cursor
const cursor = {
    x: 0,
    y: 0
};
window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.height - 0.5);
});

// canvas
const canvas = document.querySelector('canvas.webgl');

// sizes
const sizes = {
    width: 800,
    height: 600
};

// scene
const scene = new THREE.Scene();

// object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);    // (vertical fov, aspect ratio, near, far)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, 1, -1, 0.1, 100);  // (left, right, top, bottom, near, far) ~ aspect ratio
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 1;
// controls.update();

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// animate
const clock = new THREE.Clock();

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    // update objects
    // mesh.rotation.y = elapsedTime;

    // update camera
    // camera.position.x = cursor.x * 10;
    // camera.position.y = cursor.y * 10;
    // camera.position.x = Math.sin(cursor.x*2) * 3;
    // camera.position.z = Math.cos(cursor.x*2) * 3;
    // camera.position.y = cursor.y * 3;
    // camera.lookAt(mesh.position);

    // update controls
    controls.update();  // for damping

    // render
    renderer.render(scene, camera);

    // call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();