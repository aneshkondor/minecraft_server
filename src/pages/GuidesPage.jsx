import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Map, AlertTriangle, CheckCircle, Lightbulb, ChevronRight } from 'lucide-react';
import { phaseGuides } from '../data/guidesData';

function GuidesPage({ progress }) {
  const { phase } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const guide = phaseGuides[phase] || phaseGuides.early;

  return (
    <div className="guides-page">
      {/* Guide Header */}
      <div className="guide-header" style={{ borderColor: guide.color }}>
        <div className="guide-icon" style={{ color: guide.color }}>
          {guide.icon}
        </div>
        <div>
          <h1>{guide.title}</h1>
          <p className="guide-subtitle">{guide.subtitle}</p>
          <p className="guide-description">{guide.description}</p>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="phase-nav">
        {['early', 'mid', 'late', 'space'].map(p => (
          <Link
            key={p}
            to={`/guides/${p}`}
            className={`phase-link ${p === phase ? 'active' : ''}`}
            style={{
              borderColor: p === phase ? phaseGuides[p].color : 'transparent',
              color: p === phase ? phaseGuides[p].color : undefined
            }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)} Game
            <ChevronRight size={16} />
          </Link>
        ))}
      </div>

      {/* Section Tabs */}
      <div className="section-tabs">
        {guide.sections.map((section, idx) => (
          <button
            key={idx}
            className={`section-tab ${activeSection === idx ? 'active' : ''}`}
            onClick={() => setActiveSection(idx)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      {guide.sections[activeSection] && (
        <div className="section-content">
          <h2>{guide.sections[activeSection].title}</h2>

          <div className="content-body">
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{
                __html: guide.sections[activeSection].content.replace(/\n/g, '<br>')
              }}
            />
          </div>

          {guide.sections[activeSection].tips && (
            <div className="tips-box">
              <h3>
                <Lightbulb size={20} />
                Tips
              </h3>
              <ul>
                {guide.sections[activeSection].tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {guide.sections[activeSection].modIntegration && (
            <div className="mod-integration">
              <h3>Key Mods Used:</h3>
              <div className="mod-tags">
                {guide.sections[activeSection].modIntegration.map(mod => (
                  <Link key={mod} to="/mods" className="mod-tag">
                    {mod}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {guide.sections[activeSection].dangers && (
            <div className="dangers-list">
              <h3>
                <AlertTriangle size={20} />
                Dangers to Avoid
              </h3>
              <ul>
                {guide.sections[activeSection].dangers.map((danger, idx) => (
                  <li key={idx}>{danger}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Additional Guide Elements */}
      {guide.dangerZones && (
        <div className="danger-zones">
          <h3>Danger Zone Analysis</h3>
          <div className="zones-grid">
            {guide.dangerZones.map((zone, idx) => (
              <div key={idx} className="danger-zone">
                <div className="zone-header">
                  <span>{zone.name}</span>
                  <span className={`threat threat-${zone.threat.toLowerCase()}`}>
                    {zone.threat}
                  </span>
                </div>
                <p className="zone-reason">{zone.reason}</p>
                <p className="zone-strategy">
                  <strong>Strategy:</strong> {zone.strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {guide.powerSpikes && (
        <div className="power-spikes">
          <h3>Power Progression Spikes</h3>
          {guide.powerSpikes.map((spike, idx) => (
            <div key={idx} className="power-spike">
              <h4>{spike.name}</h4>
              <p><strong>Impact:</strong> {spike.impact}</p>
              <p><strong>Unlocks:</strong> {spike.unlocks.join(', ')}</p>
              <p><strong>Next Goal:</strong> {spike.nextGoal}</p>
            </div>
          ))}
        </div>
      )}

      {guide.megaProjects && (
        <div className="mega-projects">
          <h3>Mega Project Ideas</h3>
          {guide.megaProjects.map((project, idx) => (
            <div key={idx} className="mega-project">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p className="project-benefits">
                <strong>Benefits:</strong> {project.benefits}
              </p>
            </div>
          ))}
        </div>
      )}

      {guide.planetData && (
        <div className="planet-data">
          <h3>Planet Information</h3>
          <div className="planets-grid">
            {guide.planetData.map((planet, idx) => (
              <div key={idx} className="planet-card">
                <h4>{planet.name}</h4>
                <div className="planet-stats">
                  <div><strong>Gravity:</strong> {planet.gravity}</div>
                  <div><strong>Atmosphere:</strong> {planet.atmosphere}</div>
                  <div><strong>Temperature:</strong> {planet.temperature}</div>
                  <div><strong>Resources:</strong> {planet.resources.join(', ')}</div>
                  <div className={`difficulty difficulty-${planet.difficulty.toLowerCase()}`}>
                    {planet.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {guide.checklistSummary && (
        <div className="checklist-summary">
          <h3>
            <CheckCircle size={20} />
            Phase Completion Checklist
          </h3>
          <ul className="checklist">
            {guide.checklistSummary.map((item, idx) => (
              <li key={idx}>
                <input type="checkbox" id={`check-${idx}`} />
                <label htmlFor={`check-${idx}`}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GuidesPage;