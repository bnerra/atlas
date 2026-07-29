import { resumeContent } from '@/data/resume'
import ResumeHero from '@/components/resume/ResumeHero'
import ResumeActions from '@/components/resume/ResumeActions'
import ProfessionalSnapshot from '@/components/resume/ProfessionalSnapshot'
import CareerHighlights from '@/components/resume/CareerHighlights'
import ExperienceOverview from '@/components/resume/ExperienceOverview'
import EducationCard from '@/components/resume/EducationCard'
import TechnologyGroups from '@/components/resume/TechnologyGroups'


export default function ResumePage() {
  return (
    <main
      className='
        mx-auto
        w-full
        max-w-6xl
        space-y-16
        px-6
        py-12
        sm:px-8
        lg:px-6
      '
    >
      <ResumeHero content={resumeContent.hero} />
      <ResumeActions actions={resumeContent.actions} />
      <ProfessionalSnapshot content={resumeContent.snapshot} />
      <CareerHighlights items={resumeContent.highlights} />
      <ExperienceOverview items={resumeContent.experience} />
      <TechnologyGroups groups={resumeContent.technologies} />
      <EducationCard degree={resumeContent.education.degree} school={resumeContent.education.school} />
    </main>
  )
}
