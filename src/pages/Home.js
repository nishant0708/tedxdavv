import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


function Home(){
  const home = useRef();
  const tl = useRef();

  useEffect(() => {
    // Canvas
    const canvas = document.querySelector('#model')

    // Scene
    const scene = new THREE.Scene()

    // draco loader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    // glTF loader
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)
    // node_modules\three\examples\jsm\libs\draco
    // E:\flic\tedxdavv\node_modules\three\examples\jsm\libs\draco
    // /examples/jsm/libs/draco/
    let mixer = null
    gltfLoader.load(
      'model/landing_page_3d.gltf',
      (gltf) => {
        scene.add(gltf.scene)

        // Animation
        // mixer = new THREE.AnimationMixer(gltf.scene)
        // const action = mixer.clipAction(gltf.animations[2])
        // action.play()
      }
    )

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  
    window.addEventListener('resize', () =>
    {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
  
      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
  
      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(2, 2, 2)
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0.75, 0)
    controls.enableDamping = true

    /**
   * Floor
   */
    // const floor = new THREE.Mesh(
    //   new THREE.PlaneGeometry(10, 10),
    //   new THREE.MeshStandardMaterial({
    //       color: '#444444',
    //       metalness: 0,
    //       roughness: 0.5
    //   })
    // )
    // floor.receiveShadow = true
    // floor.rotation.x = - Math.PI * 0.5
    // scene.add(floor)

    /**
    * Lights
    // */
    // const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    // scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    // directionalLight.castShadow = true
    // directionalLight.shadow.mapSize.set(1024, 1024)
    // directionalLight.shadow.camera.far = 15
    // directionalLight.shadow.camera.left = - 7
    // directionalLight.shadow.camera.top = 7
    // directionalLight.shadow.camera.right = 7
    // directionalLight.shadow.camera.bottom = - 7
    directionalLight.position.set(2, 2, 2)
    scene.add(directionalLight)

    const helper_directional = new THREE.DirectionalLightHelper( directionalLight );
    scene.add( helper_directional );

    const pointLight = new THREE.PointLight(0xffffff, 1)
    scene.add(pointLight)
    const helper_point = new THREE.PointLightHelper(pointLight);
    scene.add(helper_point)
    pointLight.position.set(2,3,3)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const tick = () =>
    {
      const elapsedTime = clock.getElapsedTime()
      const deltaTime = elapsedTime - previousTime
      previousTime = elapsedTime

      // Model animation
      if(mixer)
      {
        mixer.update(deltaTime)
      }

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }, [])

  // Animation
  // useLayoutEffect(() => {
  //   tl.current && tl.current.progress(0).kill();
  //   const ctx = gsap.context(() => {
  //   tl.current = gsap.timeline()
  //     .from(".tedxdavv", { y: 100, duration: 2, ease:"easeInOut",  yoyo:true})
  //     .from(".tedxdavv", { opacity:0, duration: 1, ease:"easeInOut",  yoyo:true}, "-=2")
  //   }, home);

  //   // cleanup
  //   return () => ctx.revert();
  // }, []);

  return(
    <div ref={home} className=" bg-red-950 w-screen h-screen ">

      <canvas id="model" className="bg-transparent fixed h-screen w-screen"></canvas>

      {/* <span className="tedxdavv bg-transparent h-screen w-screen flex justify-center items-center text-[15vw] hover:cursor-default"> 
        <span className="bg-transparent font-inter-bold text-white">TEDx</span> 
        <span className="bg-transparent font-inter-lighter text-white">DAVV</span>
      </span> */}
    </div>
  )
}

export default Home;