import {Cloud, Clouds, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import vertex from './vertex'
import fragment from './fragment'
import * as THREE from "three"

function App() {

  return (
    <>
  <Canvas style={{background:"black"}}>
    <color args={["rgb(18, 18, 18)"]} attach={"background"}/> 
    <OrbitControls/>
        <ambientLight intensity={ 2.5 } />
        <pointLight args={["#FF371F",20,10,0]} position={[0,1,0]}/>
        <mesh>
            <sphereGeometry args={ [ 1, 32, 32 ] }/>
            <shaderMaterial 
            vertexShader={vertex} 
            fragmentShader={fragment} 
            
            uniforms={{
              uColorOne:{value: new THREE.Color("#FF371F")},
              uColorTwo:{value: new THREE.Color("#FCD500")},
            }} 
         
            />
            
        </mesh>
        <Clouds scale={0.3} position={[0,-0.8,0]}>
        <Cloud 
          seed={6}
          segments= {60}
          bounds={[10,0,4]} 
          concentrate= {"inside"}
          volume= {6}
          growth= {6}
          fade= {5}          
          color={"#FFEDD9"}
          />
        </Clouds> 
      </Canvas>
    </>
  )
}


export default App
