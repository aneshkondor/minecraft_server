import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ModsPage from './pages/ModsPage';
import GuidesPage from './pages/GuidesPage';
import ProgressionPage from './pages/ProgressionPage';
import RecipesPage from './pages/RecipesPage';
import './App.css';

function App() {
  const [playerProgress, setPlayerProgress] = useState(() => {
    const saved = localStorage.getItem('playerProgress');
    return saved ? JSON.parse(saved) : {
      currentDay: 1,
      currentChapter: 'chapter1',
      completedMilestones: [],
      unlockedMods: [],
      completedQuests: []
    };
  });

  useEffect(() => {
    localStorage.setItem('playerProgress', JSON.stringify(playerProgress));
  }, [playerProgress]);

  const updateProgress = (updates) => {
    setPlayerProgress(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <Router>
      <div className="app">
        <Navigation progress={playerProgress} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage progress={playerProgress} />} />
            <Route path="/story" element={<StoryPage progress={playerProgress} updateProgress={updateProgress} />} />
            <Route path="/mods" element={<ModsPage progress={playerProgress} />} />
            <Route path="/guides/:phase" element={<GuidesPage progress={playerProgress} />} />
            <Route path="/progression" element={<ProgressionPage progress={playerProgress} updateProgress={updateProgress} />} />
            <Route path="/recipes" element={<RecipesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;