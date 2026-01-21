import { useState } from 'react';
import { FlaskConical, Search } from 'lucide-react';

function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const recipes = {
    essential: [
      {
        name: 'NASA Workbench',
        category: 'Space',
        ingredients: '7x Steel Plates + 1x Crafting Table + 1x Lever',
        result: 'Access to rocket crafting',
        phase: 'late'
      },
      {
        name: 'Tier 1 Rocket',
        category: 'Space',
        ingredients: '10x Steel Plates + 4x Fins + 1x Engine + 2x Fuel Tanks',
        result: 'Moon access vehicle',
        phase: 'space'
      },
      {
        name: 'Sophisticated Backpack',
        category: 'Storage',
        ingredients: '7x Leather + 1x Chest + 1x String',
        result: '27 extra inventory slots',
        phase: 'early'
      },
      {
        name: 'Waystone',
        category: 'Travel',
        ingredients: '3x Stone Bricks + 1x Warp Stone + 3x Obsidian',
        result: 'Fast travel point',
        phase: 'early'
      },
      {
        name: 'Gun Workbench',
        category: 'Weapons',
        ingredients: '6x Iron + 2x Redstone + 1x Crafting Table',
        result: 'Craft TACZ weapons',
        phase: 'mid'
      },
      {
        name: 'Dragon Forge',
        category: 'Dragons',
        ingredients: 'Fire Dragon Core + Ice Dragon Core + Dragon Bones',
        result: 'Dragon steel crafting',
        phase: 'mid'
      },
      {
        name: 'Refined Storage Controller',
        category: 'Tech',
        ingredients: '4x Quartz + 4x Iron + 1x Silicon',
        result: 'Digital storage brain',
        phase: 'mid'
      },
      {
        name: 'Compact Machine',
        category: 'Tech',
        ingredients: '4x Iron + 4x Redstone + 1x Ender Pearl',
        result: 'Pocket dimension',
        phase: 'mid'
      },
      {
        name: 'Ship Helm',
        category: 'Ships',
        ingredients: '4x Iron + 1x Compass + 3x Wood',
        result: 'Control airships',
        phase: 'late'
      },
      {
        name: 'Oxygen Loader',
        category: 'Space',
        ingredients: '4x Steel + 1x Fan + 3x Oxygen Tanks',
        result: 'Fill space suit oxygen',
        phase: 'space'
      },
      {
        name: 'Dragon Meal',
        category: 'Dragons',
        ingredients: '8x Dragon Bones + 1x Dragon Heart',
        result: 'Accelerate dragon growth',
        phase: 'mid'
      },
      {
        name: 'Enchantment Library',
        category: 'Magic',
        ingredients: '4x Bookshelves + 1x Enchanting Table',
        result: 'Store enchantments',
        phase: 'mid'
      }
    ],
    ammunition: [
      {
        name: 'Basic Bullets',
        category: 'Ammo',
        ingredients: 'Gunpowder + Lead/Iron + Brass Casing',
        result: 'Pistol/rifle ammo',
        phase: 'mid'
      },
      {
        name: 'Shotgun Shells',
        category: 'Ammo',
        ingredients: '2x Gunpowder + Iron Pellets + Shell Casing',
        result: 'Shotgun ammunition',
        phase: 'mid'
      },
      {
        name: 'Sniper Rounds',
        category: 'Ammo',
        ingredients: '3x Gunpowder + Steel Bullet + Large Casing',
        result: 'High-damage rounds',
        phase: 'mid'
      }
    ],
    fuel: [
      {
        name: 'Rocket Fuel',
        category: 'Fuel',
        ingredients: 'Oil → Refinery (needs power)',
        result: '1:1 conversion to fuel',
        phase: 'late'
      },
      {
        name: 'Biodiesel',
        category: 'Fuel',
        ingredients: 'Plant Matter + Ethanol',
        result: 'Alternative fuel source',
        phase: 'late'
      }
    ],
    upgrades: [
      {
        name: 'Backpack Iron Upgrade',
        category: 'Upgrades',
        ingredients: '8x Iron around Leather Backpack',
        result: 'More storage slots',
        phase: 'early'
      },
      {
        name: 'Magnet Upgrade',
        category: 'Upgrades',
        ingredients: '4x Iron + 1x Redstone + 1x Ender Pearl',
        result: 'Auto-pickup items',
        phase: 'early'
      },
      {
        name: 'Stack Upgrade',
        category: 'Upgrades',
        ingredients: '4x Iron + 4x String',
        result: 'More backpack slots',
        phase: 'early'
      }
    ]
  };

  const allRecipes = Object.values(recipes).flat();
  const categories = ['all', ...new Set(allRecipes.map(r => r.category))];

  const filteredRecipes = allRecipes.filter(recipe => {
    if (selectedCategory !== 'all' && recipe.category !== selectedCategory) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return recipe.name.toLowerCase().includes(query) ||
             recipe.ingredients.toLowerCase().includes(query) ||
             recipe.result.toLowerCase().includes(query);
    }
    return true;
  });

  const getPhaseColor = (phase) => {
    const colors = {
      early: '#4caf50',
      mid: '#ff9800',
      late: '#7b2cbf',
      space: '#00d4ff'
    };
    return colors[phase] || '#666';
  };

  return (
    <div className="recipes-page">
      <div className="page-header">
        <h1>Essential Recipes & Crafting</h1>
        <p>Key recipes for your journey to space</p>
      </div>

      {/* Search and Filters */}
      <div className="recipes-filters">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Recipe Sections */}
      <div className="recipes-sections">
        {selectedCategory === 'all' ? (
          Object.entries(recipes).map(([section, sectionRecipes]) => (
            <div key={section} className="recipe-section">
              <h2>{section.charAt(0).toUpperCase() + section.slice(1)} Recipes</h2>
              <div className="recipes-grid">
                {sectionRecipes
                  .filter(recipe => !searchQuery ||
                    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((recipe, idx) => (
                    <RecipeCard key={idx} recipe={recipe} getPhaseColor={getPhaseColor} />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="recipes-grid">
            {filteredRecipes.map((recipe, idx) => (
              <RecipeCard key={idx} recipe={recipe} getPhaseColor={getPhaseColor} />
            ))}
          </div>
        )}
      </div>

      {/* Crafting Tips */}
      <div className="crafting-tips">
        <h2>Crafting Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>JEI is Essential</h3>
            <p>Press 'R' on any item to see its recipe, 'U' to see its uses</p>
          </div>
          <div className="tip-card">
            <h3>Apotheosis Enchanting</h3>
            <p>Enchantments can go beyond vanilla limits - aim for Protection X!</p>
          </div>
          <div className="tip-card">
            <h3>Dragon Materials</h3>
            <p>Different colored dragons drop different colored scales</p>
          </div>
          <div className="tip-card">
            <h3>Fuel Production</h3>
            <p>Always produce more fuel than needed - you don't want to get stranded!</p>
          </div>
          <div className="tip-card">
            <h3>Compact Machines</h3>
            <p>Machines can go inside machines for exponential space</p>
          </div>
          <div className="tip-card">
            <h3>Resource Priority</h3>
            <p>Save diamonds for armor first, then tools, then decorative</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe, getPhaseColor }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3>{recipe.name}</h3>
        <span
          className="recipe-phase"
          style={{ background: getPhaseColor(recipe.phase), opacity: 0.2 }}
        >
          <span style={{ color: getPhaseColor(recipe.phase), opacity: 1 }}>
            {recipe.phase}
          </span>
        </span>
      </div>
      <div className="recipe-category">{recipe.category}</div>
      <div className="recipe-ingredients">
        <FlaskConical size={16} />
        <span>{recipe.ingredients}</span>
      </div>
      <div className="recipe-result">
        <strong>Result:</strong> {recipe.result}
      </div>
    </div>
  );
}

export default RecipesPage;