import ImgSala from '@/components/assets/img-sala.jpg'
import { TypographyH2, TypographyP } from '@/components/typography/typography'
import ImageContainer from '@/components/ui/ImageContainer'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import {
  CardExpertise,
  CardExpertiseDescription,
  CardExpertiseTitle,
  ContainerCardExpertise,
  dataCardExpertise
} from './card-expertise-title-description'

function SectionExpertise() {
  return (
    <section className="container">
      <div className="mb-8 flex flex-col gap-3">
        <TypographyH2 className="text-center text-zinc-50">
          Our Expertise
        </TypographyH2>
        <TypographyP className="mx-auto max-w-md text-center text-zinc-50">
          We use our expertise to help you create a space that is uniquely yours
          Vision and Lifestyle
        </TypographyP>
      </div>
      <ImageContainer>
        <Image
          src={ImgSala}
          alt="Imagem da sala"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ImageContainer>
      <ContainerCardExpertise>
        {dataCardExpertise.map(({ title, description }) => (
          <CardExpertise
            key={title + description}
            className="flex flex-col gap-1"
          >
            <CardExpertiseTitle>{title}</CardExpertiseTitle>
            <CardExpertiseDescription className="text-zinc-400">
              {description}
            </CardExpertiseDescription>
          </CardExpertise>
        ))}
      </ContainerCardExpertise>
      <div className="mx-auto w-full max-w-xs">
        <Button
          variant="secondary"
          className="mx-auto mt-8 w-full max-w-xs gap-1 rounded bg-zinc-800 font-sans text-zinc-200 transition-colors hover:bg-zinc-950"
        >
          Explore Our Services <ArrowRightIcon />
        </Button>
      </div>
    </section>
  )
}

export default SectionExpertise
