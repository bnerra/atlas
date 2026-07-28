
export interface ArchitectureNode {
  name: string
  description?: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  technologies: string[]
  featured: boolean
  problem: string
  solution: string
  lessons: string[]
  architecture?: ArchitectureNode[]
}
