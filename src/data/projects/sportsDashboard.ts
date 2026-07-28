import { Project } from '@/types/project'

export const sportsDashboard: Project = {
  slug: 'sports-dashboard',
  title: 'Sports Dashboard',
  summary: 'A real-time sports data interface designed for a dedicated Raspberry Pi display.',
  description: 'A full-stack application that consumes live sports data and presents an always-on sporting experience through a custom interface.',
  technologies: [
    'React',
    'TypeScript',
    'Node.js',
    'Fastify',
    'Server-Sent Events',
    'Raspberry Pi',
  ],
  featured: true,
}
