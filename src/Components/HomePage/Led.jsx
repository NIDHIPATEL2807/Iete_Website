import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';

const AnimatedModel = ({ url }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  
  // Access the animation clips
  const { actions } = useAnimations(animations, group);

  const [rotationSpeed, setRotationSpeed] = useState(0); // Speed of rotation based on scroll

  // Throttling scroll event for better performance
  const throttle = (func, delay) => {
    let timeout;
    return function () {
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(this, arguments);
          timeout = null;
        }, delay);
      }
    };
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY; // Get the scroll position

      // Change rotation speed based on scroll position (adjust the threshold as needed)
      if (scrollPosition < 1000) {
        setRotationSpeed(scrollPosition * 0.002); // Adjust rotation speed
      } else {
        setRotationSpeed(1); // Stop rotating after reaching a certain scroll position
      }
    }, 100); // 100ms delay to throttle scroll events

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply rotation speed to the model
  useEffect(() => {
    if (group.current) {
      group.current.rotation.y += rotationSpeed; // Update rotation on scroll
    }
  }, [rotationSpeed]);

  return <primitive ref={group} object={scene} scale={1.5} />;
};

const Led = () => {
  return (
     <div 
    className="w-screen h-[200vh]" > {/* Increased height to allow scrolling */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ background: 'transparent' }} >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 10]} intensity={2} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        
        {/* Add your animated model */}
        <AnimatedModel url="src\Components\HomePage\led_character.glb" />
        
        {/* Disable zoom on scroll */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Led;
