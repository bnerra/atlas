import Badge from '@/components/ui/Badge'
import ProjectSection from './ProjectSection'

interface LessonsSectionProps {
  lessons: string[]
}

export default function LessonsSection({
  lessons,
}: LessonsSectionProps) {
  return (
    <ProjectSection title='Lessons Learned'>
      <div className='flex flex-wrap gap-3'>
        { lessons.map((lesson) => (
          <Badge key={lesson}>
            {lesson}
          </Badge>
        ))}
      </div>
    </ProjectSection>
  )
}
