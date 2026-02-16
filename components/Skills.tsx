'use client';

import { useMemo, useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Three.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
    { name: 'Tailwind', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Framer', url: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'GraphQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
];

function Icon({ url, position, ...props }: { url: string; position: THREE.Vector3;[key: string]: any }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const texture = useTexture(url);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    useFrame(({ camera }) => {
        if (meshRef.current) {
            // Billboard facing camera
            meshRef.current.quaternion.copy(camera.quaternion);
        }
    });

    return (
        <Float floatIntensity={1} rotationIntensity={0}>
            <group ref={meshRef} position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                {...props}
            >
                {/* The Logo itself - Large and clear */}
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[2.2, 2.2]} />
                    <meshStandardMaterial
                        map={texture}
                        transparent
                        side={THREE.DoubleSide}
                        depthWrite={false}
                        roughness={0.5}
                        metalness={0.5}
                    />
                </mesh>
            </group>
        </Float>
    );
}

function IconRing({ radius = 17 }) {
    const icons = useMemo(() => {
        const temp = [];
        const count = skills.length;
        const angleStep = (Math.PI * 2) / count;

        for (let i = 0; i < count; i++) {
            const skill = skills[i];

            // Arrange in a circle on XZ plane
            const angle = i * angleStep;
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);

            const pos = new THREE.Vector3(x, 0, z);
            temp.push({ pos, ...skill });
        }
        return temp;
    }, [radius]);

    // Rotate the entire ring slowly
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
        }
    })

    return (
        <group ref={groupRef}>
            {icons.map((icon, index) => (
                <Icon key={index} position={icon.pos} url={icon.url} />
            ))}
        </group>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="w-full bg-transparent relative flex flex-col items-center justify-center pt-0 pb-10 overflow-hidden">
            <div className="text-center z-10 mb-8 relative pointer-events-none">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Technical Skills</h2>
                <p className="text-gray-400 text-base">
                    Frameworks & Tools
                </p>
            </div>

            <div className="w-full h-[50vh] md:h-[60vh] cursor-grab active:cursor-grabbing">
                {/* 
                    Adjusted camera for better fit:
                */}
                <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 26], fov: 50 }} gl={{ alpha: true }}>
                    <ambientLight intensity={2} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <Suspense fallback={null}>
                        <IconRing radius={17} />
                    </Suspense>

                    {/* Orbit controls with limitations to keep the 'ring' feel */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 1.8}
                        rotateSpeed={0.5}
                    />
                </Canvas>
            </div>
        </section>
    );
}
