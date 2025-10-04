import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'chip' | 'connector' | 'code';
  angle: number;
  rotationSpeed: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = theme === 'dark';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 20 + 10,
        type: ['chip', 'connector', 'code'][Math.floor(Math.random() * 3)] as Particle['type'],
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    const drawChip = (x: number, y: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = isDark ? 'rgba(0, 191, 255, 0.15)' : 'rgba(0, 191, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-size / 2, -size / 2, size, size);

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-size / 2 - 5, -size / 3 + (i * size / 5));
        ctx.lineTo(-size / 2, -size / 3 + (i * size / 5));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size / 2, -size / 3 + (i * size / 5));
        ctx.lineTo(size / 2 + 5, -size / 3 + (i * size / 5));
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawConnector = (x: number, y: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = isDark ? 'rgba(192, 192, 192, 0.15)' : 'rgba(100, 116, 139, 0.3)';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.stroke();

      const pins = 8;
      for (let i = 0; i < pins; i++) {
        const pinAngle = (Math.PI * 2 * i) / pins;
        const x1 = Math.cos(pinAngle) * (size / 2);
        const y1 = Math.sin(pinAngle) * (size / 2);
        const x2 = Math.cos(pinAngle) * (size / 2 + 5);
        const y2 = Math.sin(pinAngle) * (size / 2 + 5);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawCode = (x: number, y: number, size: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = isDark ? 'rgba(0, 206, 209, 0.15)' : 'rgba(14, 165, 233, 0.3)';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(-size / 2, -size / 4);
      ctx.lineTo(-size / 4, 0);
      ctx.lineTo(-size / 2, size / 4);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(size / 2, -size / 4);
      ctx.lineTo(size / 4, 0);
      ctx.lineTo(size / 2, size / 4);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -size / 3);
      ctx.lineTo(-size / 8, size / 3);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += particle.rotationSpeed;

        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        if (particle.type === 'chip') {
          drawChip(particle.x, particle.y, particle.size, particle.angle);
        } else if (particle.type === 'connector') {
          drawConnector(particle.x, particle.y, particle.size, particle.angle);
        } else {
          drawCode(particle.x, particle.y, particle.size, particle.angle);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}
    />
  );
};
