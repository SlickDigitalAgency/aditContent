import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingShapes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = containerRef.current?.querySelectorAll('.shape');
    
    if (!shapes) return;
    
    shapes.forEach((shape) => {
      // Random starting position
      gsap.set(shape, {
        x: `random(0, 100)%`,
        y: `random(0, 100)%`,
        rotation: 'random(0, 360)',
        scale: `random(0.5, 1.5)`,
        opacity: `random(0.1, 0.3)`,
      });
      
      // Create animation
      gsap.to(shape, {
        x: `random(-20, 120)%`,
        y: `random(-20, 120)%`,
        rotation: 'random(-360, 360)',
        scale: `random(0.5, 2)`,
        duration: `random(20, 40)`,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
    
    return () => {
      gsap.killTweensOf('.shape');
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="shape w-40 h-40 absolute blur-[100px] rounded-full bg-adit-aqua/30" />
      <div className="shape w-64 h-64 absolute blur-[120px] rounded-full bg-adit-blue/20" />
      <div className="shape w-52 h-52 absolute blur-[80px] rounded-full bg-adit-aqua/10" />
      <div className="shape w-96 h-96 absolute blur-[150px] rounded-full bg-adit-light-blue/20" />
      <div className="shape w-72 h-72 absolute blur-[100px] rounded-full bg-adit-blue/30" />
    </div>
  );
};

export default FloatingShapes;