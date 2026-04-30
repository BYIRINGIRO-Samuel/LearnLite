import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';

const InnovativeLoader: React.FC = () => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-1000 ${isClosing ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      {/* Smaller Container */}
      <div className="relative w-60 h-60 flex items-center justify-center">
        
        {/* The Animated Trail & Pencil */}
        <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
          
          {/* Dynamic "Ink" Trail - Spaced out and starting from the tail */}
          {[...Array(25)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[#349156] rounded-full"
              style={{
                // Starting big (14px) and getting smaller
                width: `${Math.max(14 - i * 0.5, 2)}px`,
                height: `${Math.max(14 - i * 0.5, 2)}px`,
                top: '50%',
                left: '50%',
                // Increased spacing between dots (8 degrees)
                // Offset by a few degrees to align with the pencil tail
                transform: `rotate(${265 - i * 9}deg) translateY(-110px) translateX(-50%)`,
                opacity: Math.max(1 - i * 0.04, 0),
              }}
            />
          ))}

          {/* The Flying Pencil - Positioned so the rubber part leads the trail */}
          <div 
            className="absolute top-1/2 left-1/2"
            style={{ transform: `rotate(272deg) translateY(-110px) translateX(-50%) translateY(-50%)` }}
          >
            <div className="relative">
                {/* Pencil Body - Rotated so the Tail (Rubber) is at the trail's start */}
                {/* The tip points towards the center or outward, while the rubber is on the path */}
                <Pencil className="w-12 h-12 text-[#349156] rotate-[45deg]" />
                
                {/* Visual marker at the tail (rubber) where dots emerge */}
                <div className="absolute top-1 left-1 w-3 h-3 bg-[#349156]/20 rounded-full blur-sm" />
            </div>
          </div>
        </div>

        {/* Center Text - Refined Scale */}
        <div className="text-[#349156] font-black text-3xl tracking-[0.3em] uppercase opacity-30 select-none">
          LOADING
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default InnovativeLoader;
