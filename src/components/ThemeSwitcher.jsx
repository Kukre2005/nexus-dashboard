import React from 'react';

const ThemeSwitcher = () => {
    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
    };

    return (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 100 }}>
            <button onClick={() => setTheme('')} style={{ ...btnStyle, background: '#00f3ff', boxShadow: '0 0 10px #00f3ff' }} title="Neon Blue" />
            <button onClick={() => setTheme('red')} style={{ ...btnStyle, background: '#ff0055', boxShadow: '0 0 10px #ff0055' }} title="Red Alert" />
            <button onClick={() => setTheme('matrix')} style={{ ...btnStyle, background: '#00ff00', boxShadow: '0 0 10px #00ff00' }} title="Matrix" />
        </div>
    );
};

const btnStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '2px solid rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    opacity: 0.8
};

export default ThemeSwitcher;
