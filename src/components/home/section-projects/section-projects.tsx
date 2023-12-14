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
        <div className="flex flex-col gap-2">
          <TypographyH2>Discover Our Projects</TypographyH2>
          <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
            <TypographyP>
              Where Vision Meets Reality - Captivating Architectural Creations
              where spaces come alive with imagination and precision.
            </TypographyP>
            <Button className="w-full max-w-xs gap-1 rounded font-sans md:w-fit md:max-w-none">
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
