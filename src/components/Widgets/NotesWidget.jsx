import React, { useState } from 'react';

const NotesWidget = () => {
    const [note, setNote] = useState('// Captain\'s Log\nStardate 47634.44\nSystem nominal.');

    return (
        <div className="glass-card" style={{ padding: '1.5rem', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginTop: 0, color: 'var(--neon-blue)', letterSpacing: '1px' }}>DATA LOG</h3>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{
                    flex: 1,
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    resize: 'none',
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    outline: 'none',
                    lineHeight: '1.6'
                }}
                spellCheck="false"
            />
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.5rem', alignSelf: 'flex-end' }}>
                {note.length} CHARS
            </div>
        </div>
    );
};

export default NotesWidget;
