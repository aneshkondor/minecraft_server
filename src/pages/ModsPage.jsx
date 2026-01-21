import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Filter, Star, Search } from 'lucide-react';
import { modsData, categories, phases } from '../data/completeModsData';

function ModsPage({ progress }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEssential, setShowEssential] = useState(false);

  const filteredMods = modsData.filter(mod => {
    if (selectedCategory !== 'all' && mod.category !== selectedCategory) return false;
    if (selectedPhase !== 'all' && mod.phase !== selectedPhase) return false;
    if (showEssential && mod.priority !== 'essential') return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return mod.name.toLowerCase().includes(query) ||
             mod.description.toLowerCase().includes(query) ||
             (mod.features && mod.features.some(f => f.toLowerCase().includes(query)));
    }
    return true;
  });

  return (
    <div className="mods-page">
      <div className="page-header">
        <h1>Complete Mod Database</h1>
        <p>All {modsData.length} mods documented with full details</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search mods..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedPhase}
            onChange={(e) => setSelectedPhase(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Phases</option>
            {phases.map(phase => (
              <option key={phase.id} value={phase.id}>{phase.name}</option>
            ))}
          </select>

          <button
            className={`filter-btn ${showEssential ? 'active' : ''}`}
            onClick={() => setShowEssential(!showEssential)}
          >
            <Star size={16} />
            Essential Only
          </button>
        </div>

        <div className="filter-results">
          Showing {filteredMods.length} of {modsData.length} mods
        </div>
      </div>

      {/* Mods Grid */}
      <div className="mods-grid">
        {filteredMods.map((mod, index) => (
          <motion.div
            key={mod.id}
            className="mod-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
          >
            <div className="mod-header">
              <div className="mod-icon">{mod.icon}</div>
              <div>
                <h3>{mod.name}</h3>
                <div className="mod-tags">
                  <span className="tag category">{mod.category}</span>
                  <span className={`tag phase phase-${mod.phase}`}>
                    {phases.find(p => p.id === mod.phase)?.name}
                  </span>
                  {mod.priority === 'essential' && (
                    <span className="tag essential">
                      <Star size={12} />
                      Essential
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="mod-description">{mod.description}</p>

            {mod.storyRole && (
              <div className="mod-story">
                <strong>Story Role:</strong> {mod.storyRole}
              </div>
            )}

            <div className="mod-features">
              <strong>Features:</strong>
              <ul>
                {mod.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
                {mod.features.length > 4 && (
                  <li className="more">+{mod.features.length - 4} more...</li>
                )}
              </ul>
            </div>

            {mod.progression && (
              <div className="mod-progression">
                <div className="progression-item">
                  <strong>Unlocks Day:</strong> {mod.progression.unlockDay}
                </div>
                {mod.progression.requirements && (
                  <div className="progression-item">
                    <strong>Requires:</strong> {mod.progression.requirements.join(', ')}
                  </div>
                )}
              </div>
            )}

            {mod.tips && (
              <div className="mod-tips">
                💡 {mod.tips}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ModsPage;