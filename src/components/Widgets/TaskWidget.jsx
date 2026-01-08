import React, { useState } from 'react';

const TaskWidget = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Initialize System', completed: true },
        { id: 2, text: 'Review mission parameters', completed: false },
        { id: 3, text: 'Calibrate sensors', completed: false }
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'left', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginTop: 0, color: 'var(--neon-purple)', letterSpacing: '1px' }}>MISSIONS</h3>

            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', paddingRight: '0.5rem' }}>
                {tasks.map(task => (
                    <div key={task.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        opacity: task.completed ? 0.5 : 1,
                        transition: 'opacity 0.2s'
                    }}>
                        <div
                            onClick={() => toggleTask(task.id)}
                            style={{
                                width: '18px',
                                height: '18px',
                                border: `2px solid ${task.completed ? 'var(--neon-green)' : 'rgba(255,255,255,0.3)'}`,
                                borderRadius: '4px',
                                marginRight: '10px',
                                cursor: 'pointer',
                                background: task.completed ? 'var(--neon-green)' : 'transparent',
                                boxShadow: task.completed ? '0 0 10px var(--neon-green)' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {task.completed && <span style={{ color: '#000', fontSize: '12px', fontWeight: 'bold' }}>✓</span>}
                        </div>
                        <span style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }} onClick={() => toggleTask(task.id)}>
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{
                                marginLeft: 'auto',
                                background: 'transparent',
                                border: 'none',
                                color: 'rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                            }}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <form onSubmit={addTask} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Objective..."
                    style={{
                        flex: 1,
                        background: 'rgba(0,0,0,0.2)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'inherit'
                    }}
                />
                <button type="submit" style={{
                    background: 'var(--neon-purple)',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    color: 'white',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(188, 19, 254, 0.3)'
                }}>+</button>
            </form>
        </div>
    );
};

export default TaskWidget;
