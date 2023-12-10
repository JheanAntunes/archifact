import ImgSala from '@/components/assets/img-sala.jpg'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { TypographyH1, TypographyP } from '../typography/typography'
import { Button } from '../ui/button'

function SectionInitial() {
  return (
    <section className="container flex flex-col gap-5">
      <TypographyH1 className="flex flex-col text-9xl text-zinc-50">
        <span className="leading-normal">Creating Transformative</span>
        <span className="bg-gradient-to-r from-zinc-400 to-slate-200 bg-clip-text leading-normal text-transparent">
          Architectural Designs
        </span>
      </TypographyH1>
      <TypographyP className="text-lg text-zinc-400">
        Customized Creations for Unique individuals
      </TypographyP>
      <div className="relative mt-5 w-full">
        <div className="relative h-80 w-full overflow-hidden rounded">
          <Image
            src={ImgSala}
            alt="foto de uma sala com imoveis"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Button className="absolute left-0 top-0 -translate-y-5 translate-x-8 gap-1 rounded bg-zinc-50 font-sans text-zinc-900 shadow transition-colors hover:bg-zinc-300">
          Schedule a Call <ArrowRightIcon height={20} width={20} />
        </Button>
        <div className="absolute bottom-0 right-0">
          <Button className="h-14 w-20 rounded-bl-sm rounded-br-none rounded-tl-sm rounded-tr-none bg-zinc-50 shadow hover:bg-zinc-300">
            <ArrowLeftIcon className="text-zinc-950" />
          </Button>
          <Button className="h-14 w-20 rounded-bl-none rounded-br-sm rounded-tl-none rounded-tr-sm bg-zinc-50 shadow hover:bg-zinc-300">
            <ArrowRightIcon className="text-zinc-950" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionInitial
