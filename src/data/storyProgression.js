// STORY-DRIVEN PROGRESSION: From Survivor to Space Emperor
export const storyChapters = [
  {
    id: 'chapter1',
    title: 'The Awakening',
    phase: 'early',
    days: '1-3',
    story: 'You awaken in a strange land transformed by mysterious forces. The world is more beautiful yet more dangerous than ever before. Dragons roar in the distance, and ancient structures dot the landscape. Your first priority: survive the night.',
    mainQuests: [
      {
        title: 'First Shelter',
        description: 'Build an underground shelter - dragons rule the surface',
        tasks: [
          'Gather wood from BYG trees',
          'Craft basic tools',
          'Dig underground before nightfall',
          'Create your first crafting station',
          'Light up your shelter'
        ],
        rewards: ['Safety from dragons', 'Base of operations']
      },
      {
        title: 'Essential Gear',
        description: 'Craft the tools for survival',
        tasks: [
          'Mine stone for better tools',
          'Find coal for torches',
          'Craft a bed (sheep are rare!)',
          'Make a shield (ALWAYS carry one)',
          'Start food farming'
        ],
        rewards: ['Basic equipment', 'Sustainable food']
      }
    ],
    dangers: ['Surface dragons', 'Apotheosis mobs', 'No waystone yet'],
    tips: 'Stay underground at night. Dragons are most active on the surface after dark.'
  },
  {
    id: 'chapter2',
    title: 'The First Journey',
    phase: 'early',
    days: '4-7',
    story: 'With basic shelter secured, it\'s time to explore this transformed world. Ancient waystones in villages offer fast travel, while the diverse biomes of BYG hold unique resources. But beware - every hill could hide a dragon\'s lair.',
    mainQuests: [
      {
        title: 'Find Civilization',
        description: 'Locate a village with a waystone',
        tasks: [
          'Scout during daylight only',
          'Follow rivers (villages spawn near water)',
          'Mark your path home',
          'Activate the village waystone',
          'Trade with villagers for resources'
        ],
        rewards: ['Fast travel network started', 'Trading post established']
      },
      {
        title: 'The Adventurer\'s Pack',
        description: 'Craft your first Sophisticated Backpack',
        tasks: [
          'Hunt animals for leather',
          'Gather string from spiders',
          'Craft leather backpack',
          'Add first upgrade (pickup or magnet)',
          'Organize your inventory'
        ],
        rewards: ['Portable storage', 'Auto-pickup capability']
      }
    ],
    dangers: ['Getting lost', 'Dragon roosts look like hills'],
    tips: 'Villages ALWAYS have waystones. This is your #1 priority.'
  },
  {
    id: 'chapter3',
    title: 'Rising Power',
    phase: 'early',
    days: '8-10',
    story: 'You\'ve survived the initial dangers and established a foothold. Now it\'s time to delve deeper, literally. The earth holds diamonds and ancient dungeons, while Apotheosis promises power beyond vanilla limits.',
    mainQuests: [
      {
        title: 'Diamond Depths',
        description: 'Mine for diamonds and prepare for greater challenges',
        tasks: [
          'Reach Y=-59 for best diamond odds',
          'Find at least 10 diamonds',
          'Craft diamond pickaxe first',
          'Save rest for armor',
          'Explore carefully for dungeons'
        ],
        rewards: ['Diamond tools', 'Dungeon loot']
      },
      {
        title: 'Enchantment Mastery',
        description: 'Set up Apotheosis enchanting',
        tasks: [
          'Build enchanting table',
          'Create 15 bookshelves minimum',
          'Farm XP from mobs',
          'Get Protection on all armor',
          'Learn about enchantment limits (there are none!)'
        ],
        rewards: ['Enhanced gear', 'Survival boost']
      }
    ],
    keyMods: ['Apotheosis', 'Sophisticated Backpacks', 'Waystones'],
    tips: 'Apotheosis lets you enchant beyond vanilla limits. Aim for Protection IV+'
  },
  {
    id: 'chapter4',
    title: 'Dragon Slayer',
    phase: 'mid',
    days: '11-15',
    story: 'The time has come to face your fears. The dragons that forced you underground must be conquered. Their scales hold the key to legendary equipment, and their eggs... the path to taming these mighty beasts.',
    mainQuests: [
      {
        title: 'Preparing for Battle',
        description: 'Gear up for your first dragon fight',
        tasks: [
          'Full Protection IV diamond armor',
          'Fire Resistance potions (8+)',
          'Power V bow with 3 stacks arrows',
          'Golden apples for healing',
          'Ender pearls for escape',
          'Scout dragon roost from distance'
        ],
        rewards: ['Combat ready status']
      },
      {
        title: 'The First Dragon',
        description: 'Slay a Tier 1-2 dragon',
        tasks: [
          'Find surface dragon roost',
          'Attack from range to lure out',
          'Use pillaring strategy',
          'Aim for the head (3x damage)',
          'Collect scales, blood, and bones',
          'SAVE THE EGG IF IT DROPS!'
        ],
        rewards: ['Dragon scales', 'Dragon blood', 'Path to dragon steel']
      }
    ],
    dangers: ['Dragon breath', 'Fall damage', 'Getting cornered'],
    tips: 'Dragons sleep at night. Use ranged attacks. Tier 1-2 are manageable.'
  },
  {
    id: 'chapter5',
    title: 'Technological Revolution',
    phase: 'mid',
    days: '16-20',
    story: 'With dragon materials in hand, it\'s time to embrace technology. Refined Storage will organize your growing empire, while TACZ guns provide the firepower to take on greater threats.',
    mainQuests: [
      {
        title: 'Digital Storage',
        description: 'Set up Refined Storage system',
        tasks: [
          'Mine quartz in the Nether',
          'Craft Controller and Disk Drive',
          'Create storage disks (1k to start)',
          'Set up Grid for access',
          'Connect external storage',
          'Configure auto-crafting'
        ],
        rewards: ['Infinite storage', 'Automation capability']
      },
      {
        title: 'Modern Warfare',
        description: 'Enter the age of firearms with TACZ',
        tasks: [
          'Build Gun Workbench',
          'Gather gunpowder from creepers',
          'Craft your first pistol',
          'Make ammunition',
          'Upgrade to rifle or shotgun',
          'Add scope for dragon hunting'
        ],
        rewards: ['Ranged superiority', 'Dragon hunting tools']
      }
    ],
    keyMods: ['Refined Storage', 'TACZ', 'Compact Machines'],
    tips: 'Start Compact Machines now - put farms inside to eliminate lag'
  },
  {
    id: 'chapter6',
    title: 'Empire Building',
    phase: 'mid',
    days: '21-30',
    story: 'Your power grows. Multiple dragons have fallen to your blade and bullets. It\'s time to build an empire worthy of your achievements, complete with security systems and spatial compression technology.',
    mainQuests: [
      {
        title: 'Pocket Dimensions',
        description: 'Master Compact Machines',
        tasks: [
          'Craft Personal Compact Machine',
          'Build Tiny machine for storage',
          'Create Normal machine for workshop',
          'Set up tunnels for item transfer',
          'Put all farms inside machines',
          'Eliminate lag forever'
        ],
        rewards: ['Infinite space', 'Zero lag']
      },
      {
        title: 'Fortress Security',
        description: 'Protect your base with SecurityCraft',
        tasks: [
          'Install keypad doors',
          'Set up camera network',
          'Create reinforced vault',
          'Place laser grids',
          'Hide fake keypads',
          'Password protect valuables'
        ],
        rewards: ['Impenetrable base', 'Peace of mind']
      }
    ],
    tips: 'Compact Machines can go inside each other. Infinite space!'
  },
  {
    id: 'chapter7',
    title: 'Masters of the Sky',
    phase: 'late',
    days: '31-40',
    story: 'The earth and dragons bow before you. Now conquer the skies themselves with physics-defying airships. Valkyrien Skies opens a new dimension of possibilities - literally.',
    mainQuests: [
      {
        title: 'First Flight',
        description: 'Build your first airship',
        tasks: [
          'Gather materials for ship',
          'Place Ship Helm for control',
          'Add balloons for lift (4+)',
          'Install propellers for movement',
          'Balance weight distribution',
          'Take maiden voyage'
        ],
        rewards: ['Flying capability', 'Mobile base potential']
      },
      {
        title: 'Dragon Breeding',
        description: 'Start your dragon army',
        tasks: [
          'Hatch saved dragon eggs',
          'Feed baby dragons constantly',
          'Wait for growth (or accelerate)',
          'Tame through feeding',
          'Craft dragon armor',
          'Build dragon roost at base'
        ],
        rewards: ['Dragon mount', 'Ultimate companion']
      }
    ],
    keyMods: ['Valkyrien Skies', 'Ice and Fire breeding'],
    tips: 'Ships work in space dimensions too. Plan ahead!'
  },
  {
    id: 'chapter8',
    title: 'Fueling Ambitions',
    phase: 'late',
    days: '41-50',
    story: 'The stars call to you. But first, you need fuel - lots of it. Oil hides in deserts and ocean depths, waiting to be refined into rocket fuel for your cosmic ambitions.',
    mainQuests: [
      {
        title: 'Black Gold',
        description: 'Establish oil production',
        tasks: [
          'Locate oil deposits (desert/ocean)',
          'Set up pump system',
          'Build refinery infrastructure',
          'Create fuel storage tanks',
          'Produce 1000+ buckets',
          'Automate the process'
        ],
        rewards: ['Fuel production', 'Space readiness']
      },
      {
        title: 'Ultimate Automation',
        description: 'Connect everything with Refined Storage',
        tasks: [
          'Wireless access everywhere',
          'Auto-crafting chains',
          'Cross-dimensional storage',
          'Pattern library complete',
          'External storage integrated',
          'Full automation achieved'
        ],
        rewards: ['Complete automation', 'Effortless resource management']
      }
    ],
    tips: 'You need ~500 buckets for Moon, plan for more'
  },
  {
    id: 'chapter9',
    title: 'Reaching for Stars',
    phase: 'late',
    days: '51-60',
    story: 'Everything has led to this moment. The NASA Workbench awaits, ready to forge your vessel to the stars. The Moon beckons as your first step into the infinite cosmos.',
    mainQuests: [
      {
        title: 'Rocket Science',
        description: 'Build your first rocket',
        tasks: [
          'Craft NASA Workbench',
          'Gather steel and components',
          'Assemble Tier 1 Rocket',
          'Build launch pad',
          'Create space suit',
          'Prepare oxygen tanks',
          'Load fuel (500+ buckets)'
        ],
        rewards: ['Space capability', 'Moon access']
      },
      {
        title: 'Final Preparations',
        description: 'Ready for space colonization',
        tasks: [
          'Stock food and supplies',
          'Prepare building materials',
          'Set up return waystone',
          'Create backup gear',
          'Plan moon base layout',
          'Say goodbye to Earth (temporarily)'
        ],
        rewards: ['Space ready', 'New chapter begins']
      }
    ],
    tips: 'Bring materials for waystone on Moon. You\'ll want fast travel.'
  },
  {
    id: 'chapter10',
    title: 'One Small Step',
    phase: 'space',
    days: '61-70',
    story: 'The rocket launches, gravity releases its hold, and you breach the atmosphere. The Moon awaits - your first colony among the stars. But this barren world holds secrets and treasures: Desh ore, alien structures, and the foundation for greater journeys.',
    mainQuests: [
      {
        title: 'Lunar Landing',
        description: 'Establish Moon base',
        tasks: [
          'Safe landing on Moon',
          'Set up oxygen bubble',
          'Build airlock entrance',
          'Create power generation',
          'Mine Desh ore',
          'Establish fuel production',
          'Build return rocket pad'
        ],
        rewards: ['Moon base', 'Desh equipment', 'Tier 2 rocket access']
      },
      {
        title: 'Lunar Expansion',
        description: 'Grow your Moon colony',
        tasks: [
          'Explore alien structures',
          'Set up automated mining',
          'Create food production',
          'Build observation deck',
          'Install waystone',
          'Prepare for Mars journey'
        ],
        rewards: ['Self-sufficient colony', 'Mars preparation']
      }
    ],
    dangers: ['No oxygen', 'Meteor showers', 'Low gravity'],
    tips: 'Low gravity = high jumps. Careful near cliffs!'
  },
  {
    id: 'chapter11',
    title: 'The Red Planet',
    phase: 'space',
    days: '71-80',
    story: 'Mars beckons with its rusty red surface and promises of Ostrum - a material stronger than diamond. Alien villages offer trade, while the polar ice caps provide water for terraforming dreams.',
    mainQuests: [
      {
        title: 'Martian Colony',
        description: 'Conquer Mars',
        tasks: [
          'Build Tier 2 Rocket with Desh',
          'Land on Mars',
          'Establish pressurized base',
          'Mine Ostrum ore',
          'Trade with Martian villagers',
          'Set up water extraction',
          'Create greenhouse dome'
        ],
        rewards: ['Ostrum gear', 'Tier 3 rocket access']
      }
    ],
    tips: 'Mars is perfect for a midpoint fuel depot'
  },
  {
    id: 'chapter12',
    title: 'Hell Among Stars',
    phase: 'space',
    days: '81-90',
    story: 'Venus - a hellworld of extreme heat and acid rain, but home to Calorite, the ultimate material. Only the brave dare its surface, but the rewards reshape destiny.',
    mainQuests: [
      {
        title: 'Venus Expedition',
        description: 'Survive the hellworld',
        tasks: [
          'Build Tier 3 Rocket with Ostrum',
          'Prepare heat protection',
          'Land on Venus',
          'Build underground shelter',
          'Mine Calorite ore',
          'Craft Calorite armor',
          'Establish extraction operation'
        ],
        rewards: ['Calorite equipment', 'Ultimate gear']
      }
    ],
    dangers: ['450°C surface', 'Acid rain', 'No water'],
    tips: 'Bring ALL water. None exists on Venus.'
  },
  {
    id: 'chapter13',
    title: 'Asteroid Mining',
    phase: 'space',
    days: '91-95',
    story: 'The asteroid belt - infinite resources floating in the void. Each rock holds concentrated ores, alien artifacts, and the wealth of the cosmos.',
    mainQuests: [
      {
        title: 'Belt Mining',
        description: 'Harvest the asteroids',
        tasks: [
          'Build Tier 4 Rocket with Calorite',
          'Navigate to asteroid belt',
          'Set up mining operation',
          'Explore multiple asteroids',
          'Find alien technology',
          'Establish transport route'
        ],
        rewards: ['Infinite resources', 'Alien tech']
      }
    ]
  },
  {
    id: 'chapter14',
    title: 'Space Emperor',
    phase: 'space',
    days: '96-100',
    story: 'From a survivor hiding underground from dragons, you\'ve become the emperor of space itself. Multiple planets bow to your colonies, dragons serve as your steeds, and the technology of the cosmos is yours to command. But the journey never truly ends - what will you build with infinite power?',
    mainQuests: [
      {
        title: 'The Final Frontier',
        description: 'Complete your space empire',
        tasks: [
          'Build orbital space station',
          'Connect all colonies with waystones',
          'Establish automated mining on every planet',
          'Create interplanetary logistics network',
          'Build dragon docking stations in space',
          'Achieve self-sufficiency everywhere',
          'Look back at Earth from the stars'
        ],
        rewards: ['Total mastery', 'Infinite possibilities', 'The universe is yours']
      }
    ],
    epilogue: 'You started with nothing but your fists, hiding from dragons in caves. Now you command fleets of airships, armies of dragons, and colonies across the solar system. The transformation is complete: from Survivor to Space Emperor. But in Minecraft, the only limit is imagination. What empire will you build among the stars?'
  }
];

