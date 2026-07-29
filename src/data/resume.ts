
export interface ResumeHero {
  title: string
  description: string
}

export interface ResumeAction {
  label: string
  href: string
  external?: boolean
  downloadName?: string
}

export interface CareerHighlight {
  title: string
  description: string
}

export interface ExperienceItem {
  company: string
  role: string
  timeframe: string
  summary: string
}

export interface TechnologyGroup {
  title: string
  technologies: string[]
}

export interface ResumeContent {
  hero: ResumeHero
  actions: ResumeAction[]
  snapshot: string
  highlights: CareerHighlight[]
  experience: ExperienceItem[]
  education: {
    degree: string;
    school: string;
  }
  technologies: TechnologyGroup[]
}

export const resumeContent: ResumeContent = {
  hero: {
    title: 'Resume',
    description: 'A concise overview of my professional experience, technical background, and continued journey as a software engineer.'
  },
  actions: [
    {
      label: 'View Resume',
      href: '/files/SoftwareEngineerResume2026.pdf',
      external: true
    },
    {
      label: 'Download PDF',
      href: '/files/SoftwareEngineerResume2026.pdf',
      downloadName: 'Nickolas_Berra_Resume.pdf'
    }
  ],
//   actions: [
//  {
//    label: 'View Resume',
//    href: '/resume.pdf',
//    type: 'view'
//  },
//  {
//    label: 'Download PDF',
//    href: '/resume.pdf',
//    type: 'download'
//  }
// ]
  // snapshot: 'Software engineer with over seven years of experience building modern web applications and APIs using React, TypeScript, Node.js and PostgreSQL. My background in mathematics, education and IT has shaped an engineering approach centered on communication, thoughtful architecture and continuous learning.',
  snapshot: 'Software engineer with 7+ years of experience building modern web applications, APIs, and data-driven solutions using React, TypeScript, Node.js, and PostgreSQL. My background in mathematics, education and technology has shaped an engineering approach focused on communication, thoughtful architecture and continuously improving the way systems are built.',
  // highlights: [
  //   {
  //     title: '7+ Years',
  //     description: 'Professional software engineering experience'
  //   },
  //   {
  //     title: 'Full Stack',
  //     description: 'React, TypeScript, Node.js, PostgreSQL, AWS'
  //   },
  //   {
  //     title: 'Consulting',
  //     description: 'Enterprise client delivery and collaboration'
  //   },
  //   {
  //     title: 'Continuous Learning',
  //     description: 'Always exploring better ways to build software'
  //   }
  // ],
  highlights: [
    {
      title: '7+ Years',
      description:
        'Building and delivering production software in enterprise environments',
    },
    {
      title: 'Full Stack',
      description:
        'Frontend experiences, backend APIs, databases, and cloud infrastructure',
    },
    {
      title: 'Enterprise',
      description:
        'Collaborating with teams to solve complex business problems',
    },
    {
      title: 'Always Learning',
      description:
        'Continuously exploring new technologies and better approaches',
    },
  ],
  // experience: [
  //   {
  //     company: 'CGI Inc.',
  //     role: 'Software Engineering Consultant',
  //     timeframe: '2019 - 2026',
  //     summary: 'Built and delivered enterprise web applications, APIs and data-driven solutions for Bayer using modern web technologies.'
  //   },
  //   {
  //     company: 'Daugherty Business Solutions',
  //     role: 'Software Engineering Consultant',
  //     timeframe: '2018',
  //     summary: 'Developed enterprise search, automation and full-stack web solutions across multiple client initiatives.'
  //   }
  // ],
  experience: [
    {
      company: 'CGI Inc.',
      role: 'Software Engineering Consultant (Bayer)',
      timeframe: '2019 - 2026',
      summary:
        'Designed and delivered full-stack solutions for enterprise applications, building React interfaces, Node.js APIs, PostgreSQL data solutions, and AWS integrations to support business-critical workflows.',
    },
    {
      company: 'Daugherty Business Solutions',
      role: 'Software Engineering Consultant (Bayer)',
      timeframe: '2018',
      summary:
        'Developed full-stack features, search solutions, automation tools, and content delivery workflows using JavaScript, Node.js, AWS, and enterprise platforms.',
    },
  ],
  education: {
    degree: 'B.S. Secondary Education (Mathematics)',
    school: 'University of Missouri-Columbia',
  },

  technologies: [
    {
      title: 'Frontend',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Redux',
        'Material UI'
      ]
    },
    {
      title: 'Backend',
      technologies: [
        'Node.js',
        'Fastify',
        'Express',
        'REST APIs'
      ]
    },
    {
      title: 'Cloud',
      technologies: [
        'AWS',
        'Lambda',
        'ECS',
        'S3',
        'CodeBuild',
        'Docker',
        'Cloudflare'
      ]
    },
    {
      title: 'Data',
      technologies: [
        'PostgreSQL',
        'Amazon RDS',
        'Vega',
        'D3.js'
      ]
    }
  ]
}
