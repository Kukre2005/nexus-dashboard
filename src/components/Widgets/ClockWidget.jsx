import React, { useState, useEffect } from 'react';

const ClockWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (i) => (i < 10 ? `0${i}` : i);

    return (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ margin: 0, color: 'rgba(255,255,255,0.5)', letterSpacing: '4px', fontSize: '0.8rem' }}>SYSTEM TIME</h3>
            <div className="glitch-text" style={{
                fontFamily: '"Orbitron", sans-serif',
                fontSize: '3.5rem',
                fontWeight: 'bold',
                margin: '0.5rem 0',
                cursor: 'default'
            }}>
                {formatTime(time.getHours())}:{formatTime(time.getMinutes())}
                <span style={{ fontSize: '1.5rem', color: 'var(--neon-green)', marginLeft: '5px' }}>
                    {formatTime(time.getSeconds())}
                </span>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--neon-blue)' }}>
                {time.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
            </div>
        </div>
    );
};

export default ClockWidget;
