
export interface NavigationItem {
  label: string
  description: string
  href: string
}

export const navigation: NavigationItem[] = [
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
  }
]
