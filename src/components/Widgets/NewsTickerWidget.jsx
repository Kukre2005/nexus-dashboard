import React from 'react';

const NewsTickerWidget = () => {
    const news = [
        "SYSTEM ALERT: Meteor shower approaching Sector 7.",
        "MARKET UPDATE: Crypto-Credits up by 400%.",
        "REMINDER: Maintain fusion core stability at 98%.",
        "NEW MESSAGE: Interstellar comms link established.",
    ];

    return (
        <div className="glass-card" style={{
            gridColumn: '1 / -1',
            padding: '1rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            marginBottom: '0'
        }}>
            <div style={{
                display: 'inline-block',
                animation: 'scroll-left 20s linear infinite',
                paddingLeft: '100%',
                color: 'var(--neon-green)',
                fontWeight: 'bold',
                letterSpacing: '1px',
                width: '100%' // Ensure it takes width for animation context if needed, though inline-block usually suffices
            }}>
                {news.join('  ///  ')}
            </div>
        </div>
    );
};

export default NewsTickerWidget;
