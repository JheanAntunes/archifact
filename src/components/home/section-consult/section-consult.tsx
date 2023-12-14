import { TypographyH2, TypographyP } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

function SectionConsult() {
  return (
    <section className="container flex flex-col items-center justify-between gap-8 bg-zinc-900/70 py-8 md:flex-row">
      <div className="flex flex-col gap-1">
        <TypographyH2 className="text-zinc-50">
          Consult with Our Design Experts
        </TypographyH2>
        <TypographyP className="text-zinc-400">
          Start Your Architectural Journey Today with us now
        </TypographyP>
      </div>
      <Button className="w-full max-w-xs gap-1 rounded bg-zinc-800 font-sans font-medium md:w-fit md:max-w-none">
        Get A Quote <ArrowRightIcon />
      </Button>
    </section>
  )
}

export default SectionConsult
