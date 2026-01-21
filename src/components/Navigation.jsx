import { Link, useLocation } from 'react-router-dom';
import { Rocket, Book, Package, Map, ChartBar, FlaskConical } from 'lucide-react';

function Navigation({ progress }) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Rocket size={20} /> },
    { path: '/story', label: 'Story', icon: <Book size={20} /> },
    { path: '/mods', label: 'Mods', icon: <Package size={20} /> },
    { path: `/guides/${progress.currentDay <= 10 ? 'early' : progress.currentDay <= 30 ? 'mid' : progress.currentDay <= 60 ? 'late' : 'space'}`, label: 'Guides', icon: <Map size={20} /> },
    { path: '/progression', label: 'Progress', icon: <ChartBar size={20} /> },
    { path: '/recipes', label: 'Recipes', icon: <FlaskConical size={20} /> }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <Rocket size={28} />
          <span>Minecraft Space Wiki</span>
        </Link>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ||
                  (item.path.includes('guides') && location.pathname.includes('guides')) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-progress">
          <span className="nav-day">Day {progress.currentDay}</span>
          <span className="nav-phase">
            {progress.currentDay <= 10 ? 'Early Game' :
             progress.currentDay <= 30 ? 'Mid Game' :
             progress.currentDay <= 60 ? 'Late Game' : 'Space Age'}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;