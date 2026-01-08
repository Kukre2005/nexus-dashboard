import React from 'react';
import DashboardLayout from './components/Layout/DashboardLayout';
import WeatherWidget from './components/Widgets/WeatherWidget';
import TaskWidget from './components/Widgets/TaskWidget';
import NotesWidget from './components/Widgets/NotesWidget';
import ClockWidget from './components/Widgets/ClockWidget';
import SystemMonitorWidget from './components/Widgets/SystemMonitorWidget';
import MusicPlayerWidget from './components/Widgets/MusicPlayerWidget';
import NewsTickerWidget from './components/Widgets/NewsTickerWidget';
import HologramProfileWidget from './components/Widgets/HologramProfileWidget';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <h1 style={{
        fontFamily: '"Orbitron", sans-serif',
        fontSize: '3rem',
        marginBottom: '2rem',
        background: 'linear-gradient(to right, var(--neon-blue), var(--neon-purple))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 0 10px rgba(188, 19, 254, 0.5))'
      }}>
        NEXUS DASHBOARD
      </h1>
      <DashboardLayout>
        <HologramProfileWidget />
        <ClockWidget />
        <WeatherWidget />
        <SystemMonitorWidget />
        <TaskWidget />
        <MusicPlayerWidget />
        <NotesWidget />
        <NewsTickerWidget />
      </DashboardLayout>
    </div>
  );
}

export default App;
