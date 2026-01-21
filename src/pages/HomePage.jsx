import { Link } from 'react-router-dom';
import { Rocket, Sword, TreePine, Factory, Package, Book, Map, FlaskConical } from 'lucide-react';

function HomePage() {
  return (
    <div className="wiki-home">
      <div className="container">
        {/* Wiki Header */}
        <div className="wiki-header">
          <h1>Minecraft Space Modpack Wiki</h1>
          <p className="wiki-description">
            Documentation for a 50+ mod Forge 1.20.1 modpack featuring progression from survival to space exploration
          </p>
        </div>

        {/* Quick Stats */}
        <div className="wiki-stats">
          <div className="stat-item">
            <strong>50+</strong>
            <span>Mods</span>
          </div>
          <div className="stat-item">
            <strong>14</strong>
            <span>Story Chapters</span>
          </div>
          <div className="stat-item">
            <strong>7</strong>
            <span>Planets</span>
          </div>
          <div className="stat-item">
            <strong>4</strong>
            <span>Game Phases</span>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="wiki-content">
          {/* Game Phases */}
          <section className="wiki-section">
            <h2>Game Phases</h2>
            <div className="phase-grid">
              <Link to="/guides/early" className="phase-item">
                <TreePine size={28} />
                <div>
                  <h3>Early Game</h3>
                  <span>Days 1-10</span>
                  <p>Survival basics, dragon encounters, waystone travel</p>
                </div>
              </Link>
              <Link to="/guides/mid" className="phase-item">
                <Sword size={28} />
                <div>
                  <h3>Mid Game</h3>
                  <span>Days 10-30</span>
                  <p>Dragon combat, TACZ weapons, storage systems</p>
                </div>
              </Link>
              <Link to="/guides/late" className="phase-item">
                <Factory size={28} />
                <div>
                  <h3>Late Game</h3>
                  <span>Days 30-60</span>
                  <p>Airship construction, fuel production, automation</p>
                </div>
              </Link>
              <Link to="/guides/space" className="phase-item">
                <Rocket size={28} />
                <div>
                  <h3>Space Age</h3>
                  <span>Days 60+</span>
                  <p>Rocket building, planetary exploration, space stations</p>
                </div>
              </Link>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="wiki-section">
            <h2>Contents</h2>
            <div className="contents-grid">
              <div className="content-box">
                <h3><Package size={20} /> Mod Database</h3>
                <ul>
                  <li><Link to="/mods">All Mods (50+)</Link></li>
                  <li><Link to="/mods">Space & Dimensions</Link></li>
                  <li><Link to="/mods">World Generation</Link></li>
                  <li><Link to="/mods">Bosses & Combat</Link></li>
                  <li><Link to="/mods">Technology & Automation</Link></li>
                </ul>
              </div>

              <div className="content-box">
                <h3><Map size={20} /> Progression Guides</h3>
                <ul>
                  <li><Link to="/guides/early">Early Game Survival</Link></li>
                  <li><Link to="/guides/mid">Mid Game Combat</Link></li>
                  <li><Link to="/guides/late">Late Game Engineering</Link></li>
                  <li><Link to="/guides/space">Space Age Exploration</Link></li>
                </ul>
              </div>

              <div className="content-box">
                <h3><FlaskConical size={20} /> Recipes & Crafting</h3>
                <ul>
                  <li><Link to="/recipes">Essential Recipes</Link></li>
                  <li><Link to="/recipes">Space Equipment</Link></li>
                  <li><Link to="/recipes">Ammunition</Link></li>
                  <li><Link to="/recipes">Fuel Production</Link></li>
                </ul>
              </div>

              <div className="content-box">
                <h3><Book size={20} /> Lore & Story</h3>
                <ul>
                  <li><Link to="/story">Story Chapters (14)</Link></li>
                  <li><Link to="/story">Key Milestones</Link></li>
                  <li><Link to="/story">Quest Lines</Link></li>
                  <li><Link to="/story">Featured Mods by Chapter</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Mods */}
          <section className="wiki-section">
            <h2>Essential Mods</h2>
            <div className="key-mods-list">
              <div className="mod-row">
                <strong>Ad Astra</strong>
                <span>Space exploration mod with 7 planets and rocket building</span>
              </div>
              <div className="mod-row">
                <strong>Ice and Fire</strong>
                <span>Dragons in fire, ice, and lightning variants with taming</span>
              </div>
              <div className="mod-row">
                <strong>Valkyrien Skies</strong>
                <span>Physics-based ships and flying structures</span>
              </div>
              <div className="mod-row">
                <strong>TACZ</strong>
                <span>Modern weapons and guns for combat</span>
              </div>
              <div className="mod-row">
                <strong>Refined Storage</strong>
                <span>Digital storage system for managing items</span>
              </div>
              <div className="mod-row">
                <strong>Oh The Biomes You'll Go</strong>
                <span>200+ new biomes for exploration</span>
              </div>
            </div>
          </section>

          {/* Planet Guide */}
          <section className="wiki-section">
            <h2>Celestial Bodies</h2>
            <div className="planets-table">
              <table>
                <thead>
                  <tr>
                    <th>Planet</th>
                    <th>Unlock Day</th>
                    <th>Gravity</th>
                    <th>Key Resources</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Moon</strong></td>
                    <td>60</td>
                    <td>Low</td>
                    <td>Desh, Cheese</td>
                  </tr>
                  <tr>
                    <td><strong>Mars</strong></td>
                    <td>65</td>
                    <td>Medium</td>
                    <td>Ostrum, Ice</td>
                  </tr>
                  <tr>
                    <td><strong>Venus</strong></td>
                    <td>70</td>
                    <td>High</td>
                    <td>Calorite</td>
                  </tr>
                  <tr>
                    <td><strong>Mercury</strong></td>
                    <td>75</td>
                    <td>Low</td>
                    <td>Advanced Ores</td>
                  </tr>
                  <tr>
                    <td><strong>Glacio</strong></td>
                    <td>80</td>
                    <td>Low</td>
                    <td>Ice Resources</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
