import React, { useEffect, useRef } from 'react';

export const HeroAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating habit cubes
    const createCube = (index) => {
      const cube = document.createElement('div');
      cube.className = `floating-cube cube-${index}`;
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 30 + 20; // 20-50px
      const delay = Math.random() * 4; // 0-4s delay
      
      // Different colors for different habit categories
      const colors = [
        'from-blue-500 to-blue-600',
        'from-indigo-500 to-indigo-600', 
        'from-purple-500 to-purple-600',
        'from-green-500 to-green-600',
        'from-orange-500 to-orange-600',
        'from-teal-500 to-teal-600'
      ];
      
      const colorClass = colors[index % colors.length];
      
      cube.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, var(--tw-gradient-stops));
        border-radius: 8px;
        opacity: 0.6;
        animation: float ${3 + Math.random() * 2}s ease-in-out infinite ${delay}s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      `;
      
      cube.classList.add('bg-gradient-to-br', ...colorClass.split(' '));
      
      return cube;
    };

    // Create progress rings
    const createRing = (index) => {
      const ring = document.createElement('div');
      ring.className = `progress-ring ring-${index}`;
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 40 + 40; // 40-80px
      const delay = Math.random() * 3;
      
      ring.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        border: 3px solid rgba(99, 102, 241, 0.3);
        border-top: 3px solid rgba(99, 102, 241, 0.8);
        border-radius: 50%;
        opacity: 0.4;
        animation: spin 4s linear infinite ${delay}s, float ${4 + Math.random()}s ease-in-out infinite ${delay}s;
      `;
      
      return ring;
    };

    // Create particles
    const createParticle = (index) => {
      const particle = document.createElement('div');
      particle.className = `particle particle-${index}`;
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 4 + 2; // 2-6px
      const delay = Math.random() * 5;
      
      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0) 70%);
        border-radius: 50%;
        opacity: 0.3;
        animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${delay}s;
      `;
      
      return particle;
    };

    // Add elements to container
    for (let i = 0; i < 12; i++) {
      container.appendChild(createCube(i));
    }
    
    for (let i = 0; i < 8; i++) {
      container.appendChild(createRing(i));
    }
    
    for (let i = 0; i < 20; i++) {
      container.appendChild(createParticle(i));
    }

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      // Apply parallax to cubes
      const cubes = container.querySelectorAll('.floating-cube');
      cubes.forEach((cube, index) => {
        const speed = 0.5 + (index % 3) * 0.3;
        const x = xPercent * speed * 10;
        const y = yPercent * speed * 10;
        cube.style.transform = `translate(${x}px, ${y}px) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`;
      });
      
      // Apply parallax to rings
      const rings = container.querySelectorAll('.progress-ring');
      rings.forEach((ring, index) => {
        const speed = 0.3 + (index % 2) * 0.2;
        const x = xPercent * speed * 15;
        const y = yPercent * speed * 15;
        ring.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        .floating-cube {
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease-out;
        }
        
        .progress-ring {
          transition: transform 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default HeroAnimation;