import { Project } from '@/types/project'

export const sportsDashboard: Project = {
  slug: 'sports-dashboard',
  title: 'Sports Dashboard',
  summary: 'A real-time sports experience designed for a dedicated Raspberry Pi display.',
  description: 'A full-stack application that collects live sports data and presents an always-on dashboard through a custom interface.',
  technologies: [
    'React',
    'TypeScript',
    'Node.js',
    'Fastify',
    'Server-Sent Events',
    'Raspberry Pi',
  ],
  featured: true,
  actions: [
    {
      label: 'Live Demo',
      href: 'https://info-ticker-ui.nberra90.workers.dev/',
    },
    {
      label: 'View Source',
      href: 'https://github.com/bnerra/info-ticker-api',
    }
  ],
  idea: 'I wanted a dedicated sports display that could sit on a desk, update itself automatically, and feel more like a polished product than another browser tab. What started as a simple idea eventually became an opportunity to explore real-time communication, embedded hardware, and thoughtful interface design.',
  problem: 'I wanted a dedicated sports display that could run continuously on a small device while providing live game information without requiring user interaction.',
  solution: 'I designed a full-stack application with a React frontend, Fastify backend, and Server-Sent Events architecture to efficiently deliver real-time updates.',
  lessons: [
    'Designing interfaces for constrained hardware.',
    'Building reliable real-time data flows.',
    'Balancing simplicity and scalability.',
  ],
  architecture: [
    {
      name: 'MLB Stats API',
      description: 'Live baseball data source'
    },
    {
      name: 'Fastify API',
      description: 'Backend service responsible for data processing'
    },
    {
      name: 'Server-Sent Events',
      description: 'Real-time updates from server to client'
    },
    {
      name: 'React Interface',
      description: 'Responsive dashboard experience'
    },
    {
      name: 'Raspberry Pi',
      description: 'Dedicated always-on display hardware'
    }
  ],
  challenges: [
    {
      title: 'Designing for Dedicated Hardware',
      description: 'Creating an interface optimized for a 1024x600 display required thinking beyond traditional responsive web layouts.'
    },
    {
      title: 'Building Real-Time Updates',
      description: 'Choosing Server-Sent Events provided a lightweight solution for continuously delivering live game information.'
    },
    {
      title: 'Managing Deployment Complexity',
      description: 'Separating frontend and backend deployments introduced real-world concerns around reliability, configuration, and communication between services.'
    }
  ],
  images: [
    {
      src: '/projects/sports-dashboard/dashboard.png',
      alt: 'Sports Dashboard running on a dedicated display'
    }
  ],
  metadata: [
    {
      label: 'Built',
      value: '2026'
    },
    {
      label: 'Role',
      value: 'Solo Developer'
    },
    {
      label: 'Status',
      value: 'Active'
    },
    {
      label: 'Platform',
      value: 'Raspberry Pi'
    },
    {
      label: 'Deployment',
      value: 'Cloudflare + Render'
    }
  ]
}
