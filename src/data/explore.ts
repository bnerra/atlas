
export interface ExploreItem {
  label: string
  description: string
  href: string
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
  // {
  //   label:'Writing',
  //   description: 'Thoughts, lessons learned and technical explorations.',
  //   href: '/writing'
  // },
  {
    label:'Resume',
    description: 'Experience, skills and technologies.',
    href: '/resume'
  }
]
