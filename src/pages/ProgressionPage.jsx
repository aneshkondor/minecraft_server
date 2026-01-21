import { ChartBar, Trophy, Target, CheckCircle, Circle } from 'lucide-react';
import { progressionMilestones } from '../data/storyProgression';

function ProgressionPage({ progress, updateProgress }) {
  const phaseProgress = {
    early: progress.currentDay <= 10 ? (progress.currentDay / 10) * 100 : 100,
    mid: progress.currentDay > 10 && progress.currentDay <= 30 ? ((progress.currentDay - 10) / 20) * 100 : progress.currentDay > 30 ? 100 : 0,
    late: progress.currentDay > 30 && progress.currentDay <= 60 ? ((progress.currentDay - 30) / 30) * 100 : progress.currentDay > 60 ? 100 : 0,
    space: progress.currentDay > 60 ? ((progress.currentDay - 60) / 40) * 100 : 0
  };

  const achievedMilestones = progressionMilestones.filter(m => progress.currentDay >= m.day);
  const nextMilestone = progressionMilestones.find(m => progress.currentDay < m.day);

  const jumpToDay = (day) => {
    updateProgress({ currentDay: day });
  };

  return (
    <div className="progression-page">
      <div className="page-header">
        <h1>Your Progression</h1>
        <p>Track your journey from survivor to space emperor</p>
      </div>

      {/* Overall Progress */}
      <div className="overall-progress">
        <div className="progress-header">
          <h2>Overall Journey</h2>
          <span className="current-day">Day {progress.currentDay}</span>
        </div>

        <div className="progress-bar-total">
          <div
            className="progress-fill"
            style={{ width: `${Math.min(progress.currentDay, 100)}%` }}
          />
          <div className="progress-markers">
            <span className="marker" style={{ left: '10%' }}>Day 10</span>
            <span className="marker" style={{ left: '30%' }}>Day 30</span>
            <span className="marker" style={{ left: '60%' }}>Day 60</span>
            <span className="marker" style={{ left: '100%' }}>Day 100</span>
          </div>
        </div>
      </div>

      {/* Phase Progress */}
      <div className="phase-progress">
        <h2>Phase Completion</h2>
        <div className="phases-grid">
          {[
            { id: 'early', name: 'Early Game', color: '#4caf50', days: '1-10' },
            { id: 'mid', name: 'Mid Game', color: '#ff9800', days: '10-30' },
            { id: 'late', name: 'Late Game', color: '#7b2cbf', days: '30-60' },
            { id: 'space', name: 'Space Age', color: '#00d4ff', days: '60-100' }
          ].map(phase => (
            <div key={phase.id} className="phase-progress-card">
              <div className="phase-header">
                <h3>{phase.name}</h3>
                <span className="phase-days">{phase.days}</span>
              </div>
              <div className="phase-bar">
                <div
                  className="phase-fill"
                  style={{
                    width: `${phaseProgress[phase.id]}%`,
                    background: phase.color
                  }}
                />
              </div>
              <div className="phase-percentage" style={{ color: phase.color }}>
                {Math.round(phaseProgress[phase.id])}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="milestones">
        <h2>Milestones</h2>
        <div className="milestones-timeline">
          {progressionMilestones.map(milestone => {
            const isAchieved = achievedMilestones.includes(milestone);

            return (
              <div
                key={milestone.id}
                className={`milestone-item ${isAchieved ? 'achieved' : 'locked'}`}
              >
                <div className="milestone-marker">
                  {isAchieved ? <CheckCircle size={24} /> : <Circle size={24} />}
                </div>
                <div className="milestone-content">
                  <div className="milestone-header">
                    <span className="milestone-icon">{milestone.icon}</span>
                    <h4>{milestone.name}</h4>
                    <span className="milestone-day">Day {milestone.day}</span>
                  </div>
                  <p>{milestone.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {nextMilestone && (
          <div className="next-milestone-card">
            <h3>Next Milestone</h3>
            <div className="milestone-preview">
              <span className="preview-icon">{nextMilestone.icon}</span>
              <div>
                <h4>{nextMilestone.name}</h4>
                <p>{nextMilestone.description}</p>
                <span className="days-until">
                  {nextMilestone.day - progress.currentDay} days away
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Completed Quests */}
      <div className="completed-quests">
        <h2>Completed Quests</h2>
        {progress.completedQuests.length > 0 ? (
          <div className="quests-list">
            {progress.completedQuests.map((quest, idx) => (
              <div key={idx} className="quest-item">
                <Trophy size={16} />
                <span>{quest}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-quests">No quests completed yet. Start your story!</p>
        )}
      </div>

      {/* Quick Navigation */}
      <div className="quick-nav">
        <h2>Quick Time Travel</h2>
        <p>Jump to specific days for testing or exploration</p>
        <div className="day-buttons">
          {[1, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(day => (
            <button
              key={day}
              className="day-btn"
              onClick={() => jumpToDay(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="statistics">
        <h2>Your Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <ChartBar size={24} />
            <div className="stat-value">{progress.currentDay}</div>
            <div className="stat-label">Days Survived</div>
          </div>
          <div className="stat-card">
            <Trophy size={24} />
            <div className="stat-value">{achievedMilestones.length}</div>
            <div className="stat-label">Milestones</div>
          </div>
          <div className="stat-card">
            <Target size={24} />
            <div className="stat-value">{progress.completedQuests.length}</div>
            <div className="stat-label">Quests Done</div>
          </div>
          <div className="stat-card">
            <CheckCircle size={24} />
            <div className="stat-value">{Math.round(progress.currentDay)}%</div>
            <div className="stat-label">Total Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressionPage;