import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Sword, TreePine, Factory, ChevronRight, Star, Book, Package, ChartBar, FlaskConical } from 'lucide-react';
import { getCurrentChapter, getNextMilestone } from '../data/storyProgression';

function HomePage({ progress }) {
  const currentChapter = getCurrentChapter(progress.currentDay);
  const nextMilestone = getNextMilestone(progress.currentDay);

  const phases = [
    {
      id: 'early',
      title: 'Early Game',
      days: '1-10',
      icon: <TreePine size={32} />,
      color: '#4caf50',
      description: 'Survive dragons, find waystones, establish your base'
    },
    {
      id: 'mid',
      title: 'Mid Game',
      days: '10-30',
      icon: <Sword size={32} />,
      color: '#ff9800',
      description: 'Slay dragons, master technology, build your power'
    },
    {
      id: 'late',
      title: 'Late Game',
      days: '30-60',
      icon: <Factory size={32} />,
      color: '#7b2cbf',
      description: 'Build airships, produce fuel, prepare for space'
    },
    {
      id: 'space',
      title: 'Space Age',
      days: '60+',
      icon: <Rocket size={32} />,
      color: '#00d4ff',
      description: 'Conquer the cosmos, from Moon to asteroid belt'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>From Survivor to Space Emperor</h1>
          <p className="hero-subtitle">
            Your journey through 50+ mods, from hiding underground to conquering the stars
          </p>
        </motion.div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">50+</span>
            <span className="stat-label">Mods</span>
          </div>
          <div className="stat">
            <div className="stat-value">14</div>
            <div className="stat-label">Story Chapters</div>
          </div>
          <div className="stat">
            <div className="stat-value">7</div>
            <div className="stat-label">Planets</div>
          </div>
          <div className="stat">
            <div className="stat-value">∞</div>
            <div className="stat-label">Possibilities</div>
          </div>
        </div>

        {/* Current Progress */}
        <div className="current-progress">
          <h3>Your Current Chapter</h3>
          <div className="chapter-card">
            <h4>{currentChapter.title}</h4>
            <p>{currentChapter.story.substring(0, 150)}...</p>
            <Link to="/story" className="btn btn-primary">
              Continue Story
              <ChevronRight size={20} />
            </Link>
          </div>

          {nextMilestone && (
            <div className="next-milestone">
              <span>Next Milestone:</span>
              <strong>{nextMilestone.name}</strong>
              <span className="milestone-day">Day {nextMilestone.day}</span>
            </div>
          )}
        </div>
      </section>

      {/* Progression Path */}
      <section className="progression-path">
        <h2>Your Path to the Stars</h2>
        <div className="phases">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className="phase-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ borderColor: phase.color }}
            >
              <div className="phase-icon" style={{ color: phase.color }}>
                {phase.icon}
              </div>
              <h3>{phase.title}</h3>
              <span className="phase-days">{phase.days}</span>
              <p>{phase.description}</p>
              <Link
                to={`/guides/${phase.id}`}
                className="btn btn-secondary"
                style={{ color: phase.color, borderColor: phase.color }}
              >
                View Guide
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Access</h2>
        <div className="action-grid">
          <Link to="/story" className="action-card">
            <Book size={24} />
            <span>Story Mode</span>
            <p>Follow the narrative from caves to cosmos</p>
          </Link>
          <Link to="/mods" className="action-card">
            <Package size={24} />
            <span>Browse Mods</span>
            <p>Explore all 50+ mods in detail</p>
          </Link>
          <Link to="/progression" className="action-card">
            <ChartBar size={24} />
            <span>Track Progress</span>
            <p>Check your milestones and quests</p>
          </Link>
          <Link to="/recipes" className="action-card">
            <FlaskConical size={24} />
            <span>Recipes</span>
            <p>Essential crafting recipes</p>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="features">
        <h2>What Awaits You</h2>
        <div className="feature-list">
          <div className="feature">
            <Star size={20} />
            <span>Dragons to conquer and tame</span>
          </div>
          <div className="feature">
            <Star size={20} />
            <span>200+ new biomes to explore</span>
          </div>
          <div className="feature">
            <Star size={20} />
            <span>Modern weapons and technology</span>
          </div>
          <div className="feature">
            <Star size={20} />
            <span>Physics-based airships</span>
          </div>
          <div className="feature">
            <Star size={20} />
            <span>7 planets and space stations</span>
          </div>
          <div className="feature">
            <Star size={20} />
            <span>Automation and digital storage</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Start as a survivor, become a space emperor</p>
        <div className="cta-buttons">
          <Link to="/story" className="btn btn-primary btn-large">
            Start Your Story
            <Rocket size={24} />
          </Link>
          <Link to={`/guides/early`} className="btn btn-secondary btn-large">
            Survival Guide
            <TreePine size={24} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;