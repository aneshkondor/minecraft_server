import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronRight, CheckCircle, Circle, Trophy, Calendar } from 'lucide-react';
import { storyChapters, progressionMilestones } from '../data/storyProgression';

function StoryPage({ progress, updateProgress }) {
  const [activeChapter, setActiveChapter] = useState(progress.currentChapter);
  const currentChapter = storyChapters.find(ch => ch.id === activeChapter);

  const completeQuest = (questTitle) => {
    const updatedQuests = [...progress.completedQuests, questTitle];
    updateProgress({ completedQuests: updatedQuests });
  };

  const advanceDay = () => {
    const newDay = progress.currentDay + 1;
    const newChapter = storyChapters.find(ch => {
      const [minDay, maxDay] = ch.days.split('-').map(d => parseInt(d) || 100);
      return newDay >= minDay && newDay <= maxDay;
    });

    updateProgress({
      currentDay: newDay,
      currentChapter: newChapter?.id || progress.currentChapter
    });
  };

  return (
    <div className="story-page">
      {/* Story Header */}
      <div className="story-header">
        <h1>Your Journey to the Stars</h1>
        <div className="story-stats">
          <div className="stat">
            <Calendar size={20} />
            <span>Day {progress.currentDay}</span>
          </div>
          <div className="stat">
            <Trophy size={20} />
            <span>{progress.completedMilestones.length}/{progressionMilestones.length} Milestones</span>
          </div>
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="chapter-nav">
        {storyChapters.map((chapter, index) => {
          const [minDay] = chapter.days.split('-').map(d => parseInt(d));
          const isUnlocked = progress.currentDay >= minDay;
          const isCurrent = chapter.id === activeChapter;

          return (
            <button
              key={chapter.id}
              className={`chapter-btn ${isCurrent ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`}
              onClick={() => isUnlocked && setActiveChapter(chapter.id)}
              disabled={!isUnlocked}
            >
              <span className="chapter-number">{index + 1}</span>
              <span className="chapter-title">{chapter.title}</span>
              {!isUnlocked && <span className="lock-icon">🔒</span>}
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
          className="chapter-content"
        >
          <div className="chapter-header">
            <h2>{currentChapter.title}</h2>
            <span className="chapter-days">Days {currentChapter.days}</span>
          </div>

          <div className="story-text">
            <p>{currentChapter.story}</p>
          </div>

          {/* Main Quests */}
          <div className="quests-section">
            <h3>Main Quests</h3>
            {currentChapter.mainQuests.map((quest, idx) => {
              const isCompleted = progress.completedQuests.includes(quest.title);

              return (
                <div key={idx} className="quest-card">
                  <div className="quest-header">
                    <h4>{quest.title}</h4>
                    {isCompleted ? (
                      <CheckCircle size={24} className="completed" />
                    ) : (
                      <Circle size={24} className="incomplete" />
                    )}
                  </div>
                  <p className="quest-description">{quest.description}</p>

                  <div className="quest-tasks">
                    {quest.tasks.map((task, taskIdx) => (
                      <div key={taskIdx} className="task">
                        <span className="task-bullet">•</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  <div className="quest-rewards">
                    <strong>Rewards:</strong>
                    <span>{quest.rewards.join(', ')}</span>
                  </div>

                  {!isCompleted && (
                    <button
                      className="btn btn-small"
                      onClick={() => completeQuest(quest.title)}
                    >
                      Mark Complete
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dangers & Tips */}
          {currentChapter.dangers && (
            <div className="dangers-section">
              <h3>⚠️ Dangers</h3>
              <ul>
                {currentChapter.dangers.map((danger, idx) => (
                  <li key={idx}>{danger}</li>
                ))}
              </ul>
            </div>
          )}

          {currentChapter.tips && (
            <div className="tips-section">
              <h3>💡 Tips</h3>
              <p>{currentChapter.tips}</p>
            </div>
          )}

          {/* Epilogue for final chapter */}
          {currentChapter.epilogue && (
            <div className="epilogue">
              <h3>The End... or The Beginning?</h3>
              <p>{currentChapter.epilogue}</p>
            </div>
          )}

          {/* Progress Button */}
          <div className="story-actions">
            <button className="btn btn-primary" onClick={advanceDay}>
              Advance to Day {progress.currentDay + 1}
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Milestones */}
      <div className="milestones-section">
        <h3>Progression Milestones</h3>
        <div className="milestones-grid">
          {progressionMilestones.map(milestone => {
            const isAchieved = progress.currentDay >= milestone.day;

            return (
              <div
                key={milestone.id}
                className={`milestone ${isAchieved ? 'achieved' : 'locked'}`}
              >
                <span className="milestone-icon">{milestone.icon}</span>
                <span className="milestone-name">{milestone.name}</span>
                <span className="milestone-day">Day {milestone.day}</span>
                <span className="milestone-desc">{milestone.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StoryPage;