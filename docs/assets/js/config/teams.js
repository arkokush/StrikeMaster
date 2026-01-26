/**
 * Centralized Teams Configuration
 * Contains all team information including logos and school colors
 */

const TEAMS_CONFIG = {
  // Bergen Catholic High School - Maroon and Gold
  'bergen catholic': {
    name: 'Bergen Catholic High School',
    shortName: 'Bergen Catholic',
    logo: 'bcLogo.png',
    accentColor: '#8B0000', // Maroon
    mainColor: '#FFD700'    // Gold
  },
  // Bergenfield High School - Blue and Gold
  'bergenfield': {
    name: 'Bergenfield High School',
    shortName: 'Bergenfield',
    logo: 'bergenfieldLogo.png',
    accentColor: '#003366', // Navy Blue
    mainColor: '#FFD700'    // Gold
  },
  // Cliffside Park - Red and Black
  'cliffside park': {
    name: 'Cliffside Park High School',
    shortName: 'Cliffside Park',
    logo: 'cpLogo.png',
    accentColor: '#CC0000', // Red
    mainColor: '#000000'    // Black
  },
  // Clifton High School - Maroon and White
  'clifton': {
    name: 'Clifton High School',
    shortName: 'Clifton',
    logo: 'clifLogo.png',
    accentColor: '#800000', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // Demarest (Northern Valley Regional at Demarest) - Blue and Gold
  'demarest': {
    name: 'Northern Valley Regional High School at Demarest',
    shortName: 'Demarest',
    logo: 'nvdLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // DePaul Catholic - Green and Gold
  'depaul catholic': {
    name: 'DePaul Catholic High School',
    shortName: 'DePaul Catholic',
    logo: 'depLogo.png',
    accentColor: '#006400', // Green
    mainColor: '#FFD700'    // Gold
  },
  // Dumont High School - Maroon and White
  'dumont': {
    name: 'Dumont High School',
    shortName: 'Dumont',
    logo: 'dumontLogo.png',
    accentColor: '#800000', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // Dwight Morrow High School (Englewood) - Maroon and Gold
  'dwight morrow': {
    name: 'Dwight Morrow High School',
    shortName: 'Dwight Morrow',
    logo: 'dmLogo.png',
    accentColor: '#722F37', // Maroon
    mainColor: '#FFD700'    // Gold
  },
  // Fair Lawn High School - Maroon and White
  'fair lawn': {
    name: 'Fair Lawn High School',
    shortName: 'Fair Lawn',
    logo: 'flLogo.png',
    accentColor: '#800000', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // Hackensack High School - Orange and Black
  'hackensack': {
    name: 'Hackensack High School',
    shortName: 'Hackensack',
    logo: 'hackLogo.png',
    accentColor: '#FF6600', // Orange
    mainColor: '#000000'    // Black
  },
  // Holy Angels - Blue and White
  'holy angels': {
    name: 'Academy of the Holy Angels',
    shortName: 'Holy Angels',
    logo: 'ihaLogo.png', // Sharing with IHA for now
    accentColor: '#003366', // Navy Blue
    mainColor: '#FFFFFF'    // White
  },
  // Immaculate Heart Academy - Blue and White
  'immaculate heart academy': {
    name: 'Immaculate Heart Academy',
    shortName: 'Immaculate Heart',
    logo: 'ihaLogo.png',
    accentColor: '#003366', // Navy Blue
    mainColor: '#FFFFFF'    // White
  },
  'iha': {
    name: 'Immaculate Heart Academy',
    shortName: 'Immaculate Heart',
    logo: 'ihaLogo.png',
    accentColor: '#003366',
    mainColor: '#FFFFFF'
  },
  // Indian Hills High School - Red and Black
  'indian hills': {
    name: 'Indian Hills High School',
    shortName: 'Indian Hills',
    logo: 'ihLogo.png',
    accentColor: '#CC0000', // Red
    mainColor: '#000000'    // Black
  },
  'ih': {
    name: 'Indian Hills High School',
    shortName: 'Indian Hills',
    logo: 'ihLogo.png',
    accentColor: '#CC0000',
    mainColor: '#000000'
  },
  // Lakeland Regional High School - Blue and Gold
  'lakeland': {
    name: 'Lakeland Regional High School',
    shortName: 'Lakeland',
    logo: 'llLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // Mahwah High School - Red and Black
  'mahwah': {
    name: 'Mahwah High School',
    shortName: 'Mahwah',
    logo: 'mahLogo.png',
    accentColor: '#C41E3A', // Red
    mainColor: '#1C1C1C'    // Black
  },
  // Northern Highlands Regional High School - Blue and Gold
  'northern highlands': {
    name: 'Northern Highlands Regional High School',
    shortName: 'Northern Highlands',
    logo: 'nhLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // Old Tappan (Northern Valley Regional at Old Tappan) - Green and Gold
  'old tappan': {
    name: 'Northern Valley Regional High School at Old Tappan',
    shortName: 'Old Tappan',
    logo: 'nvotLogo.png',
    accentColor: '#006633', // Green
    mainColor: '#FFD700'    // Gold
  },
  // Paramus Catholic High School - Blue and Gold
  'paramus catholic': {
    name: 'Paramus Catholic High School',
    shortName: 'Paramus Catholic',
    logo: 'pcLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // Paramus High School - Maroon and White
  'paramus': {
    name: 'Paramus High School',
    shortName: 'Paramus',
    logo: 'paramusLogo.png',
    accentColor: '#800000', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // Pascack Hills High School - Orange and Brown
  'pascack hills': {
    name: 'Pascack Hills High School',
    shortName: 'Pascack Hills',
    logo: 'phLogo.png',
    accentColor: '#FFA500', // Orange
    mainColor: '#5F371C'    // Brown
  },
  'pascack hills alt': {
    name: 'Pascack Hills High School (Alt)',
    shortName: 'Pascack Hills Alt',
    logo: 'PascackHills2.png',
    accentColor: '#FFA500', // Orange
    mainColor: '#5F371C'    // Brown
  },
  'ph': {
    name: 'Pascack Hills High School',
    shortName: 'Pascack Hills',
    logo: 'phLogo.png',
    accentColor: '#FFA500',
    mainColor: '#5F371C'
  },
  // Pascack Valley High School - Gold and Black
  'pascack valley': {
    name: 'Pascack Valley High School',
    shortName: 'Pascack Valley',
    logo: 'pvLogo.png',
    accentColor: '#FFD700', // Gold
    mainColor: '#000000'    // Black
  },
  'pv': {
    name: 'Pascack Valley High School',
    shortName: 'Pascack Valley',
    logo: 'pvLogo.png',
    accentColor: '#FFD700',
    mainColor: '#000000'
  },
  // Passaic County Technical Institute - Red and Gray
  'passaic county technical institute': {
    name: 'Passaic County Technical Institute',
    shortName: 'PCTI',
    logo: 'pctiLogo.png',
    accentColor: '#CC0000', // Red
    mainColor: '#4A4A4A'    // Gray
  },
  'pcti': {
    name: 'Passaic County Technical Institute',
    shortName: 'PCTI',
    logo: 'pctiLogo.png',
    accentColor: '#CC0000',
    mainColor: '#4A4A4A'
  },
  // Passaic High School - Blue and Gold
  'passaic': {
    name: 'Passaic High School',
    shortName: 'Passaic',
    logo: 'passaicLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // Passaic Valley High School - Green and White
  'passaic valley': {
    name: 'Passaic Valley High School',
    shortName: 'Passaic Valley',
    logo: 'passaicvalLogo.png',
    accentColor: '#006633', // Green
    mainColor: '#FFFFFF'    // White
  },
  // Paterson Eastside High School - Red and White
  'paterson eastside': {
    name: 'Paterson Eastside High School',
    shortName: 'Paterson Eastside',
    logo: 'pateastLogo.png',
    accentColor: '#CC0000', // Red
    mainColor: '#FFFFFF'    // White
  },
  // Ramapo High School - Green and Gold
  'ramapo': {
    name: 'Ramapo High School',
    shortName: 'Ramapo',
    logo: 'ramapoLogo.png',
    accentColor: '#006633', // Green
    mainColor: '#FFD700'    // Gold
  },
  // Ramsey High School - Green and White
  'ramsey': {
    name: 'Ramsey High School',
    shortName: 'Ramsey',
    logo: 'ramLogo.png',
    accentColor: '#006400', // Green
    mainColor: '#FFFFFF'    // White
  },
  // Ridgefield Park High School - Scarlet and Gray
  'ridgefield park': {
    name: 'Ridgefield Park High School',
    shortName: 'Ridgefield Park',
    logo: 'rpLogo.png',
    accentColor: '#CC0033', // Scarlet
    mainColor: '#4A4A4A'    // Gray
  },
  // Ridgewood High School - Maroon and White
  'ridgewood': {
    name: 'Ridgewood High School',
    shortName: 'Ridgewood',
    logo: 'ridgeLogo.png',
    accentColor: '#722F37', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // River Dell Regional High School - Gold and Green
  'river dell': {
    name: 'River Dell Regional High School',
    shortName: 'River Dell',
    logo: 'rdLogo.png',
    accentColor: '#FFD700', // Gold
    mainColor: '#006633'    // Green
  },
  'rd': {
    name: 'River Dell Regional High School',
    shortName: 'River Dell',
    logo: 'rdLogo.png',
    accentColor: '#FFD700',
    mainColor: '#006633'
  },
  // Teaneck High School - Maroon and White
  'teaneck': {
    name: 'Teaneck High School',
    shortName: 'Teaneck',
    logo: 'teaneckLogo.png',
    accentColor: '#800000', // Maroon
    mainColor: '#FFFFFF'    // White
  },
  // Tenafly High School - Red and Blue
  'tenafly': {
    name: 'Tenafly High School',
    shortName: 'Tenafly',
    logo: 'tenLogo.png',
    accentColor: '#C8102E', // Red
    mainColor: '#1E3A5F'    // Blue
  },
  // Wayne Hills High School - Blue and Gold
  'wayne hills': {
    name: 'Wayne Hills High School',
    shortName: 'Wayne Hills',
    logo: 'whLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#FFD700'    // Gold
  },
  // Wayne Valley High School - Red and Black
  'wayne valley': {
    name: 'Wayne Valley High School',
    shortName: 'Wayne Valley',
    logo: 'wvLogo.png',
    accentColor: '#CC0000', // Red
    mainColor: '#000000'    // Black
  },
  // West Milford High School - Green and White
  'west milford': {
    name: 'West Milford High School',
    shortName: 'West Milford',
    logo: 'wmLogo.png',
    accentColor: '#006400', // Green
    mainColor: '#FFFFFF'    // White
  },
  // Westwood Regional High School - Blue and Red
  'westwood': {
    name: 'Westwood Regional High School',
    shortName: 'Westwood',
    logo: 'wwLogo.png',
    accentColor: '#003087', // Blue
    mainColor: '#C8102E'    // Red
  }
};

// List of all schools for dropdowns (sorted alphabetically by name)
const SCHOOLS_LIST = [
  { value: 'Bergen Catholic', name: 'Bergen Catholic High School' },
  { value: 'Bergenfield', name: 'Bergenfield High School' },
  { value: 'Cliffside Park', name: 'Cliffside Park High School' },
  { value: 'Clifton', name: 'Clifton High School' },
  { value: 'Demarest', name: 'Northern Valley at Demarest' },
  { value: 'DePaul Catholic', name: 'DePaul Catholic High School' },
  { value: 'Dumont', name: 'Dumont High School' },
  { value: 'Dwight Morrow', name: 'Dwight Morrow High School' },
  { value: 'Fair Lawn', name: 'Fair Lawn High School' },
  { value: 'Hackensack', name: 'Hackensack High School' },
  { value: 'Holy Angels', name: 'Academy of the Holy Angels' },
  { value: 'Immaculate Heart Academy', name: 'Immaculate Heart Academy' },
  { value: 'Indian Hills', name: 'Indian Hills High School' },
  { value: 'Lakeland', name: 'Lakeland Regional High School' },
  { value: 'Mahwah', name: 'Mahwah High School' },
  { value: 'Northern Highlands', name: 'Northern Highlands Regional High School' },
  { value: 'Old Tappan', name: 'Northern Valley at Old Tappan' },
  { value: 'Paramus Catholic', name: 'Paramus Catholic High School' },
  { value: 'Paramus', name: 'Paramus High School' },
  { value: 'Pascack Hills', name: 'Pascack Hills High School' },
  { value: 'Pascack Valley', name: 'Pascack Valley High School' },
  { value: 'Passaic County Technical Institute', name: 'Passaic County Technical Institute (PCTI)' },
  { value: 'Passaic', name: 'Passaic High School' },
  { value: 'Passaic Valley', name: 'Passaic Valley High School' },
  { value: 'Paterson Eastside', name: 'Paterson Eastside High School' },
  { value: 'Ramapo', name: 'Ramapo High School' },
  { value: 'Ramsey', name: 'Ramsey High School' },
  { value: 'Ridgefield Park', name: 'Ridgefield Park High School' },
  { value: 'Ridgewood', name: 'Ridgewood High School' },
  { value: 'River Dell', name: 'River Dell Regional High School' },
  { value: 'Teaneck', name: 'Teaneck High School' },
  { value: 'Tenafly', name: 'Tenafly High School' },
  { value: 'Wayne Hills', name: 'Wayne Hills High School' },
  { value: 'Wayne Valley', name: 'Wayne Valley High School' },
  { value: 'West Milford', name: 'West Milford High School' },
  { value: 'Westwood', name: 'Westwood Regional High School' }
];

/**
 * Get team configuration by name (case-insensitive partial match)
 * @param {string} teamName - The team name to look up
 * @returns {Object|null} - The team configuration or null if not found
 */
function getTeamConfig(teamName) {
  if (!teamName) return null;
  const normalized = teamName.toLowerCase().trim();

  // Try exact match first
  if (TEAMS_CONFIG[normalized]) {
    return TEAMS_CONFIG[normalized];
  }

  // Try partial match
  for (const [key, config] of Object.entries(TEAMS_CONFIG)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return config;
    }
  }

  return null;
}

/**
 * Get the logo path for a team
 * @param {string} teamName - The team name
 * @param {string} basePath - The base path to the logos folder (default for relative paths)
 * @returns {string|null} - The logo path or null if not found
 */
function getTeamLogo(teamName, basePath = '../../assets/images/Team Logos/') {
  const config = getTeamConfig(teamName);
  if (config && config.logo) {
    return basePath + config.logo;
  }
  return null;
}

/**
 * Get the colors for a team
 * @param {string} teamName - The team name
 * @returns {Object|null} - Object with accentColor and mainColor, or null if not found
 */
function getTeamColors(teamName) {
  const config = getTeamConfig(teamName);
  if (config) {
    return {
      accentColor: config.accentColor,
      mainColor: config.mainColor
    };
  }
  return null;
}

/**
 * Get all available logos for the settings page
 * @returns {Array} - Array of logo objects with file, name, accentColor, mainColor
 */
function getAvailableLogos() {
  // Create unique list based on logo files (to avoid duplicates from aliases)
  const seenLogos = new Set();
  const logos = [];

  for (const config of Object.values(TEAMS_CONFIG)) {
    if (!seenLogos.has(config.logo)) {
      seenLogos.add(config.logo);
      logos.push({
        file: config.logo,
        name: config.shortName,
        accentColor: config.accentColor,
        mainColor: config.mainColor
      });
    }
  }

  // Sort alphabetically by name
  return logos.sort((a, b) => a.name.localeCompare(b.name));
}

// Legacy support: Create teamLogos object for backward compatibility
const teamLogos = {};
for (const [key, config] of Object.entries(TEAMS_CONFIG)) {
  teamLogos[key] = config.logo;
}

// Export for module usage if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TEAMS_CONFIG,
    SCHOOLS_LIST,
    getTeamConfig,
    getTeamLogo,
    getTeamColors,
    getAvailableLogos,
    teamLogos
  };
}
