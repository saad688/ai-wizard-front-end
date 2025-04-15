
import { useRef, useEffect } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: any[] = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 20000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: getRandomColor(),
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          amplitude: Math.random() * 1 + 0.5,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: Math.random() * 0.01,
        });
      }
    };
    
    const getRandomColor = () => {
      const colors = [
        'rgba(79, 70, 229, 0.3)', // Indigo
        'rgba(59, 130, 246, 0.3)', // Blue
        'rgba(16, 185, 129, 0.3)', // Green
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.angle += particle.angleSpeed;
        particle.x += particle.speedX + Math.sin(particle.angle) * particle.amplitude;
        particle.y += particle.speedY + Math.cos(particle.angle) * particle.amplitude;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      aria-hidden="true"
    />
  );
};

export default BackgroundParticles;
