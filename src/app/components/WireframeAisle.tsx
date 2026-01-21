'use client';

import React from 'react';

export default function WireframeAisle() {
    // Styles for the base cube/corridor
    const containerStyle: React.CSSProperties = {
        perspective: '1000px',
    };
    const sceneStyle: React.CSSProperties = {
        position: 'relative',
        width: '240px',
        height: '240px',
        transformStyle: 'preserve-3d',
        animation: 'floatRotate 15s infinite linear',
    };

    // Face Geometry: 240px box -> translate 120px from center
    const faceBase = "absolute inset-0 border-2 border-[--color-accent] bg-[--color-accent]/10 backdrop-blur-sm";

    return (
        <div className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-center justify-center" style={containerStyle}>
            {/* Animation Keyframes */}
            <style jsx global>{`
        @keyframes floatRotate {
          0% { transform: rotateX(-10deg) rotateY(0deg); }
          50% { transform: rotateX(10deg) rotateY(180deg); }
          100% { transform: rotateX(-10deg) rotateY(360deg); }
        }
      `}</style>

            <div style={sceneStyle}>

                {/* LEFT WALL */}
                <div className={faceBase} style={{ transform: 'rotateY(-90deg) translateZ(120px)' }}>
                    <div className="w-full h-full grid grid-rows-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-b border-[--color-accent]/40"></div>
                        ))}
                    </div>
                </div>

                {/* RIGHT WALL */}
                <div className={faceBase} style={{ transform: 'rotateY(90deg) translateZ(120px)' }}>
                    <div className="w-full h-full grid grid-rows-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-b border-[--color-accent]/40"></div>
                        ))}
                    </div>
                </div>

                {/* CEILING */}
                <div className={faceBase} style={{ transform: 'rotateX(90deg) translateZ(120px)', background: 'transparent' }}>
                    <div className="w-full h-full flex justify-around">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-px h-full bg-[--color-accent]/40"></div>
                        ))}
                    </div>
                </div>

                {/* FLOOR */}
                <div className={faceBase} style={{ transform: 'rotateX(-90deg) translateZ(120px)' }}>
                    <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="border border-[--color-accent]/20"></div>
                        ))}
                    </div>
                </div>

                {/* BACK WALL (Far end) */}
                <div className={faceBase} style={{ transform: 'rotateY(180deg) translateZ(120px)', opacity: 0.5 }}>
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[--color-accent]/60"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[--color-accent]/60"></div>
                </div>

            </div>
        </div>
    );
}
