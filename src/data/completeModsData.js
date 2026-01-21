// COMPLETE MOD DATABASE - All 50+ mods with full documentation
export const modsData = [
  // ========== SPACE & DIMENSIONS ==========
  {
    id: 'ad-astra',
    name: 'Ad Astra',
    category: 'Space & Dimensions',
    phase: 'space',
    priority: 'essential',
    description: 'The ultimate goal - build rockets and explore space',
    storyRole: 'Your destiny awaits among the stars. After conquering Earth, it\'s time to reach for the cosmos.',
    features: [
      'NASA Workbench for rocket construction',
      'Tiered rockets (1-4) for different planets',
      'Oxygen and temperature management',
      'Space suits with life support',
      'Planets: Moon, Mars, Venus, Mercury',
      'Asteroid mining for rare resources',
      'Space stations you can build',
      'Alien villager trading',
      'Fuel refining system'
    ],
    progression: {
      unlockDay: 60,
      requirements: ['Oil source', 'Steel production', 'Power generation'],
      unlocks: ['Desh (Moon)', 'Ostrum (Mars)', 'Calorite (Venus)']
    },
    recipes: {
      'NASA Workbench': '7x Steel Plates + 1x Crafting Table + 1x Redstone',
      'Tier 1 Rocket': '10x Steel Plates + 4x Steel Fins + 1x Engine',
      'Oxygen Loader': '4x Steel + 1x Fan + 3x Oxygen Tanks'
    },
    tips: 'Start with Moon for Desh, then Mars for Ostrum, finally Venus for Calorite',
    icon: '🚀'
  },
  {
    id: 'ad-astra-giselle',
    name: 'Ad Astra: Giselle Addon',
    category: 'Space & Dimensions',
    phase: 'space',
    priority: 'recommended',
    description: 'Automation tools for space colonies',
    storyRole: 'Advanced technology to make your space bases self-sufficient',
    features: [
      'Oxygen distributors for large areas',
      'Automated oxygen collection',
      'Advanced solar panels',
      'Improved fuel systems',
      'Automation components'
    ],
    progression: {
      unlockDay: 65,
      requirements: ['Ad Astra'],
      unlocks: ['Space automation']
    },
    icon: '🛰️'
  },
  {
    id: 'ad-astra-extra',
    name: 'Ad Astra: Extra Additions',
    category: 'Space & Dimensions',
    phase: 'space',
    priority: 'optional',
    description: 'More decorative and functional space blocks',
    features: [
      'Space-themed decorations',
      'Additional space foods',
      'Enhanced crafting options',
      'More building blocks'
    ],
    progression: {
      unlockDay: 70,
      requirements: ['Ad Astra'],
      unlocks: ['Decorative options']
    },
    icon: '🌌'
  },
  {
    id: 'ad-astra-structures',
    name: 'Ad Astra: More Structures',
    category: 'Space & Dimensions',
    phase: 'space',
    priority: 'recommended',
    description: 'Alien structures to explore on planets',
    storyRole: 'Ancient alien civilizations left treasures across the cosmos',
    features: [
      'Alien dungeons on planets',
      'Crashed spaceships with loot',
      'Ancient monuments',
      'Hidden alien bases',
      'Unique loot tables'
    ],
    progression: {
      unlockDay: 65,
      requirements: ['Space travel'],
      unlocks: ['Alien technology']
    },
    icon: '🛸'
  },
  {
    id: 'ad-astra-recipes',
    name: 'Ad Astra: Easy Recipes',
    category: 'Space & Dimensions',
    phase: 'space',
    priority: 'optional',
    description: 'More accessible rocket crafting',
    features: [
      'Simplified rocket recipes',
      'Alternative fuel sources',
      'Reduced material costs',
      'Easier progression'
    ],
    progression: {
      unlockDay: 60,
      requirements: ['Ad Astra'],
      unlocks: ['Easier space access']
    },
    icon: '🔧'
  },

  // ========== WORLD GENERATION ==========
  {
    id: 'oh-biomes-youll-go',
    name: 'Oh The Biomes You\'ll Go (BYG)',
    category: 'World Generation',
    phase: 'early',
    priority: 'essential',
    description: '200+ new biomes transforming your world',
    storyRole: 'A world transformed - explore magical forests, crystal caverns, and floating islands',
    features: [
      '200+ unique biomes',
      '30+ new wood types',
      'Colored sand and stone variants',
      'Unique plants and flowers',
      'Enhanced village generation',
      'Floating islands',
      'Underground biomes',
      'Seasonal forests'
    ],
    progression: {
      unlockDay: 1,
      requirements: ['None'],
      unlocks: ['Unique building materials', 'Special resources']
    },
    tips: 'Different biomes have unique resources - explore widely!',
    icon: '🌲'
  },
  {
    id: 'oh-trees-youll-grow',
    name: 'Oh The Trees You\'ll Grow',
    category: 'World Generation',
    phase: 'early',
    priority: 'optional',
    description: 'Giant and magical tree variants',
    features: [
      'Giant tree generation',
      'Fruit-bearing trees',
      'Magical wood types',
      'Custom sapling mechanics'
    ],
    progression: {
      unlockDay: 1,
      requirements: ['None'],
      unlocks: ['Special wood types']
    },
    icon: '🌳'
  },
  {
    id: 'terrablender',
    name: 'TerraBlender',
    category: 'World Generation',
    phase: 'early',
    priority: 'library',
    description: 'Makes biome blending smooth (Library)',
    features: ['Biome blending', 'World generation API'],
    progression: {
      unlockDay: 1,
      requirements: ['None'],
      unlocks: ['Smooth biome transitions']
    },
    icon: '🔧'
  },
  {
    id: 'moogs-voyager',
    name: 'Moog\'s Voyager Structures',
    category: 'World Generation',
    phase: 'early',
    priority: 'recommended',
    description: '50+ new structures to discover',
    storyRole: 'Ancient ruins and forgotten treasures dot the landscape',
    features: [
      '50+ structure types',
      'Custom dungeons',
      'Abandoned settlements',
      'Hidden treasures',
      'Unique loot'
    ],
    progression: {
      unlockDay: 1,
      requirements: ['None'],
      unlocks: ['Structure loot', 'Exploration rewards']
    },
    icon: '🏛️'
  },
  {
    id: 'moogs-structure-lib',
    name: 'Moog\'s Structure Lib',
    category: 'World Generation',
    phase: 'early',
    priority: 'library',
    description: 'Library for Moog\'s structures',
    features: ['Structure generation API'],
    icon: '📚'
  },
  {
    id: 'mes-moogs-end',
    name: 'MES - Moog\'s End Structures',
    category: 'World Generation',
    phase: 'late',
    priority: 'recommended',
    description: 'Enhanced End dimension structures',
    storyRole: 'The End holds secrets beyond the dragon',
    features: [
      'Redesigned End Cities',
      'New End dungeons',
      'Chorus forests',
      'Ender villages',
      'End-specific loot'
    ],
    progression: {
      unlockDay: 40,
      requirements: ['End Portal'],
      unlocks: ['End treasures']
    },
    icon: '🔮'
  },

  // ========== BOSSES & COMBAT ==========
  {
    id: 'ice-and-fire',
    name: 'Ice and Fire: Dragons',
    category: 'Bosses & Combat',
    phase: 'mid',
    priority: 'essential',
    description: 'Dragons and mythical creatures - the greatest challenge',
    storyRole: 'Ancient dragons rule the land. Defeat them to claim their power, or tame them as allies.',
    features: [
      'Fire Dragons (4 colors)',
      'Ice Dragons (4 colors)',
      'Lightning Dragons (4 colors)',
      'Dragon taming & breeding',
      'Tier 1-5 progression',
      'Dragon steel equipment',
      'Dragon forges',
      '30+ mythical creatures',
      'Hippogryphs, Sirens, Cyclops',
      'Sea Serpents in oceans'
    ],
    progression: {
      unlockDay: 15,
      requirements: ['Diamond armor', 'Enchantments', 'Fire resistance'],
      unlocks: ['Dragon scales', 'Dragon steel', 'Dragon eggs', 'Flight']
    },
    recipes: {
      'Dragon Steel': 'Dragon Blood + Iron + Dragon Bones (in Dragon Forge)',
      'Dragon Forge': 'Requires Fire Dragon + Ice Dragon cores'
    },
    tips: 'Dragons sleep at night. Start with Tier 1-2 surface dragons.',
    icon: '🐉'
  },
  {
    id: 'apotheosis',
    name: 'Apotheosis',
    category: 'Bosses & Combat',
    phase: 'mid',
    priority: 'essential',
    description: 'Enchantments beyond limits and boss spawners',
    storyRole: 'Unlock divine power through enchantments that break vanilla limits',
    features: [
      'Enchantments to level X+',
      'New enchantments (30+)',
      'Spawner modifications',
      'Boss spawner creation',
      'Affix item system',
      'Gem socketing',
      'Enchantment library',
      'Infusion enchanting',
      'Rarity tiers'
    ],
    progression: {
      unlockDay: 20,
      requirements: ['Enchanting table', 'XP farm'],
      unlocks: ['God-tier equipment', 'Boss farming']
    },
    recipes: {
      'Enchantment Library': '4x Bookshelves + 1x Enchanting Table',
      'Spawner Modifier': 'Various items modify spawner behavior'
    },
    tips: 'Combine books before applying to save XP',
    icon: '⚔️'
  },
  {
    id: 'apothic-attributes',
    name: 'Apothic Attributes',
    category: 'Bosses & Combat',
    phase: 'mid',
    priority: 'library',
    description: 'RPG attributes for Apotheosis',
    features: [
      'Critical hit chance',
      'Life steal',
      'Armor penetration',
      'Speed modifiers'
    ],
    progression: {
      unlockDay: 20,
      requirements: ['Apotheosis'],
      unlocks: ['Advanced combat stats']
    },
    icon: '📊'
  },
  {
    id: 'attributefix',
    name: 'AttributeFix',
    category: 'Bosses & Combat',
    phase: 'mid',
    priority: 'library',
    description: 'Fixes attribute calculations',
    features: ['Attribute calculation fixes'],
    icon: '🔧'
  },
  {
    id: 'citadel',
    name: 'Citadel',
    category: 'Bosses & Combat',
    phase: 'early',
    priority: 'library',
    description: 'Animation library for Ice and Fire',
    features: ['Entity animations'],
    icon: '📚'
  },

  // ========== WEAPONS & COMBAT ==========
  {
    id: 'tacz',
    name: 'TACZ (Timeless & Classics Zero)',
    category: 'Weapons & Combat',
    phase: 'mid',
    priority: 'essential',
    description: 'Modern firearms with realistic ballistics',
    storyRole: 'When swords aren\'t enough, bring the firepower of modern warfare',
    features: [
      'Pistols, rifles, shotguns, snipers',
      'Realistic ballistics',
      'Customizable attachments',
      'Scopes, grips, suppressors',
      'Ammo crafting system',
      'Gun workbench',
      'Tactical gear & armor',
      '3D gun models'
    ],
    progression: {
      unlockDay: 25,
      requirements: ['Gunpowder', 'Iron', 'Brass (copper+zinc)'],
      unlocks: ['Ranged superiority', 'Dragon hunting tools']
    },
    recipes: {
      'Gun Workbench': '6x Iron + 2x Redstone + 1x Crafting Table',
      'Basic Ammo': 'Gunpowder + Lead/Iron + Brass Casing',
      'Pistol': '4x Iron + 1x Wood + 2x Iron Nuggets'
    },
    tips: 'Headshots deal 3x damage. Perfect for dragon hunting.',
    icon: '🔫'
  },

  // ========== TECHNOLOGY & AUTOMATION ==========
  {
    id: 'refined-storage',
    name: 'Refined Storage',
    category: 'Technology',
    phase: 'mid',
    priority: 'essential',
    description: 'Digital storage system - store millions of items',
    storyRole: 'Master technology to organize and automate your growing empire',
    features: [
      'Digital item storage',
      'Store millions of items',
      'Autocrafting chains',
      'Wireless access',
      'Import/export buses',
      'External storage',
      'Pattern storage',
      'Fluid storage',
      'Cross-dimensional access'
    ],
    progression: {
      unlockDay: 20,
      requirements: ['Quartz', 'Processors', 'Power generation'],
      unlocks: ['Automation', 'Mass storage', 'Wireless access']
    },
    recipes: {
      'Controller': '4x Quartz + 4x Iron + 1x Silicon',
      'Disk Drive': '3x Iron + 2x Quartz + 1x Processor',
      '1k Storage': '3x Quartz + 2x Redstone + 3x Glass'
    },
    tips: 'Start with 1k disks, upgrade as needed. External storage for bulk items.',
    icon: '💾'
  },
  {
    id: 'compact-machines',
    name: 'Compact Machines',
    category: 'Technology',
    phase: 'mid',
    priority: 'essential',
    description: 'Pocket dimensions - infinite space in one block',
    storyRole: 'Bend space itself to create pocket dimensions for your machines',
    features: [
      'Pocket dimensions (3x3 to 13x13)',
      'Reduces lag dramatically',
      'Item/fluid/power tunnels',
      'Nested machines possible',
      'Personal Machine item',
      'Perfect for farms'
    ],
    progression: {
      unlockDay: 25,
      requirements: ['Redstone', 'Iron', 'Ender pearls'],
      unlocks: ['Space compression', 'Lag-free automation']
    },
    recipes: {
      'Personal Compact Machine': '4x Iron + 4x Redstone + 1x Ender Pearl',
      'Machine Wall': '9x Iron (makes 16)',
      'Tunnel': '4x Redstone + 4x Iron + 1x Hopper'
    },
    tips: 'Put all farms inside Compact Machines to eliminate lag',
    icon: '📦'
  },
  {
    id: 'securitycraft',
    name: 'SecurityCraft',
    category: 'Technology',
    phase: 'mid',
    priority: 'recommended',
    description: 'Advanced security systems for your base',
    storyRole: 'Protect your empire with cutting-edge security technology',
    features: [
      'Keypads & keycards',
      'Retinal scanners',
      'Security cameras',
      'Camera monitors',
      'Laser grids',
      'Reinforced blocks (unbreakable)',
      'Mines & cages',
      'Password-protected chests',
      'Alarms & sensors'
    ],
    progression: {
      unlockDay: 30,
      requirements: ['Iron', 'Redstone', 'Glass'],
      unlocks: ['Base protection', 'Theft prevention']
    },
    recipes: {
      'Keypad': '3x Iron + 3x Buttons + 3x Redstone',
      'Camera': '3x Iron + 1x Glass Pane + 2x Redstone',
      'Reinforced Stone': '1x Stone + Reinforcer'
    },
    tips: 'Cameras can see through walls. Use fake keypads to confuse intruders.',
    icon: '🔒'
  },
  {
    id: 'waystones',
    name: 'Waystones',
    category: 'Technology',
    phase: 'early',
    priority: 'essential',
    description: 'Fast travel network - teleportation points',
    storyRole: 'Ancient waystones allow instant travel across your growing realm',
    features: [
      'Teleportation network',
      'Village waystones',
      'Warp stones (portable)',
      'Bound scrolls',
      'Cross-dimensional travel',
      'Global waystone sharing'
    ],
    progression: {
      unlockDay: 5,
      requirements: ['Find village', 'Ender pearls'],
      unlocks: ['Fast travel', 'Death recovery']
    },
    recipes: {
      'Waystone': '3x Stone Bricks + 1x Warp Stone + 3x Obsidian',
      'Warp Stone': '4x Ender Pearls + 1x Emerald',
      'Bound Scroll': '3x Paper + 1x Ender Pearl'
    },
    tips: 'Villages always have waystones. Name them clearly!',
    icon: '🗿'
  },

  // ========== PHYSICS & ENGINEERING ==========
  {
    id: 'valkyrien-skies',
    name: 'Valkyrien Skies',
    category: 'Physics & Engineering',
    phase: 'late',
    priority: 'essential',
    description: 'Physics-based ships and flying structures',
    storyRole: 'Master physics to build mighty airships and conquer the skies',
    features: [
      'Physics-based movement',
      'Build flying ships',
      'Naval vessels',
      'Combat airships',
      'Mobile bases',
      'Real weight & balance',
      'Collision detection',
      'Works in space!'
    ],
    progression: {
      unlockDay: 40,
      requirements: ['Engineering knowledge', 'Balloons', 'Propellers'],
      unlocks: ['Flying vehicles', 'Mobile fortresses', 'Space ships']
    },
    recipes: {
      'Ship Helm': '4x Iron + 1x Compass + 3x Wood',
      'Balloon': '4x Leather + 4x String + 1x Torch',
      'Propeller': '4x Iron + 1x Iron Block'
    },
    tips: 'Balance is crucial. Start small, expand gradually.',
    icon: '⛵'
  },
  {
    id: 'eureka-ships',
    name: 'Eureka! Ships',
    category: 'Physics & Engineering',
    phase: 'late',
    priority: 'optional',
    description: 'Simplified controls for Valkyrien Skies',
    features: [
      'Simplified ship controls',
      'Ship helm block',
      'Easier assembly',
      'Beginner friendly'
    ],
    progression: {
      unlockDay: 40,
      requirements: ['Valkyrien Skies'],
      unlocks: ['Easier ship control']
    },
    icon: '🚢'
  },

  // ========== STORAGE & INVENTORY ==========
  {
    id: 'sophisticated-backpacks',
    name: 'Sophisticated Backpacks',
    category: 'Storage',
    phase: 'early',
    priority: 'essential',
    description: 'Upgradeable backpacks - your first storage upgrade',
    storyRole: 'A trusty backpack is every adventurer\'s best friend',
    features: [
      'Tiered backpacks (Leather → Netherite)',
      'Upgrade system',
      'Magnet upgrade (auto-pickup)',
      'Feeding upgrade',
      'Compression upgrade',
      'Void upgrade',
      'Stack upgrades (more slots)',
      'Dyeable colors',
      'Searchable contents'
    ],
    progression: {
      unlockDay: 2,
      requirements: ['Leather', 'String'],
      unlocks: ['Portable storage', 'Auto-pickup']
    },
    recipes: {
      'Leather Backpack': '7x Leather + 1x Chest + 1x String',
      'Iron Upgrade': '8x Iron around backpack',
      'Magnet Upgrade': '4x Iron + 1x Redstone + 1x Ender Pearl'
    },
    tips: 'Rush leather backpack day 1. Upgrade gradually.',
    icon: '🎒'
  },
  {
    id: 'sophisticated-core',
    name: 'Sophisticated Core',
    category: 'Storage',
    phase: 'early',
    priority: 'library',
    description: 'Core library for Sophisticated mods',
    features: ['Upgrade system API'],
    icon: '📚'
  },

  // ========== COMPANIONS ==========
  {
    id: 'doggy-talents-next',
    name: 'Doggy Talents Next',
    category: 'Companions',
    phase: 'early',
    priority: 'optional',
    description: 'Train dogs with 20+ special talents',
    storyRole: 'Man\'s best friend becomes your greatest ally',
    features: [
      '20+ trainable talents',
      'Pack Puppy (mobile storage)',
      'Guard Dog (enhanced combat)',
      'Hunter Dog (item fetching)',
      'Rescue Dog (saves from death)',
      'Breeding system',
      'Dog accessories',
      'Dog beds (respawn)'
    ],
    progression: {
      unlockDay: 5,
      requirements: ['Bones', 'Meat'],
      unlocks: ['Companion helpers', 'Mobile storage']
    },
    recipes: {
      'Training Treat': '3x Wheat + 3x Bone + 3x Meat',
      'Dog Bed': '5x Wood + 3x Wool'
    },
    tips: 'Pack Puppy talent = living chest!',
    icon: '🐕'
  },
  {
    id: 'better-dogs',
    name: 'Better Dogs x Doggy Talents Next',
    category: 'Companions',
    phase: 'early',
    priority: 'optional',
    description: 'Visual improvements for dogs',
    features: [
      'Improved dog models',
      'Better animations',
      'More realistic behavior'
    ],
    icon: '🐕‍🦺'
  },
  {
    id: 'mo-dogs',
    name: 'Mo\' Dogs',
    category: 'Companions',
    phase: 'early',
    priority: 'optional',
    description: '50+ dog breeds to find',
    features: [
      '50+ dog breeds',
      'Unique stats per breed',
      'Rare breeds in specific biomes',
      'Breed variety'
    ],
    icon: '🦮'
  },

  // ========== UTILITY ==========
  {
    id: 'fallingtree',
    name: 'FallingTree',
    category: 'Utility',
    phase: 'early',
    priority: 'optional',
    description: 'Chop entire trees with one cut',
    features: [
      'Tree chopping',
      'Works with all wood types',
      'Configurable tool damage',
      'Shift to disable'
    ],
    progression: {
      unlockDay: 1,
      requirements: ['Axe'],
      unlocks: ['Quick wood gathering']
    },
    icon: '🪓'
  },
  {
    id: 'some-more-blocks',
    name: 'Some More Blocks',
    category: 'Utility',
    phase: 'early',
    priority: 'optional',
    description: 'Decorative block variants',
    features: [
      'Slabs for all blocks',
      'Stairs variants',
      'Wall variants',
      'Building options'
    ],
    icon: '🧱'
  },

  // ========== CLIENT-SIDE UI ==========
  {
    id: 'jei',
    name: 'JEI (Just Enough Items)',
    category: 'Client UI',
    phase: 'early',
    priority: 'essential',
    description: 'Recipe browser - see all crafting recipes',
    features: [
      'Recipe lookup (R key)',
      'Item uses (U key)',
      'Search bar',
      'Bookmarks',
      'Cheat mode'
    ],
    clientSide: true,
    tips: 'Press R on any item to see recipes',
    icon: '📖'
  },
  {
    id: 'xaeros-minimap',
    name: 'Xaero\'s Minimap',
    category: 'Client UI',
    phase: 'early',
    priority: 'recommended',
    description: 'Minimap with waypoints',
    features: [
      'Corner minimap',
      'Waypoint markers',
      'Entity radar',
      'Cave mode',
      'Death point marker'
    ],
    clientSide: true,
    icon: '🗺️'
  },
  {
    id: 'legendary-tooltips',
    name: 'Legendary Tooltips',
    category: 'Client UI',
    phase: 'early',
    priority: 'optional',
    description: 'Fancy item tooltips',
    features: [
      'Animated borders',
      'Rarity colors',
      'Better visuals'
    ],
    clientSide: true,
    icon: '✨'
  },
  {
    id: 'perception',
    name: 'Perception',
    category: 'Client UI',
    phase: 'early',
    priority: 'optional',
    description: 'HUD improvements',
    features: [
      'Better health display',
      'Status effect timers',
      'Customizable HUD'
    ],
    clientSide: true,
    icon: '👁️'
  },
  {
    id: 'fast-ip-ping',
    name: 'Fast IP Ping',
    category: 'Client UI',
    phase: 'early',
    priority: 'optional',
    description: 'Server status in menu',
    features: [
      'Server ping display',
      'Player count',
      'Version checker'
    ],
    clientSide: true,
    icon: '📡'
  },

  // ========== PERFORMANCE ==========
  {
    id: 'embeddium',
    name: 'Embeddium',
    category: 'Performance',
    phase: 'early',
    priority: 'essential',
    description: 'Massive FPS boost (Sodium port)',
    features: [
      '2-3x FPS improvement',
      'Better chunk rendering',
      'Reduced stuttering',
      'Memory optimization'
    ],
    clientSide: true,
    icon: '⚡'
  },
  {
    id: 'oculus',
    name: 'Oculus',
    category: 'Performance',
    phase: 'early',
    priority: 'optional',
    description: 'Shader support for Embeddium',
    features: [
      'Shader compatibility',
      'RTX-style effects',
      'Works with Embeddium'
    ],
    clientSide: true,
    icon: '👁️'
  },
  {
    id: 'modernfix',
    name: 'ModernFix',
    category: 'Performance',
    phase: 'early',
    priority: 'essential',
    description: 'Server memory and performance fixes',
    features: [
      'Memory leak fixes',
      'Loading optimizations',
      'Reduced RAM usage',
      'Faster chunk loading'
    ],
    serverSide: true,
    icon: '🔧'
  },
  {
    id: 'ferritecore',
    name: 'FerriteCore',
    category: 'Performance',
    phase: 'early',
    priority: 'essential',
    description: 'Reduces RAM usage by 40%+',
    features: [
      'Memory optimization',
      'No gameplay changes',
      'Server performance'
    ],
    serverSide: true,
    icon: '💾'
  },
  {
    id: 'starlight',
    name: 'Starlight',
    category: 'Performance',
    phase: 'early',
    priority: 'essential',
    description: '20x faster lighting engine',
    features: [
      'Lighting optimization',
      'Fixes lighting bugs',
      'Reduces lag spikes'
    ],
    serverSide: true,
    icon: '💡'
  },
  {
    id: 'spark',
    name: 'Spark',
    category: 'Performance',
    phase: 'early',
    priority: 'recommended',
    description: 'Performance profiler',
    features: [
      '/spark tps command',
      'Performance profiling',
      'Lag identification',
      'Memory analysis'
    ],
    serverSide: true,
    icon: '📊'
  },
  {
    id: 'chunky',
    name: 'Chunky',
    category: 'Performance',
    phase: 'early',
    priority: 'optional',
    description: 'Pre-generate world chunks',
    features: [
      'World pre-generation',
      'Reduces exploration lag',
      'Customizable radius'
    ],
    serverSide: true,
    icon: '🗺️'
  },
  {
    id: 'simple-backups',
    name: 'Simple Backups',
    category: 'Performance',
    phase: 'early',
    priority: 'recommended',
    description: 'Automated world backups',
    features: [
      'Automatic backups',
      'Rollback capability',
      'Scheduled saves'
    ],
    serverSide: true,
    icon: '💾'
  },

  // ========== CORE LIBRARIES ==========
  {
    id: 'balm',
    name: 'Balm',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Multiplatform library',
    features: ['API for mods'],
    icon: '📚'
  },
  {
    id: 'geckolib',
    name: 'GeckoLib',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Animation framework',
    features: ['Entity animations'],
    icon: '📚'
  },
  {
    id: 'architectury',
    name: 'Architectury',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Cross-platform API',
    features: ['Mod compatibility'],
    icon: '📚'
  },
  {
    id: 'placebo',
    name: 'Placebo',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Apotheosis dependency',
    features: ['API for Apotheosis'],
    icon: '📚'
  },
  {
    id: 'patchouli',
    name: 'Patchouli',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Guidebook API',
    features: ['In-game documentation'],
    icon: '📚'
  },
  {
    id: 'corgilib',
    name: 'CorgiLib',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Utility library',
    features: ['Common utilities'],
    icon: '📚'
  },
  {
    id: 'kotlin-forge',
    name: 'Kotlin for Forge',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Kotlin language support',
    features: ['Programming language'],
    icon: '📚'
  },
  {
    id: 'resourceful-lib',
    name: 'Resourceful Lib',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Resource management',
    features: ['Resource handling'],
    icon: '📚'
  },
  {
    id: 'resourceful-config',
    name: 'Resourceful Config',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Configuration system',
    features: ['Config management'],
    icon: '📚'
  },
  {
    id: 'iceberg',
    name: 'Iceberg',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Legendary Tooltips dependency',
    features: ['Tooltip rendering'],
    icon: '📚'
  },
  {
    id: 'octolib',
    name: 'OctoLib',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Utility functions',
    features: ['Common utilities'],
    icon: '📚'
  },
  {
    id: 'prism',
    name: 'Prism',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Rendering library',
    features: ['Rendering utilities'],
    icon: '📚'
  },
  {
    id: 'pehkui',
    name: 'Pehkui',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Size-changing API',
    features: ['Entity sizing'],
    icon: '📚'
  },
  {
    id: 'botarium',
    name: 'Botarium',
    category: 'Libraries',
    phase: 'early',
    priority: 'library',
    description: 'Energy/fluid API',
    features: ['Energy systems'],
    icon: '📚'
  }
];

