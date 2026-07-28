
export interface BearingGroup {
  title: string
  items: string[]
}

export const currentBearing: BearingGroup[] = [
  {
    title: 'Building',
    items: [
      'Atlas',
      'Sports Dashboard'
    ]
  },
  {
    title: 'Learning',
    items: [
      'Design Systems',
      'Next.js',
      'Tailwind CSS'
    ]
  },
  {
    title:'Exploring',
    items: [
      'Cloud Architecture',
      'System Design'
    ]
  }
]
