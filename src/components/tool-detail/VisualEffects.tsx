
import React, { useEffect, useRef } from 'react';

interface VisualEffectsProps {
  iconName: string;
}

const VisualEffects = ({ iconName }: VisualEffectsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match its display size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    const particles: any[] = [];
    const particleCount = 50;
    
    // Get a color based on the icon name
    const getColor = () => {
      const colors: { [key: string]: string } = {
        Image: '#3B82F6', // blue
        MessageSquare: '#8B5CF6', // purple
        LineChart: '#10B981', // green
        FileText: '#F59E0B', // amber
        Code: '#EF4444', // red
        Mic: '#EC4899', // pink
        Star: '#6366F1', // indigo
        default: '#6366F1', // default
      };
      
      return colors[iconName] || colors.default;
    };
    
    const color = getColor();
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: color,
        alpha: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * 360,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Convert direction in degrees to radians
        const directionInRadians = (particle.direction * Math.PI) / 180;
        
        // Update position
        particle.x += Math.cos(directionInRadians) * particle.speed;
        particle.y += Math.sin(directionInRadians) * particle.speed;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = (180 - particle.direction) % 360;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = (360 - particle.direction) % 360;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.alpha})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Helper function to convert hex to rgb
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [iconName]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full" 
      aria-hidden="true"
    />
  );
};

export default VisualEffects;
