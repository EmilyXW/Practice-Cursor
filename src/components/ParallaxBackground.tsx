import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number; // 0 = no movement, 1 = normal speed, 0.5 = half speed
}

export function ParallaxBackground({ children, speed = 0.3 }: ParallaxBackgroundProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 13% 10%, rgba(255, 210, 156, 0.4) 2px, transparent 1.5px),
            radial-gradient(circle at 80% 70%, rgba(255, 210, 156, 0.2) 1.5px, transparent 4.2px),
            radial-gradient(circle at 20% 60%, rgba(255, 248, 168, 0.6) 1.5px, transparent 2.5px),
            radial-gradient(circle at 100% 40%, rgba(255, 210, 156, 0.6) 1px, transparent 1px),
            linear-gradient(180deg, #054e75 0%, #b35c3d 100%)
          `,
          backgroundSize: '90px 68px, 59px 39px, 63px 100px, 49px 60px, 100% 100%',
          backgroundPosition: `0 ${offset * speed}px, 35px ${offset * speed}px, 18px ${offset * speed}px, 0 ${offset * speed}px, 18px ${offset * speed}px, 0 0`,
          zIndex: -1
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
