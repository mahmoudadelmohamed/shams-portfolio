import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Color } from 'three';
// import { ArcballControls } from './ArcballControls';
// import { ColladaExporter } from './ColladaExporter';

const randomColor = () => {
  return new Color(Math.random(),Math.random(),Math.random());
}

export const GalleryTunnel: React.FC = () => {
  const {current: scene} = useRef(new THREE.Scene());
  const {current: camera} = useRef(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ));
  const {current: renderer} = useRef(new THREE.WebGLRenderer());

  const leftRot = [0, 90, 0];
  const rightRot = [0, -90, 0];
  const upRot = [90, 0, 0];
  const downRot = [-90, 0, 0];

  useEffect(() => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    const parentEl = document.getElementById("gallery-tunnel");
    if (!parentEl) return;
    parentEl.appendChild( renderer.domElement );
  
    const light  = new THREE.AmbientLight( 0xFFFFFF );

    const rowCount = 25;
    const horCount = 6;
    const vertCount = 4;
    const w = 1;
    const h = 1;

    const createRow = (index: number) => {
      let startX = - horCount * w / 2;
      let startY = vertCount * h / 2;
      for (let i = 0; i < horCount; i++) {
        const plane = new THREE.PlaneGeometry(w, h);
        const material = new THREE.MeshLambertMaterial( { color: randomColor() } );
        const planeMesh = new THREE.Mesh(plane, material);
        planeMesh.position.x = startX + i * w;
        planeMesh.position.y = startY;
        planeMesh.position.z = index;
        scene.add(planeMesh);
      }
    }

    for (let i = 0; i < rowCount; i++) {
      createRow(i);
    }

    scene.add( light );
    renderer.render(scene, camera);
    return () => {
      renderer.dispose();
      scene.clear();
      parentEl.innerHTML = '';
    }
  }, []);

  return (
    <section
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'yellow',
      }}
    >
      <div id="gallery-tunnel"></div>
    </section>
  );
}