// Helper functions for mod data
export const getModsByCategory = (category) => {
  return modsData.filter(mod => mod.category === category);
};

export const getModsByPhase = (phase) => {
  return modsData.filter(mod => mod.phase === phase);
};

export const getEssentialMods = () => {
  return modsData.filter(mod => mod.priority === 'essential');
};

export const searchMods = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return modsData.filter(mod =>
    mod.name.toLowerCase().includes(lowercaseQuery) ||
    mod.description.toLowerCase().includes(lowercaseQuery) ||
    (mod.features && mod.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))) ||
    (mod.storyRole && mod.storyRole.toLowerCase().includes(lowercaseQuery))
  );
};

export const categories = [
  'Space & Dimensions',
  'World Generation',
  'Bosses & Combat',
  'Weapons & Combat',
  'Technology',
  'Physics & Engineering',
  'Storage',
  'Companions',
  'Utility',
  'Client UI',
  'Performance',
  'Libraries'
];

export const phases = [
  { id: 'early', name: 'Early Game', days: '1-10', color: '#4caf50' },
  { id: 'mid', name: 'Mid Game', days: '10-30', color: '#ff9800' },
  { id: 'late', name: 'Late Game', days: '30-60', color: '#7b2cbf' },
  { id: 'space', name: 'Space Age', days: '60+', color: '#00d4ff' }
];