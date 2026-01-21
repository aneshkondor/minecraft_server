import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronRight, CheckCircle, Circle } from 'lucide-react';
import { storyChapters } from '../data/storyProgression';

function StoryPage({ progress, updateProgress }) {
  const [activeChapter, setActiveChapter] = useState('chapter1');
  const currentChapter = storyChapters.find(ch => ch.id === activeChapter);

  const toggleQuest = (questTitle) => {
    const isCompleted = progress.completedQuests.includes(questTitle);
    const updatedQuests = isCompleted
      ? progress.completedQuests.filter(q => q !== questTitle)
      : [...progress.completedQuests, questTitle];

    updateProgress({ completedQuests: updatedQuests });
  };

  const isQuestCompleted = (questTitle) => {
    return progress.completedQuests.includes(questTitle);
  };

  return (
    <div className="story-page">
      {/* Story Header */}
      <div className="page-header">
        <h1>Lore & Story</h1>
        <p>The epic narrative from survivor to space emperor</p>
      </div>

      {/* Chapter Navigation */}
      <div className="story-navigation">
        {storyChapters.map((chapter, index) => {
          const isCurrent = chapter.id === activeChapter;

          return (
            <button
              key={chapter.id}
              className={`chapter-button ${isCurrent ? 'active' : ''}`}
              onClick={() => setActiveChapter(chapter.id)}
            >
              <span>{index + 1}</span>
              {chapter.title}
            </button>
          );
        })}
      </div>

      {/* Active Chapter Content */}
      {currentChapter && (
        <motion.div
          key={currentChapter.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="story-content"
        >
          <div className="chapter-info">
            <h2>{currentChapter.title}</h2>
            <div className="chapter-meta">
              <span className="chapter-phase">{currentChapter.phase.toUpperCase()} GAME</span>
              <span className="chapter-days">Days {currentChapter.days}</span>
            </div>
          </div>

          <div className="story-text">
            <p>{currentChapter.story}</p>
          </div>

          {currentChapter.keyEvents && currentChapter.keyEvents.length > 0 && (
            <div className="key-events">
              <h3>Key Events</h3>
              <ul>
                {currentChapter.keyEvents.map((event, idx) => (
                  <li key={idx}>{event}</li>
                ))}
              </ul>
            </div>
          )}

          {currentChapter.mainQuests && currentChapter.mainQuests.length > 0 && (
            <div className="quests-section">
              <h3>Important Tasks</h3>
              <div className="quest-list">
                {currentChapter.mainQuests.map((quest, idx) => {
                  const completed = isQuestCompleted(quest.title);
                  return (
                    <div
                      key={idx}
                      className={`quest-item ${completed ? 'completed' : ''}`}
                      onClick={() => toggleQuest(quest.title)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="quest-header">
                        {completed ? (
                          <CheckCircle size={24} color="#4caf50" />
                        ) : (
                          <Circle size={24} />
                        )}
                        <h4>{quest.title}</h4>
                      </div>
                      <p>{quest.description}</p>
                      {quest.rewards && (
                        <div className="quest-reward">
                          <strong>Outcome:</strong> {quest.rewards}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentChapter.discoveredMods && currentChapter.discoveredMods.length > 0 && (
            <div className="chapter-mods">
              <h3>Featured Mods in This Chapter</h3>
              <div className="mod-tags">
                {currentChapter.discoveredMods.map((mod, idx) => (
                  <span key={idx} className="mod-tag">{mod}</span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="chapter-navigation-btns">
            {storyChapters.findIndex(ch => ch.id === activeChapter) > 0 && (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const currentIndex = storyChapters.findIndex(ch => ch.id === activeChapter);
                  setActiveChapter(storyChapters[currentIndex - 1].id);
                }}
              >
                Previous Chapter
              </button>
            )}
            {storyChapters.findIndex(ch => ch.id === activeChapter) < storyChapters.length - 1 && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  const currentIndex = storyChapters.findIndex(ch => ch.id === activeChapter);
                  setActiveChapter(storyChapters[currentIndex + 1].id);
                }}
              >
                Next Chapter
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default StoryPage;
