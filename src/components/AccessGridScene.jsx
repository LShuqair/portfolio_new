import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// A network graph standing in for a personnel/access-control network.
// The three gold "hub" nodes map to the site's three case files; the
// muted field around them is the broader network they connect through.
const BASE_COUNT = 46
const RADIUS = 3.4
const EDGE_DISTANCE = 1.5

function randomInSphere(radius) {
  let v
  do {
    v = new THREE.Vector3(
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius
    )
  } while (v.length() > radius)
  return v
}

function useNetworkGeometry() {
  return useMemo(() => {
    const accentPositions = [
      new THREE.Vector3(1.6, 0.6, 0.4),
      new THREE.Vector3(-1.4, -0.8, 0.9),
      new THREE.Vector3(0.2, 1.3, -1.2),
    ]

    const basePositions = Array.from({ length: BASE_COUNT }, () =>
      randomInSphere(RADIUS)
    )

    const allNodes = [...accentPositions, ...basePositions]

    const edgePoints = []
    for (let i = 0; i < allNodes.length; i += 1) {
      for (let j = i + 1; j < allNodes.length; j += 1) {
        const dist = allNodes[i].distanceTo(allNodes[j])
        if (dist < EDGE_DISTANCE) {
          edgePoints.push(allNodes[i].x, allNodes[i].y, allNodes[i].z)
          edgePoints.push(allNodes[j].x, allNodes[j].y, allNodes[j].z)
        }
      }
    }

    const basePositionsArray = new Float32Array(basePositions.length * 3)
    basePositions.forEach((v, idx) => {
      basePositionsArray[idx * 3] = v.x
      basePositionsArray[idx * 3 + 1] = v.y
      basePositionsArray[idx * 3 + 2] = v.z
    })

    return {
      accentPositions,
      basePositionsArray,
      edgeArray: new Float32Array(edgePoints),
    }
  }, [])
}

function AccentNode({ position, delay }) {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() + delay
    const scale = 1 + Math.sin(t * 1.4) * 0.18
    ref.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshBasicMaterial color="#c9a24b" />
    </mesh>
  )
}

function EdgeLines({ positions }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <lineSegments>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#5b8ca8" transparent opacity={0.25} />
    </lineSegments>
  )
}

function NetworkGroup() {
  const groupRef = useRef(null)
  const { accentPositions, basePositionsArray, edgeArray } =
    useNetworkGeometry()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.05
    groupRef.current.rotation.x += delta * 0.012

    const { x, y } = state.pointer
    groupRef.current.rotation.y += x * 0.0006
    groupRef.current.rotation.x += y * 0.0006
  })

  return (
    <group ref={groupRef}>
      <EdgeLines positions={edgeArray} />
      <Points positions={basePositionsArray} stride={3}>
        <PointMaterial
          transparent
          color="#edeae1"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      {accentPositions.map((pos, i) => (
        <AccentNode key={i} position={pos} delay={i * 1.3} />
      ))}
    </group>
  )
}

export default function AccessGridScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <color attach="background" args={['#0a0b0e']} />
        <ambientLight intensity={0.6} />
        <NetworkGroup />
      </Suspense>
    </Canvas>
  )
}
