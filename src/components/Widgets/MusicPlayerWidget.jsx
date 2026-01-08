import React, { useState } from 'react';

const MusicPlayerWidget = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const bars = Array.from({ length: 12 }).map((_, i) => ({
        delay: Math.random() * 0.5,
        height: Math.random() * 100
    }));

    return (
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#ff0055', letterSpacing: '2px', fontSize: '0.9rem' }}>AUDIO PLAYER</h3>

            {/* Visualizer */}
            <div style={{ display: 'flex', gap: '4px', height: '60px', alignItems: 'flex-end', marginBottom: '1.5rem', width: '100%', justifyContent: 'center' }}>
                {bars.map((bar, i) => (
                    <div key={i} style={{
                        width: '8px',
                        backgroundColor: isPlaying ? 'var(--neon-blue)' : 'rgba(255,255,255,0.1)',
                        height: isPlaying ? '100%' : '5px',
                        animation: isPlaying ? `bounce 0.8s infinite ${bar.delay}s ease-in-out alternate` : 'none',
                        borderRadius: '4px',
                        transition: 'height 0.3s'
                    }} />
                ))}
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Cyberpunk Vibes</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Neon Nights Vol. 4</div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>⏮</button>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'var(--neon-blue)',
                        color: 'black',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        boxShadow: `0 0 15px var(--neon-blue)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>⏭</button>
            </div>
        </div>
    );
};

export default MusicPlayerWidget;
