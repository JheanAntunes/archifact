import { TypographyH2, TypographyP } from '@/components/typography/typography'
import { DraftingCompass, GaugeCircleIcon, SmileIcon } from 'lucide-react'
import CardQuality from './card-quality'

function SectionQuality() {
  return (
    <section className="container">
      <div className="mb-8 flex w-full flex-col items-center gap-2">
        <TypographyH2 className="text-zinc-50">
          Why we are Unique From Others
        </TypographyH2>
        <TypographyP className="w-full max-w-[464px] text-center text-zinc-50">
          At ArchitectsArchiFacts. were not just designers - were creators of
          meanigful spaces that transcend expectations
        </TypographyP>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <CardQuality
          className="group border-zinc-800 lg:transition-colors lg:hover:border-zinc-50"
          Icon={
            <div className="mb-5 flex w-full justify-center">
              <DraftingCompass width={80} height={80} />
            </div>
          }
          TitleSpan={
            <span className="block w-full leading-normal lg:mx-auto lg:max-w-xs">
              Innovative Design Approach
            </span>
          }
          Content={
            <TypographyP className="text-center text-zinc-400 lg:transition-colors lg:group-hover:text-zinc-200">
              Our team brings fresh perspectives and innovative thinking to
              every project, ensuring your spaces stands out with unique design
              solutions.
            </TypographyP>
          }
        />
        <CardQuality
          Icon={
            <div className="mb-5 flex w-full justify-center">
              <GaugeCircleIcon width={80} height={80} />
            </div>
          }
          TitleSpan={
            <span className="block w-full leading-normal lg:mx-auto lg:max-w-[237px]">
              Proven Track Record & Timely Delivery
            </span>
          }
          Content={
            <TypographyP className="text-center text-zinc-400">
              We take pride in delivering projects on time, ensuring that your
              space is ready for you to enjoy as planned.
            </TypographyP>
          }
        />
        <CardQuality
          className="group border-zinc-800 lg:transition-colors lg:hover:border-zinc-50"
          Icon={
            <div className="mb-5 flex w-full justify-center">
              <SmileIcon width={80} height={80} />
            </div>
          }
          TitleSpan={
            <span className="block w-full leading-normal lg:mx-auto lg:max-w-[260px]">
              Top Rated Freelancer on Upwork.
            </span>
          }
          Content={
            <TypographyP className="text-center text-zinc-400 lg:transition-colors lg:group-hover:text-zinc-200">
              Our team brings fresh perspectives and innovative thinking to
              every project, ensuring your spaces stands out with unique design
              solutions.
            </TypographyP>
          }
        />
      </div>
    </section>
  )
}

export default SectionQuality
