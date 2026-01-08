import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
    const [weather, setWeather] = useState({ temp: 24, condition: 'Sunny', humidity: 45, city: 'Neo Tokyo' });

    // Simulate live data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setWeather(prev => ({
                ...prev,
                temp: prev.temp + (Math.random() > 0.5 ? 1 : -1),
                humidity: Math.min(100, Math.max(0, prev.humidity + (Math.random() > 0.5 ? 2 : -2)))
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--neon-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {weather.city}
            </h3>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '1rem 0', textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
                {weather.temp}°
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                <span>{weather.condition}</span>
                <span>•</span>
                <span>H: {weather.humidity}%</span>
            </div>
        </div>
    );
};

export default WeatherWidget;
