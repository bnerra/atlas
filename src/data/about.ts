export interface AboutTimelineItem {
  title: string
  period?: string
  description: string
}

export interface PhilosophyItem {
  title: string
  description: string
}

export interface AboutContent {
  hero: {
    title: string
    subtitle: string
    introduction: string
  }
  timeline: AboutTimelineItem[]
  philosophy: PhilosophyItem[]
  influences: string[]
}


export const aboutContent: AboutContent = {
  hero: {
    title: 'The person behind the journey',
    subtitle: 'Software engineer. Problem solver. Constant explorer.',
    introduction: 'My path into software engineering was not a straight line. It began with mathematics, teaching, curiosity, and a desire to understand how things work.'
  },
  // timelineTitles: ['Learning to Explain', 'Finding New Terrain', 'Discovering the Medium', 'Building Systems'],
  timeline: [
    {
      title: 'Mathematics & Education',
      description: 'My foundation began through mathematics and teaching. Explaining complex concepts and helping others understand problems shaped how I approach engineering today.'
    },
    {
      title: 'Exploration & Adaptation',
      description: 'Living and working in different environments taught me how to adapt, learn quickly, and become comfortable navigating unfamiliar territory.'
    },
    {
      title: 'Discovering Software',
      description: 'Through self-directed learning and experimentation, software became the medium where problem solving, creativity, and systems thinking came together.'
    },
    {
      title: 'Engineering Systems',
      description: 'Today I build applications with a focus on thoughtful architecture, maintainable systems, and creating solutions that solve real problems.'
    }
  ],
  philosophy: [
    {
      title: 'Understand before building',
      description: 'The best solutions begin with understanding the problem, the users, and the constraints.'
    },
    {
      title: 'Simple systems scale',
      description: 'Good architecture is not about unnecessary complexity. It is about creating foundations that can grow.'
    },
    {
      title: 'Curiosity compounds',
      description: 'Every project is an opportunity to learn something new and refine the craft.'
    }
  ],
  influences: [
    'Exploring unfamiliar places',
    'Learning continuously',
    'Breaking complex ideas into simple ones',
    'Building systems that solve real problems',
    'Teaching and sharing knowledge',
    'Understanding how things work'
  ]
  // influences: [
  //   'Mathematics',
  //   'Teaching',
  //   'Problem solving',
  //   'Continuous learning',
  //   'Building things that help people'
  // ]
}

// Understand the terrain

// Before writing code, understand the problem, the constraints, and the people affected by the solution.

// Build foundations, not shortcuts

// Good systems are designed to evolve. Simplicity, clarity, and maintainability create room for growth.

// Stay curious

// Technology changes constantly. The ability to learn, adapt, and explore is the skill that compounds over time.
