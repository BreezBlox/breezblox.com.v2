'use client';

import React from 'react';

export default function WireframeAisle() {
    return (
        <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center perspective-[1000px]">

            {/* 
        This is a pure CSS 3D scene representing a containment aisle.
        It consists of a 'corridor' that slowly floats.
      */}

            <div className="relative w-64 h-64 transform-style-3d animate-float-rotate">

                {/* === LEFT RACKS === */}
                <div className="absolute inset-0 border border-[--color-accent] bg-[--color-accent]/5 -translate-x-32 translate-z-0 rotate-y-90">
                    {/* Grid lines to look like racking */}
                    <div className="w-full h-full grid grid-rows-6 gap-0">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-b border-[--color-accent]/30 w-full h-full"></div>
                        ))}
                    </div>
                </div>

                {/* === RIGHT RACKS === */}
                <div className="absolute inset-0 border border-[--color-accent] bg-[--color-accent]/5 translate-x-32 translate-z-0 rotate-y-90">
                    <div className="w-full h-full grid grid-rows-6 gap-0">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-b border-[--color-accent]/30 w-full h-full"></div>
                        ))}
                    </div>
                </div>

                {/* === CEILING CONTAINMENT === */}
                <div className="absolute inset-0 border border-[--color-accent] bg-[--color-accent]/10 -translate-y-32 rotate-x-90">
                    {/* Cross bracing look */}
                    <div className="w-full h-full flex justify-around">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-full w-px bg-[--color-accent]/30"></div>
                        ))}
                    </div>
                </div>

                {/* === FLOOR GRID === */}
                <div className="absolute inset-0 border border-[--color-accent] bg-[--color-accent]/5 translate-y-32 rotate-x-90">
                    <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                        {/* Floor tiles */}
                    </div>
                </div>

                {/* === FAR END (DOORS) === */}
                <div className="absolute inset-0 border border-[--color-accent] bg-[--color-accent]/20 -translate-z-32">
                    <div className="w-full h-full border-r border-[--color-accent]/50 w-1/2 absolute left-0"></div>
                    <div className="w-full h-full border-l border-[--color-accent]/50 w-1/2 absolute right-0"></div>
                    {/* Door handles */}
                    <div className="absolute top-1/2 left-[45%] h-8 w-1 bg-[--color-accent]"></div>
                    <div className="absolute top-1/2 right-[45%] h-8 w-1 bg-[--color-accent]"></div>
                </div>

            </div>

            <style jsx>{`
        .perspective-\\[1000px\\] {
          perspective: 800px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        /* Positions for the cube faces */
        .rotate-y-90 { transform: rotateY(90deg) translateZ(128px); } /* Right Wall */
        .-rotate-y-90 { transform: rotateY(-90deg) translateZ(128px); } /* Left Wall - wait, using translate-x approach above */
        
        /* Let's use strict transforms matching the logic above */
        
        /* Animation */
        @keyframes float-rotate {
          0% { transform: rotateX(-5deg) rotateY(-20deg); }
          50% { transform: rotateX(5deg) rotateY(20deg); }
          100% { transform: rotateX(-5deg) rotateY(-20deg); }
        }
        .animate-float-rotate {
          animation: float-rotate 12s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
