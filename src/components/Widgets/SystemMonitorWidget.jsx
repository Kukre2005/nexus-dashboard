import React, { useState, useEffect } from 'react';

const SystemMonitorWidget = () => {
    const [stats, setStats] = useState({ cpu: 12, ram: 45, net: 20 });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats({
                cpu: Math.floor(Math.random() * 60) + 10,
                ram: Math.floor(Math.random() * 30) + 40,
                net: Math.floor(Math.random() * 80) + 10
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const Bar = ({ label, value, color }) => (
        <div style={{ marginBottom: '1rem', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.8rem' }}>
                <span>{label}</span>
                <span style={{ color }}>{value}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{
                    width: `${value}%`,
                    height: '100%',
                    background: color,
                    boxShadow: `0 0 10px ${color}`,
                    transition: 'width 0.5s ease'
                }} />
            </div>
        </div>
    );

    return (
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginTop: 0, color: 'var(--neon-green)', letterSpacing: '1px' }}>SYSTEM STATUS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <Bar label="CPU LOAD" value={stats.cpu} color="var(--neon-blue)" />
                <Bar label="MEMORY" value={stats.ram} color="var(--neon-purple)" />
                <Bar label="NETWORK" value={stats.net} color="var(--neon-green)" />
            </div>
        </div>
    );
};

export default SystemMonitorWidget;
