import { TypographyH2, TypographyP } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import {
  CardInternationallyImplemented,
  CardInternationallyImplementedDescription,
  CardInternationallyImplementedTitle,
  ContainerCardInternationallyImplemented,
  dataCardInternationallyImplemented
} from './card-internationally-implemented'

function SectionInternationallyImplemented() {
  return (
    <section className="bg-zinc-50">
      <div className="container my-8">
        <TypographyH2 className="flex flex-col">
          <span>Internationally</span>
          <span>Implemented Projects</span>
        </TypographyH2>
        <div className="mt-1 flex items-center justify-between">
          <TypographyP className="w-full max-w-md text-zinc-800">
            Crafting Spaces that Reflect Your Vision and Lifestyle of your
            dreams and aspirations
          </TypographyP>
          <Button className="gap-1 rounded bg-zinc-950 font-sans text-zinc-50">
            Hire Us On Upwork <ArrowRightIcon />
          </Button>
        </div>
        <ContainerCardInternationallyImplemented>
          {dataCardInternationallyImplemented.map(({ title, description }) => (
            <CardInternationallyImplemented
              key={title + description}
              className="flex flex-col gap-2"
            >
              <CardInternationallyImplementedTitle>
                {title}
              </CardInternationallyImplementedTitle>
              <CardInternationallyImplementedDescription>
                {description}
              </CardInternationallyImplementedDescription>
            </CardInternationallyImplemented>
          ))}
        </ContainerCardInternationallyImplemented>
      </div>
    </section>
  )
}

export default SectionInternationallyImplemented