// Milestones that unlock new possibilities
export const progressionMilestones = [
  {
    id: 'first_night',
    name: 'Survivor',
    day: 1,
    description: 'Survived first night',
    icon: '🏠'
  },
  {
    id: 'waystone_network',
    name: 'Traveler',
    day: 5,
    description: 'Activated first waystone',
    icon: '🗿'
  },
  {
    id: 'dragon_slayer',
    name: 'Dragon Slayer',
    day: 15,
    description: 'Killed first dragon',
    icon: '🐉'
  },
  {
    id: 'tech_master',
    name: 'Technologist',
    day: 20,
    description: 'Set up Refined Storage',
    icon: '💻'
  },
  {
    id: 'sky_captain',
    name: 'Sky Captain',
    day: 35,
    description: 'Built first airship',
    icon: '⛵'
  },
  {
    id: 'dragon_rider',
    name: 'Dragon Rider',
    day: 40,
    description: 'Tamed a dragon',
    icon: '🐲'
  },
  {
    id: 'oil_baron',
    name: 'Oil Baron',
    day: 45,
    description: 'Established fuel production',
    icon: '⛽'
  },
  {
    id: 'astronaut',
    name: 'Astronaut',
    day: 65,
    description: 'Reached the Moon',
    icon: '👨‍🚀'
  },
  {
    id: 'colonizer',
    name: 'Colonizer',
    day: 75,
    description: 'Colonized Mars',
    icon: '🏭'
  },
  {
    id: 'venus_survivor',
    name: 'Hell Walker',
    day: 85,
    description: 'Survived Venus',
    icon: '🔥'
  },
  {
    id: 'space_emperor',
    name: 'Space Emperor',
    day: 100,
    description: 'Conquered the solar system',
    icon: '👑'
  }
];

// Get current chapter based on day
export const getCurrentChapter = (day) => {
  return storyChapters.find(chapter => {
    const [minDay, maxDay] = chapter.days.split('-').map(d => parseInt(d));
    return day >= minDay && day <= (maxDay || 100);
  }) || storyChapters[0];
};

// Get completed milestones
export const getCompletedMilestones = (day) => {
  return progressionMilestones.filter(milestone => day >= milestone.day);
};

// Get next milestone
export const getNextMilestone = (day) => {
  return progressionMilestones.find(milestone => day < milestone.day);
};