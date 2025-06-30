export const CATEGORIES = {
  ALL: 'all',
  APPS: 'apps',
  GAMES: 'games',
  ECOMMERCE: 'ecommerce',
  WEBSITES: 'websites'
}

export const CATEGORY_LABELS = {
  [CATEGORIES.ALL]: 'All Projects',
  [CATEGORIES.APPS]: 'Apps',
  [CATEGORIES.GAMES]: 'Games',
  [CATEGORIES.ECOMMERCE]: 'E-Commerce',
  [CATEGORIES.WEBSITES]: 'Websites'
}

export const TECH_CATEGORIES = {
  FRONTEND: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Gatsby', 'Angular', 'Svelte'],
  BACKEND: ['Node.js', 'Laravel', 'Django', 'Ruby on Rails', 'Express.js', 'FastAPI'],
  DATABASE: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'],
  STYLING: ['Tailwind CSS', 'Material-UI', 'Styled Components', 'SCSS', 'Bootstrap'],
  TOOLS: ['Webpack', 'Vite', 'Docker', 'AWS', 'Vercel', 'Netlify'],
  MOBILE: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin'],
  GAME: ['Unity', 'Unreal Engine', 'Godot', 'Phaser', 'Three.js'],
  OTHER: ['GraphQL', 'REST API', 'WebSocket', 'PWA', 'Electron']
}

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}