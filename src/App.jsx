import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ModsPage from './pages/ModsPage';
import GuidesPage from './pages/GuidesPage';
import RecipesPage from './pages/RecipesPage';
import './App.css';

function App() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('wikiProgress');
    return saved ? JSON.parse(saved) : {
      completedQuests: [],
      bookmarkedMods: []
    };
  });

  useEffect(() => {
    localStorage.setItem('wikiProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (updates) => {
    setProgress(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage progress={progress} updateProgress={updateProgress} />} />
            <Route path="/mods" element={<ModsPage />} />
            <Route path="/guides/:phase" element={<GuidesPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;