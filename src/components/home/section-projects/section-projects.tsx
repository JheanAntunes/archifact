import ImgSalaCozinha from '@/components/assets/img-sala-cozinha.jpg'
import ImgSalaLazer from '@/components/assets/img-sala-lazer.jpg'
import { TypographyH2, TypographyP } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

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
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div className="flex flex-col gap-3">
            <div className="relative h-80 w-full overflow-hidden rounded">
              <Image
                src={ImgSalaCozinha}
                alt="Imagem que mostra a sala e a cozinha da casa."
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <Button className="w-fit gap-1 font-sans" variant="ghost">
              Flor plan Design 2D{' '}
              <div className="flex">
                <ArrowRightIcon />
              </div>{' '}
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative h-80 w-full overflow-hidden rounded">
              <Image
                src={ImgSalaLazer}
                alt="Imagem que mostra a sala e parte de lazer da casa."
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <Button className="w-fit gap-1 font-sans" variant="ghost">
              Exterior Design 3D{' '}
              <div className="flex">
                <ArrowRightIcon />
              </div>{' '}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProjects
