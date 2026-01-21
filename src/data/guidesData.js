// COMPREHENSIVE GUIDES FOR EACH PHASE
export const phaseGuides = {
  early: {
    title: 'Early Game Survival Guide',
    subtitle: 'Days 1-10: From Hiding to Thriving',
    description: 'Your first days are the most dangerous. Dragons patrol the surface, Apotheosis mobs are stronger than vanilla, and you have nothing. This guide will keep you alive.',
    icon: '🌱',
    color: '#4caf50',

    sections: [
      {
        title: 'Day 1: Immediate Survival',
        content: `
### First Hour Critical Tasks
1. **Punch a tree** - Any BYG wood type works
2. **Make wooden tools** - Prioritize pickaxe and axe
3. **Find sheep** - You NEED a bed (3 wool minimum)
4. **Gather food** - Apples, animals, anything edible
5. **DIG UNDERGROUND** - Before sunset!

### Why Underground?
- Dragons spawn naturally on the surface
- They're most active at night
- Dragon roosts look like large hills
- You CANNOT fight them yet
- Underground = Safe

### First Night Checklist
- ✅ Underground room (at least 5x5x3)
- ✅ Door sealed
- ✅ Torches placed (monsters spawn in darkness)
- ✅ Crafting table and furnace
- ✅ Bed placed (to skip night)
- ✅ Emergency exit tunnel started
        `,
        tips: [
          'Listen for dragon roars - means danger nearby',
          'ALWAYS carry a shield once crafted',
          'Mark your base entrance clearly',
          'Keep digging down to find coal/iron'
        ]
      },
      {
        title: 'Days 2-3: Establishing Base',
        content: `
### Mining Strategy
- **Y=40-50**: Best for iron and coal
- **Y=0-16**: Copper for TACZ ammo later
- **Y=-59**: Diamonds (save for later)
- **Strip mining**: 2-high tunnels, 3 blocks apart

### Base Expansion
1. **Main Room**: 9x9x3 minimum
2. **Storage Area**: Place chests organized by type
3. **Farming Room**: Underground wheat/carrots
4. **Mine Entrance**: Direct access to mining
5. **Emergency Exit**: Always have two ways out

### Essential Crafts
- Stone tools (full set)
- Furnaces (3-5 for smelting)
- Chests (10+ for organization)
- Doors (keep mobs out)
- Shield (CRITICAL for survival)
        `,
        tips: [
          'Cook all food immediately',
          'Make charcoal if coal is scarce',
          'Water bucket = lifesaver',
          'Start organizing chests NOW'
        ]
      },
      {
        title: 'Days 4-5: Village Discovery',
        content: `
### Finding Villages (PRIORITY #1)
- **Why?** Every village has a WAYSTONE
- **Waystones** = Fast travel network
- **Strategy**: Follow rivers, plains, and savannas
- **Time**: Only explore during DAYLIGHT
- **Preparation**: Bring food, tools, and blocks

### Village Benefits
1. **Waystone**: Instant travel back to base
2. **Trading**: Emeralds for resources
3. **Beds**: Free wool from beds
4. **Food**: Crops and hay bales
5. **Safety**: Lit up area at night

### Waystone Setup
1. Right-click to activate
2. Name it clearly (e.g., "Spawn Village")
3. Craft Warp Stone for portable use
4. Share with teammates if multiplayer
        `,
        modIntegration: ['Waystones', 'Oh The Biomes You\'ll Go'],
        dangers: ['Getting lost', 'Dragon encounters', 'Pillager patrols']
      },
      {
        title: 'Days 6-7: First Backpack',
        content: `
### Sophisticated Backpack Crafting
**Recipe**: 7 Leather + 1 Chest + 1 String (center)

### Why Rush Backpack?
- 27 extra inventory slots
- Can be upgraded later
- Place as block for access
- Keeps items on death (config)

### Getting Leather
- Hunt cows, horses, llamas
- Fish for leather (rare)
- Trade with villagers
- Loot from structures

### First Upgrades (Priority)
1. **Pickup Upgrade**: Auto-collects items
2. **Magnet Upgrade**: Pulls items to you
3. **Stack Upgrade**: More storage slots
        `,
        modIntegration: ['Sophisticated Backpacks'],
        tips: [
          'Dye your backpack for style',
          'Shift+Right-click to open without placing',
          'Upgrade to Iron Backpack ASAP'
        ]
      },
      {
        title: 'Days 8-10: Power Foundation',
        content: `
### Diamond Mining
- **Depth**: Y=-59 to Y=-64 (1.20 levels)
- **Method**: Strip mining or cave exploring
- **Goal**: 10+ diamonds minimum
- **Priority**: Pickaxe > Sword > Armor

### Enchanting Setup (Apotheosis)
1. **Enchanting Table**: 4 Obsidian + 2 Diamonds + 1 Book
2. **Bookshelves**: Need 15 for max level
3. **XP Farm**: Simple mob spawner or manual grinding
4. **Apotheosis Benefits**: Enchantments go beyond vanilla!

### Must-Have Enchantments
- **Armor**: Protection IV+ (Apotheosis allows higher!)
- **Sword**: Sharpness V, Looting III
- **Pickaxe**: Efficiency V, Fortune III
- **Bow**: Power V, Infinity

### Preparation for Mid-Game
- ✅ Full iron armor (minimum)
- ✅ Diamond tools
- ✅ Enchanting setup
- ✅ Waystone network (2+ points)
- ✅ Sophisticated Backpack
- ✅ Sustainable food farm
- ✅ 20+ levels of XP
        `,
        modIntegration: ['Apotheosis'],
        nextPhase: 'You\'re ready to fight your first dragon!'
      }
    ],

    dangerZones: [
      {
        name: 'Surface at Night',
        threat: 'EXTREME',
        reason: 'Dragons + Apotheosis mobs',
        strategy: 'Stay underground'
      },
      {
        name: 'Mountains/Hills',
        threat: 'HIGH',
        reason: 'Dragon roosts',
        strategy: 'Scout from distance'
      },
      {
        name: 'Deep Caves',
        threat: 'MEDIUM',
        reason: 'Spawners and ravines',
        strategy: 'Light up thoroughly'
      }
    ],

    essentialMods: [
      'Waystones',
      'Sophisticated Backpacks',
      'Apotheosis',
      'Oh The Biomes You\'ll Go'
    ],

    checklistSummary: [
      'Underground base established',
      'Village waystone found',
      'Sophisticated Backpack crafted',
      'Iron armor acquired',
      'Diamond tools obtained',
      'Enchanting setup built',
      'Food farm operational',
      'Ready for dragon hunting'
    ]
  },

  mid: {
    title: 'Mid Game Power Guide',
    subtitle: 'Days 10-30: Dragons, Guns, and Technology',
    description: 'Time to stop hiding and start conquering. You\'ll kill dragons, harness their power, and embrace advanced technology.',
    icon: '⚔️',
    color: '#ff9800',

    sections: [
      {
        title: 'Dragon Hunting Preparation',
        content: `
### Pre-Fight Requirements (NON-NEGOTIABLE)
- **Armor**: Full Protection IV Diamond (Apotheosis enchants)
- **Weapons**:
  - Diamond Sword (Sharpness V+)
  - Power V Bow + 3 stacks arrows
  - Shield (multiple backups)
- **Consumables**:
  - Fire Resistance Potions (8+)
  - Golden Apples (5+)
  - Ender Pearls (16+)
  - Food (2 stacks)
- **Blocks**: 2 stacks for pillaring

### Dragon Types & Difficulty
**Tier 1-2** (Starter Dragons)
- 100-200 HP
- Surface roosts
- Manageable with diamond gear
- Good for first kill

**Tier 3-4** (Dangerous)
- 300-400 HP
- Larger roosts, deeper
- Need enchanted diamond
- Better loot drops

### Finding Dragons
1. **Surface Roosts**: Look like large dirt hills
2. **Listen**: Dragons roar periodically
3. **Time**: They sleep at night (easier)
4. **Biomes**: Mountains, deserts, forests
        `,
        tips: [
          'SAVE DRAGON EGGS - only drop once!',
          'Dragon blood + bottle = Fire Resistance',
          'Different colored dragons = different scales'
        ]
      },
      {
        title: 'Dragon Combat Strategy',
        content: `
### Ranged Method (SAFEST)
1. **Find roost** - Approach carefully
2. **Dig tunnel** - 50+ blocks away, 1 block view hole
3. **Shoot dragon** - It will emerge angry
4. **Pillar up** - 20-30 blocks high
5. **Shoot from pillar** - Dragon circles you
6. **Dodge breath** - Jump down and pearl back up
7. **Repeat** - Until dragon dies

### Melee Method (RISKY BUT FASTER)
1. **Drink Fire Resistance**
2. **Approach from behind/side**
3. **Hit back legs** - Safe spot
4. **Block with shield** - For bites
5. **Run during breath attack**
6. **Ender pearl** - Emergency escape

### Loot Priority
- **Dragon Scales**: Armor crafting (color matters!)
- **Dragon Bones**: Tools and weapons
- **Dragon Blood**: Fire/Ice weapons
- **Dragon Heart**: Crafting ingredient
- **Dragon Egg**: KEEP FOR TAMING!

### Post-Fight
- Harvest dragon corpse (right-click with empty hand)
- Mine dragon roost for gold/emeralds
- Mark location (dragons respawn after 10 days)
        `,
        modIntegration: ['Ice and Fire'],
        dangers: ['Dragon breath', 'Fall damage', 'Getting trapped']
      },
      {
        title: 'TACZ Weapons System',
        content: `
### Getting Started with Guns
**Gun Workbench Recipe**:
- 6x Iron Ingots (sides)
- 2x Redstone Dust (top)
- 1x Crafting Table (center)

### Ammunition Basics
**Components Needed**:
- Gunpowder (Creepers/Ghasts)
- Lead/Iron (bullets)
- Brass (Copper + Zinc)
- Casings (crafted)

### Weapon Progression
1. **Pistol** (Starter)
   - Cheap to craft
   - Low damage, high mobility
   - Good for practice

2. **Shotgun** (Close Range)
   - Devastating up close
   - Great for dungeons
   - Multiple pellets

3. **Rifle** (Balanced)
   - Good damage and range
   - Versatile choice
   - Accepts many attachments

4. **Sniper** (Dragon Killer)
   - Extreme range
   - High damage
   - HEADSHOTS = 3x damage!

### Essential Attachments
- **Scope**: Critical for dragons
- **Extended Magazine**: More shots
- **Suppressor**: Stealth operations
- **Grip**: Accuracy improvement
        `,
        modIntegration: ['TACZ'],
        tips: [
          'Headshots work on dragons!',
          'Craft ammo in bulk',
          'Different ammo types for different situations'
        ]
      },
      {
        title: 'Refined Storage Setup',
        content: `
### Core Components
1. **Controller** (Brain)
   - 4x Quartz + 4x Iron + 1x Silicon
   - Needs constant power
   - One per network

2. **Disk Drive** (Storage)
   - Holds up to 8 disks
   - Different disk sizes (1k, 4k, 16k, 64k)
   - Start with 1k disks

3. **Grid** (Interface)
   - Access your items
   - Crafting grid built-in
   - Search functionality

4. **Cables** (Connection)
   - Connect all components
   - Can go through walls
   - Use importers/exporters

### Power Generation Options
- Coal Generator (early)
- Lava Generator (Nether)
- Solar Panels (passive)
- Ad Astra Solar (later)

### Auto-Crafting Setup
1. Place Crafter connected to network
2. Create patterns in Pattern Grid
3. Insert patterns into Crafter
4. Request items through Grid
5. System crafts automatically!

### Storage Tips
- Use External Storage for existing chests
- Priorities prevent overflow
- Fluid storage for liquids
- Wireless Grid for remote access
        `,
        modIntegration: ['Refined Storage'],
        nextStep: 'Connect everything for full automation'
      },
      {
        title: 'Compact Machines',
        content: `
### Why Compact Machines?
- Infinite space in one block
- ELIMINATES lag completely
- Perfect for farms
- Portable with Personal Machine

### Size Tiers & Uses
- **Tiny (3x3x3)**: Item storage
- **Small (5x5x5)**: Basic machines
- **Normal (7x7x7)**: Workshops
- **Large (9x9x9)**: Mob farms
- **Giant (11x11x11)**: Full factories
- **Maximum (13x13x13)**: Entire bases

### Tunnel System
**Types**:
- Item Tunnels (hoppers/pipes)
- Fluid Tunnels (tanks)
- Redstone Tunnels (signals)
- RF Tunnels (power)

**Setup**:
1. Place tunnel on wall inside machine
2. Right-click to configure side
3. Connect with pipes/cables outside
4. Items/fluids/power flows through!

### Best Uses
- Mob grinders (no lag!)
- Refined Storage room
- Smelting arrays
- Tree farms
- Animal farms
- Workshop spaces

### Pro Tip: Nesting
- Machines can go INSIDE machines
- Exponential space increase
- Maximum inside Maximum = 169x space!
        `,
        modIntegration: ['Compact Machines'],
        tips: [
          'Always keep Personal Machine in hotbar',
          'Name your machines clearly',
          'Color code tunnels for organization'
        ]
      }
    ],

    powerSpikes: [
      {
        name: 'First Dragon Kill',
        impact: 'MASSIVE',
        unlocks: ['Dragon scales', 'Dragon weapons', 'Dragon blood'],
        nextGoal: 'Dragon steel equipment'
      },
      {
        name: 'TACZ Rifle',
        impact: 'HIGH',
        unlocks: ['Ranged superiority', 'Safer dragon hunting'],
        nextGoal: 'Sniper rifle with scope'
      },
      {
        name: 'Refined Storage',
        impact: 'HIGH',
        unlocks: ['Infinite storage', 'Autocrafting'],
        nextGoal: 'Full automation'
      }
    ],

    essentialMods: [
      'Ice and Fire',
      'TACZ',
      'Refined Storage',
      'Compact Machines',
      'Apotheosis'
    ]
  },

  late: {
    title: 'Late Game Mastery Guide',
    subtitle: 'Days 30-60: Ships, Oil, and Space Preparation',
    description: 'Master the skies with physics-based ships, establish fuel production, and prepare for your journey to the stars.',
    icon: '🏭',
    color: '#7b2cbf',

    sections: [
      {
        title: 'Valkyrien Skies Airships',
        content: `
### Understanding Ship Physics
- Real weight and balance matter
- Too heavy = won't fly
- Unbalanced = tips over
- Collision with terrain = damage
- Can enter Compact Machines!

### First Airship Build
**Materials Needed**:
- 200+ Wood (frame)
- 50+ Wool (balloons)
- Iron (propellers)
- Redstone (engines)
- Ship Helm (control)

### Building Process
1. **Build frame** on ground (start 10x10)
2. **Place Ship Assembler** in center
3. **Add Ship Helm** for control
4. **Attach 4+ balloons** (symmetrical!)
5. **Add 2+ propellers** (front/back)
6. **Right-click assembler** to create ship
7. **Board helm** to fly!

### Balance Tips
- Keep weight centered
- Balloons on edges for stability
- Heavy items low (storage)
- Test before adding more

### Ship Types to Build
**Scout Ship** (Small, fast)
**Cargo Hauler** (Maximum storage)
**Combat Vessel** (TACZ turrets)
**Mobile Base** (Everything onboard)
**Dragon Carrier** (Landing platforms)
        `,
        modIntegration: ['Valkyrien Skies', 'Eureka Ships'],
        tips: [
          'Ships work in space dimensions!',
          'Can dock at space stations',
          'Dragons can land on ships'
        ]
      },
      {
        title: 'Oil Production & Refining',
        content: `
### Finding Oil (CRITICAL FOR SPACE)
**Locations**:
- Desert surface pools (easiest)
- Ocean floor (lots of oil)
- Rivers (occasionally)
- Underground (rare)

### Extraction Setup
1. **Pump** at oil source
2. **Pipes** to transport
3. **Tanks** for storage (1000+ buckets)
4. **Multiple sources** recommended

### Refinery Process
**Oil → Fuel Conversion**:
1. Build Refinery (needs power)
2. Input oil from tanks
3. Process into rocket fuel
4. Store in fuel tanks
5. Need 500+ buckets for Moon!

### Fuel Requirements by Destination
- **Moon**: 500 buckets
- **Mars**: 750 buckets
- **Venus**: 1000 buckets
- **Asteroids**: 1250 buckets

### Automation Tips
- Use Refined Storage for monitoring
- Export buses for auto-processing
- Import buses from pumps
- Level emitters for alerts
        `,
        tips: [
          'Always overproduce fuel',
          'Build fuel depot on Moon',
          'Oil is not renewable - find multiple sources'
        ]
      },
      {
        title: 'Dragon Breeding Program',
        content: `
### Hatching Dragon Eggs
**Requirements by Type**:
- Fire Dragon: Place on Netherrack
- Ice Dragon: Place on Packed Ice
- Lightning: Place on Copper Blocks

**Process**:
1. Place egg on blocks
2. Wait 2 Minecraft days
3. Egg wiggles when ready
4. Right-click to hatch
5. IMMEDIATELY feed meat!

### Raising Baby Dragons
- Feed every few minutes (Stage 1)
- Takes 60 days to fully grow
- Dragon Meal accelerates growth
- Stays where hatched until Stage 3
- Stage 3+ can be ridden

### Dragon Meal Recipe
- 8x Dragon Bones (surrounding)
- 1x Dragon Heart (center)
- Speeds growth 2x per feeding
- Max 5 per day

### Breeding Dragons
**Requirements**:
- 2 adult dragons (Stage 5)
- Opposite genders
- Dragon Meal for breeding
- Enclosed space (obsidian)

**Results**:
- Egg inherits parent traits
- Color mixing possible
- Stats average of parents
- Rare mutations occur
        `,
        modIntegration: ['Ice and Fire'],
        endgoal: 'Army of dragons for space conquest'
      },
      {
        title: 'Ultimate Base Security',
        content: `
### SecurityCraft Fortress Design

**Layer 1: Detection (100 blocks)**
- Motion sensors
- Portable radars
- Hidden cameras

**Layer 2: Deterrence (50 blocks)**
- Fake keypads (confusion)
- Alarm systems
- Warning signs

**Layer 3: Defense (25 blocks)**
- Laser grids
- Reinforced fences
- Arrow dispensers

**Layer 4: Elimination (10 blocks)**
- Real mines (hidden)
- Cage traps
- Sentry turrets

**Layer 5: Fortress (0 blocks)**
- Reinforced walls (unbreakable)
- Keypad doors
- Retinal scanners
- Password chests

### Camera Network
- Place cameras at all angles
- Hidden in walls (see through)
- Monitor room with screens
- Remote viewing capability

### Vault Design
- Reinforced block construction
- Multiple authentication
- Decoy vaults with traps
- Real vault in Compact Machine
- Self-destruct option
        `,
        modIntegration: ['SecurityCraft'],
        proTip: 'Cameras see through walls - hide them!'
      },
      {
        title: 'Space Preparation Checklist',
        content: `
### NASA Workbench & Rocket Building
**NASA Workbench Recipe**:
- 7x Steel Plates
- 1x Crafting Table
- 1x Lever

**Tier 1 Rocket Components**:
- Nose Cone (1)
- Body Segments (4-6)
- Fins (4)
- Engine (1)
- Fuel Tanks (2-3)

### Launch Infrastructure
1. **Launch Pad** (9x9 minimum)
2. **Fuel Loader** next to pad
3. **Oxygen Loader** for suits
4. **Power generation** for systems
5. **Storage** for supplies

### Space Suit & Life Support
**Space Suit** (full set needed):
- Helmet (oxygen supply)
- Chestplate (temperature)
- Leggings (protection)
- Boots (magnetic)

**Oxygen System**:
- Oxygen Tanks (10+)
- Oxygen Loader
- Oxygen Compressor
- Bring materials for bubble!

### What to Bring to Moon
ESSENTIALS:
- Building blocks (5+ stacks)
- Oxygen gear (redundant)
- Food (3+ stacks)
- Waystone materials
- Power generation
- Airlock materials
- Return fuel (or make there)

### Final Checks
□ 1000+ buckets fuel ready
□ Space suit fully repaired
□ Oxygen tanks filled
□ Food supplies stocked
□ Building materials packed
□ Waystone at launch pad
□ Backup gear prepared
□ Friends notified (multiplayer)
□ Screenshots taken
□ READY FOR SPACE!
        `,
        modIntegration: ['Ad Astra'],
        nextPhase: 'The stars await!'
      }
    ],

    megaProjects: [
      {
        name: 'Orbital Launch Platform',
        description: 'Valkyrien Skies platform at build height',
        benefits: 'Launch to space from the sky'
      },
      {
        name: 'Underground Dragon Sanctuary',
        description: 'Breed all dragon types',
        benefits: 'Dragon army for space'
      },
      {
        name: 'Automated Everything',
        description: 'Full Refined Storage automation',
        benefits: 'Focus on exploration'
      }
    ]
  },

  space: {
    title: 'Space Conquest Guide',
    subtitle: 'Days 60+: From Moon to Emperor',
    description: 'Your destiny among the stars awaits. Build rockets, establish colonies, and become emperor of the solar system.',
    icon: '🚀',
    color: '#00d4ff',

    sections: [
      {
        title: 'First Launch & Moon Landing',
        content: `
### Pre-Launch Final Checks
□ Rocket on launch pad
□ Fuel loaded (500+ buckets)
□ Space suit equipped
□ Oxygen tanks full (10+)
□ Inventory organized
□ Building materials packed
□ Food supplies ready

### Launch Sequence
1. Enter rocket (right-click)
2. Press SPACE to launch
3. Hold SPACE to continue thrust
4. Reach orbit
5. Select Moon destination
6. Land carefully (fall damage!)

### Immediate Moon Priorities
1. **Find safe landing spot** (flat area)
2. **Place oxygen distributor** IMMEDIATELY
3. **Build airlock entrance** (2 doors)
4. **Set up power** (solar panels work great)
5. **Create sealed room** (no gaps!)
6. **Place crafting stations**

### Moon Resources
- **Desh Ore** (Y=0-30) - Essential!
- **Cheese** (food source)
- **Ice** (melt for water)
- **Moon Stone** (building)
- **Alien Structures** (loot)

### Moon Base Essentials
- Oxygen bubble generator
- Power system (solar)
- Airlock (never forget!)
- Storage room
- Desh mining tunnel
- Fuel production setup
- Launch pad for return
        `,
        dangers: [
          'No oxygen (constant threat)',
          'Meteor showers',
          'Low gravity (fall carefully)',
          'Getting stranded (bring fuel!)'
        ]
      },
      {
        title: 'Mars Colonization',
        content: `
### Tier 2 Rocket Requirements
- Built with Desh from Moon
- 750 buckets fuel
- Better oxygen capacity
- Room for more cargo

### Mars Advantages
- Water ice at poles
- Better gravity than Moon
- Alien villages for trading
- Ostrum ore (better than diamond)
- Good midpoint for fuel depot

### Mars Base Setup
**Priority Structures**:
1. Pressurized habitat
2. Greenhouse dome (food)
3. Ice mining operation
4. Ostrum processing
5. Fuel refinery
6. Trading post

### Ostrum Gear Crafting
- Stronger than diamond
- Required for Tier 3 rocket
- Makes excellent armor
- Tools never break (almost)

### Terraforming Potential
- Plant trees in domes
- Create water sources
- Build underground farms
- Establish ecosystem
        `,
        modIntegration: ['Ad Astra'],
        nextGoal: 'Venus expedition preparation'
      },
      {
        title: 'Venus Hell Dive',
        content: `
### WARNING: EXTREME ENVIRONMENT
- Surface temp: 450°C
- Acid rain destroys gear
- NO water anywhere
- High pressure slows movement
- Calorite ore makes it worth it!

### Preparation Requirements
- Tier 3 Rocket (Ostrum built)
- Netherite space suit (minimum)
- Fire Resistance potions (20+)
- All water needs (no sources!)
- Underground base materials
- Heat shielding blocks

### Venus Survival Strategy
1. **Land quickly** (minimize exposure)
2. **Dig down immediately**
3. **Build underground only**
4. **Never surface during rain**
5. **Mine Calorite deep**
6. **Extract and leave fast**

### Calorite Benefits
- Best material in game
- Unbreakable tools (nearly)
- Ultimate armor
- Required for Tier 4 rocket
- Status symbol!

### Base Design
- Deep underground (Y=30 or lower)
- Multiple airlocks
- Heat dispersal systems
- Emergency escape route
- Minimal surface exposure
        `,
        survivalTip: 'This is the hardest planet. Over-prepare!'
      },
      {
        title: 'Asteroid Mining Empire',
        content: `
### Tier 4 Rocket (Ultimate Vessel)
- Built with Calorite
- 1250 buckets fuel
- Maximum cargo space
- All planets accessible

### Asteroid Belt Features
- Hundreds of asteroids
- Each has concentrated ores
- No hostile mobs
- Zero gravity
- Alien technology

### Mining Strategy
1. **Scout multiple asteroids**
2. **Mark rich ones**
3. **Set up collection system**
4. **Use scaffolding for movement**
5. **Watch oxygen constantly**
6. **Transport ores to processing**

### Found on Asteroids
- Diamond clusters
- Gold veins
- Iron mountains
- Rare minerals
- Alien artifacts
- Unique resources

### Zero-G Tips
- Magnetic boots recommended
- Tether to asteroid
- Don't jump carelessly
- Mark your ship!
- Bring extra oxygen
        `,
        endGame: 'Infinite resources achieved!'
      },
      {
        title: 'Space Station & Empire',
        content: `
### Orbital Space Station
**Construction Steps**:
1. Choose orbit (Earth/Moon/Mars)
2. Build in space (creative flying)
3. Seal all rooms for oxygen
4. Multiple docking ports
5. Solar panel arrays
6. Observation deck

**Station Modules**:
- Command center
- Living quarters
- Research lab
- Manufacturing
- Dragon hangar (yes!)
- Storage bays
- Teleportation hub

### Interplanetary Network
**Connect Everything**:
- Waystone on each planet
- Fuel depots everywhere
- Resource pipelines
- Automated mining
- Transport ships
- Communication array

### Dragon Space Operations
- Dragons survive in oxygen bubbles
- Can fly between close asteroids
- Perfect for mining operations
- Space dragon armor exists!
- Ultimate status symbol

### The Final Achievement
**You've Become**:
- Master of technology
- Conqueror of dragons
- Explorer of planets
- Builder of empires
- Emperor of Space

### What Now?
- Build Death Star (VS + Compact)
- Terraform planets
- Create space navy
- Establish trade routes
- Help new players
- Start creative projects
- The universe is yours!
        `,
        modIntegration: ['Ad Astra', 'Valkyrien Skies', 'Ice and Fire'],
        finalWords: 'From caves to cosmos - your journey is complete!'
      }
    ],

    planetData: [
      {
        name: 'Moon',
        gravity: '0.16g',
        atmosphere: 'None',
        temperature: '-173°C to 127°C',
        resources: ['Desh', 'Cheese', 'Ice'],
        difficulty: 'MEDIUM'
      },
      {
        name: 'Mars',
        gravity: '0.38g',
        atmosphere: 'Thin CO2',
        temperature: '-63°C average',
        resources: ['Ostrum', 'Ice', 'Iron'],
        difficulty: 'MEDIUM'
      },
      {
        name: 'Venus',
        gravity: '0.91g',
        atmosphere: 'Toxic',
        temperature: '450°C',
        resources: ['Calorite'],
        difficulty: 'EXTREME'
      },
      {
        name: 'Asteroids',
        gravity: 'Micro',
        atmosphere: 'None',
        temperature: 'Varies',
        resources: ['Everything'],
        difficulty: 'HARD'
      }
    ]
  }
};

// Export functions for guide access
export const getGuideByPhase = (phase) => {
  return phaseGuides[phase] || phaseGuides.early;
};

export const getAllGuides = () => {
  return Object.values(phaseGuides);
};

export const getGuideSection = (phase, sectionIndex) => {
  const guide = phaseGuides[phase];
  return guide ? guide.sections[sectionIndex] : null;
};