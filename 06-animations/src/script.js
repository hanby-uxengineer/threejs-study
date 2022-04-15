import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

// canvas
const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
    width: 800,
    height: 600
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

// time
// let time = Date.now();

// clock
const clock = new THREE.Clock();

//gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });    // gsap has own loop

// animation
const loop = () => {
    // time
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;

    // update object - time
    // mesh.rotation.y += 0.001 * deltaTime;

    // clock
    // const elapsedTime = clock.getElapsedTime();

    // update object - clock
    // camera.position.y = Math.sin(elapsedTime);
    // camera.position.x = Math.cos(elapsedTime);
    // camera.lookAt(mesh.position);

    // renderer
    renderer.render(scene, camera);

    window.requestAnimationFrame(loop);
}

loop();