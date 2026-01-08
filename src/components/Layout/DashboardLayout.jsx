import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            padding: '1rem',
            width: '100%'
        }}>
            {children}
        </div>
    );
};

export default DashboardLayout;
