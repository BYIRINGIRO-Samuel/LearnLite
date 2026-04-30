import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const InnovativeLoader: React.FC = () => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 4000); // Show for 4 seconds to appreciate the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#349156] transition-all duration-1000 ${isClosing ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* The Path Bubbles/Rings */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              transform: `rotate(${i * 18}deg) translateY(-100px)`,
            }}
          />
        ))}

        {/* The Swimming "Graduation Cap" & Bubble Trail */}
        <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
          {/* Trail Particles */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white/40 rounded-full animate-pulse"
              style={{
                width: `${4 + i}px`,
                height: `${4 + i}px`,
                top: '50%',
                left: '50%',
                transform: `rotate(${270 - i * 15}deg) translateY(-100px) translateX(-50%)`,
                opacity: 1 - i * 0.08
              }}
            />
          ))}

          {/* The Moving Icon */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `rotate(270deg) translateY(-100px) rotate(-90deg)` }}
          >
            <div className="animate-bounce" style={{ animationDuration: '2s' }}>
              <GraduationCap className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-white/80 font-medium text-2xl tracking-widest animate-pulse">
          loading...
        </div>
      </div>

      {/* Background Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50px) translateX(20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InnovativeLoader;
