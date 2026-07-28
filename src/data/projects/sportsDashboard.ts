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
  problem: 'I wanted a dedicated sports display that could run continuously on a small device while providing live game information without requiring user interaction.',
  solution: 'I designed a full-stack application with a React frontend, Fastify backend, and Server-Sent Events architecture to efficiently deliver real-time updates.',
  lessons: [
    'Designing interfaces for constrained hardware.',
    'Building reliable real-time data flows.',
    'Balancing simplicity and scalability.',
  ]
}
