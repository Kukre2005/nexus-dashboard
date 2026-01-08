import React, { useState, useRef } from 'react';

const HologramProfileWidget = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className="glass-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.1s ease-out' // Fast transition for smooth movement, slight lag
            }}
        >
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))',
                marginBottom: '1rem',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Hologram scanlines effect */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 3px)',
                    pointerEvents: 'none'
                }} />
                <span style={{ fontSize: '3rem' }}>👾</span>
            </div>
            <h3 style={{ margin: 0, color: 'white', textShadow: '0 0 10px var(--neon-blue)' }}>COMMANDER</h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--neon-green)', marginTop: '5px' }}>LEVEL 99 ACCESS</div>
        </div>
    );
};

export default HologramProfileWidget;
