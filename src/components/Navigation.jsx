import { Link, useLocation } from 'react-router-dom';
import { Rocket, Book, Package, Map, FlaskConical } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Rocket size={20} /> },
    { path: '/story', label: 'Lore', icon: <Book size={20} /> },
    { path: '/mods', label: 'Mods', icon: <Package size={20} /> },
    { path: '/guides/early', label: 'Guides', icon: <Map size={20} /> },
    { path: '/recipes', label: 'Recipes', icon: <FlaskConical size={20} /> }
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <Link to="/" className="nav-brand">
          <Rocket size={28} />
          <span>Minecraft Space Wiki</span>
        </Link>

        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ||
                (item.path.includes('guides') && location.pathname.includes('guides')) ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;