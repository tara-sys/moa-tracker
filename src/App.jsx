import { useState } from 'react';
import { useAuth } from './firebase/AuthContext';
import { useStudentData } from './firebase/useStudentData';
import LoginPage from './components/LoginPage';
import LessonsView from './components/LessonsView';
import ReportView from './components/ReportView';
import ClassView from './components/ClassView';

const TABS = [
  { id: 'lessons', label: '📋 Lessons' },
  { id: 'report',  label: '📄 Report' },
  { id: 'class',   label: '👥 Class' },
];

export default function App() {
  const { user, logout } = useAuth();
  const { getStatus, setStatus, syncing } = useStudentData();
  const [activeTab, setActiveTab] = useState('lessons');

  if (!user) return <LoginPage />;

  return (
    <div className="app">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-title">
          <span className="topbar-school">Montessori of Acadiana</span>
          <span className="topbar-sub">Kindergarten Tracker</span>
        </div>
        <div className="topbar-right">
          {syncing && <span className="sync-dot" title="Syncing…" />}
          <button className="logout-btn" onClick={logout}>Sign out</button>
        </div>
      </header>

      {/* Tab bar */}
      <nav className="tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Views */}
      <main className="main-content">
        {activeTab === 'lessons' && <LessonsView getStatus={getStatus} setStatus={setStatus} />}
        {activeTab === 'report'  && <ReportView  getStatus={getStatus} />}
        {activeTab === 'class'   && <ClassView   getStatus={getStatus} setStatus={setStatus} />}
      </main>
    </div>
  );
}
