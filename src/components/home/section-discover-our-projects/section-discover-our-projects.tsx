import ImgSalaCozinha from '@/components/assets/img-sala-cozinha.jpg'
import ImgSalaLazer from '@/components/assets/img-sala-lazer.jpg'
import ImgSala from '@/components/assets/img-sala.jpg'
import { TypographyH2, TypographyP } from '@/components/typography/typography'
import ImageContainer from '@/components/ui/ImageContainer'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import {
  SectionDiscoverCard,
  SectionDiscoverCardBadge,
  SectionDiscoverCardContent,
  SectionDiscoverCardDescription,
  SectionDiscoverCardTitle,
  SectionDiscoverContainerCard
} from './section-discover-card'

function SectionDiscoverOurProjects() {
  return (
    <section className="container flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-center">
        <TypographyH2 className="text-zinc-50">
          Discover Our Design Insights
        </TypographyH2>
        <TypographyP className="text-zinc-400">
          Exploring the News and Stories of Architectural Design
        </TypographyP>
      </div>
      <SectionDiscoverContainerCard>
        <SectionDiscoverCard>
          <ImageContainer className="h-full">
            <Image src={ImgSala} alt="imagem da casa na parte da sala." />
          </ImageContainer>
          <SectionDiscoverCardContent>
            <SectionDiscoverCardBadge>Design</SectionDiscoverCardBadge>
            <SectionDiscoverCardTitle>
              The Power of Minimalism: Creating Tranquil Spaces
            </SectionDiscoverCardTitle>
            <SectionDiscoverCardDescription>
              How do you create compelling presentations that wow your
              colleagues and impress your managers
            </SectionDiscoverCardDescription>
          </SectionDiscoverCardContent>
        </SectionDiscoverCard>
        <SectionDiscoverCard>
          <ImageContainer className="h-full">
            <Image
              src={ImgSalaCozinha}
              alt="imagem da casa na parte da cozinha."
            />
          </ImageContainer>
          <SectionDiscoverCardContent>
            <SectionDiscoverCardBadge>Design</SectionDiscoverCardBadge>
            <SectionDiscoverCardTitle>
              The Power of Minimalism: Creating Tranquil Spaces
            </SectionDiscoverCardTitle>
            <SectionDiscoverCardDescription>
              How do you create compelling presentations that wow your
              colleagues and impress your managers
            </SectionDiscoverCardDescription>
          </SectionDiscoverCardContent>
        </SectionDiscoverCard>
        <SectionDiscoverCard>
          <ImageContainer className="h-full">
            <Image src={ImgSalaLazer} alt="imagem da casa na parte da Lazer." />
          </ImageContainer>
          <SectionDiscoverCardContent>
            <SectionDiscoverCardBadge>Design</SectionDiscoverCardBadge>
            <SectionDiscoverCardTitle>
              The Power of Minimalism: Creating Tranquil Spaces
            </SectionDiscoverCardTitle>
            <SectionDiscoverCardDescription>
              How do you create compelling presentations that wow your
              colleagues and impress your managers
            </SectionDiscoverCardDescription>
          </SectionDiscoverCardContent>
        </SectionDiscoverCard>
      </SectionDiscoverContainerCard>
      <Button className="mx-auto w-full max-w-xs gap-1 rounded bg-zinc-800 font-sans font-medium text-zinc-50 hover:text-zinc-50">
        Read More <ArrowRightIcon />
      </Button>
    </section>
  )
}

export default SectionDiscoverOurProjects
