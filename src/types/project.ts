
export interface ArchitectureNode {
  name: string
  description?: string
}

export interface ChallengeNode {
  title: string
  description: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectMetadata {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  technologies: string[]
  featured: boolean
  idea?: string
  problem: string
  solution: string
  lessons: string[]
  architecture?: ArchitectureNode[]
  challenges?: ChallengeNode[]
  images?: ProjectImage[]
  metadata?: ProjectMetadata[]
}
