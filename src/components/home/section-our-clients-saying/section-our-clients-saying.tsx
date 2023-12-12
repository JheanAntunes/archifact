import ImgClientContrato from '@/components/assets/img-client-contrato.jpg'
import ImgClientDepoimento from '@/components/assets/img-client-depoimento.jpg'
import { TypographyH2, TypographyP } from '@/components/typography/typography'
import ImageContainer from '@/components/ui/ImageContainer'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function SectionOurClientsSaying() {
  return (
    <section className="bg-zinc-50">
      <div className="container my-8 flex flex-col gap-8">
        <div>
          <TypographyH2>What Our Clients Saying</TypographyH2>
          <TypographyP className="text-zinc-800">
            Real Stories of our Architectural Excellence
          </TypographyP>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-8 lg:gap-0">
            <div>
              <TypographyP className="w-full max-w-2xl text-zinc-800">
                &quot;ArchitectsArchifacts took our vision and turned it into a
                breathtaking reality. Their attention to detail, creativity, and
                collaborative approach made the design process seamless. Our
                project was executed beyond our expectations&quot;.
              </TypographyP>
              <div className="mt-8 flex flex-col">
                <span className="font-sans text-2xl font-medium text-zinc-950">
                  Ahmed Rabiul
                </span>
                <span className="font-roboto text-sm text-zinc-800">
                  Urban living Properties
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-1">
              <Button
                variant="ghost"
                className="hover:bg-zinc-950 hover:text-zinc-50"
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                variant="ghost"
                className="bg-zinc-950 text-zinc-50 hover:bg-zinc-800 hover:text-zinc-50"
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <ImageContainer>
              <Image
                src={ImgClientDepoimento}
                alt="Imagem de clientes conversando com nós."
                fill
                className="rounded object-cover"
                sizes="100vw"
              />
            </ImageContainer>
            <ImageContainer>
              <Image
                src={ImgClientContrato}
                alt="Imagem de clientes conversando com nós."
                fill
                className="rounded object-cover"
                sizes="100vw"
              />
            </ImageContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOurClientsSaying
