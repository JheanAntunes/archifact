import { TypographyH2, TypographyP } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import SectionImagesOneColumn from './section-images-first-column'
import SectionImagesSecondColumn from './section-images-second-column'
import SectionImagesThreeColumn from './section-images-three.column'

function SectionProjects() {
  return (
    <section className="bg-zinc-50">
      <div className="container my-8 flex flex-col gap-8">
        <div>
          <TypographyH2>Discover Our Projects</TypographyH2>
          <div className="flex w-full items-center justify-between">
            <TypographyP>
              Where Vision Meets Reality - Captivating Architectural Creations
              where spaces come alive with imagination and precision.
            </TypographyP>
            <Button className="gap-1 rounded font-sans">
              See All Projects <ArrowRightIcon height={20} width={20} />{' '}
            </Button>
          </div>
        </div>
        <SectionImagesOneColumn />
        <SectionImagesSecondColumn />
        <SectionImagesThreeColumn />
      </div>
    </section>
  )
}

export default SectionProjects
