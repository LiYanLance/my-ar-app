// "use client"
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <head>
        <script src="/aframe-master.min.js"></script>
        <script src="/aframe-ar-nft.js"></script>
      </head>
      <main className={styles.main}>
        <div>
          <div>Loading, please wait...</div>
        </div>

        <a-scene
          vr-mode-ui='enabled: false;'
          renderer="logarithmicDepthBuffer: true; precision: medium;"
          embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'
        >
          <a-nft
            type='nft' url='/trex/trex-image/trex'
            smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'>
            <a-entity
              gltf-model='./trex/scene.gltf'
              scale="5 5 5"
              position="150 300 -100"
            ></a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </main>
    </>
  );
}
