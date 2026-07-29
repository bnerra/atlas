
export interface ExploreItem {
  label: string
  description: string
  href?: string
}

export const exploreItems: ExploreItem[] = [
  {
    label:'Projects',
    description: 'Applications, experiments and ideas brought to life through code.',
    href: '/projects'
  },
  {
    label:'About',
    description: 'My background, journey and approach to building software.',
    href: '/about'
  },
  {
    label:'Resume',
    description: 'Experience, skills and technologies.',
    href: '/resume'
  },
  {
    label: 'Writing',
    description: 'Essays, technical deep dives, and lessons learned.'
  }
]
