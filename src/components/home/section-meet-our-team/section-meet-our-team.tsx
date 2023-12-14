import ImgPersonHabib from '@/components/assets/img-person-habib.jpg'
import ImgPersonLuna from '@/components/assets/img-person-luna.jpg'
import ImgPersonRiaz from '@/components/assets/img-person-riaz.jpg'
import { TypographyH2, TypographyP } from '@/components/typography/typography'
import ImageContainer from '@/components/ui/ImageContainer'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import {
  CardMeetOurTeam,
  CardMeetOurTeamContent,
  CardMeetOurTeamContentDescription,
  CardMeetOurTeamContentTitle,
  GridContainerCardMeetOurTeam
} from './card-meet-our-team'

function SectionMeetOurTeam() {
  return (
    <section className="container flex flex-col gap-8">
      <GridContainerCardMeetOurTeam>
        <div className="col-span-full lg:col-start-2 lg:col-end-3">
          <TypographyH2 className="text-center text-zinc-50">
            Meet Our Team
          </TypographyH2>
          <TypographyP className="text-center text-zinc-400">
            Meet the experts behind our success: a blend of talents turning
            visions into reality.
          </TypographyP>
        </div>
      </GridContainerCardMeetOurTeam>
      <GridContainerCardMeetOurTeam className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <CardMeetOurTeam>
          <ImageContainer>
            <Image
              src={ImgPersonLuna}
              alt="Imagem do rosto de uma pessoa da equipe que se chama luna que sua função é arquitetura"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </ImageContainer>
          <CardMeetOurTeamContent>
            <CardMeetOurTeamContentTitle>
              Israt Jahan Luna
            </CardMeetOurTeamContentTitle>
            <CardMeetOurTeamContentDescription>
              Principle Architects
            </CardMeetOurTeamContentDescription>
          </CardMeetOurTeamContent>
        </CardMeetOurTeam>
        <CardMeetOurTeam>
          <ImageContainer>
            <Image
              src={ImgPersonHabib}
              alt="Imagem do rosto de uma pessoa da equipe que se chama luna que sua função é operação."
              fill
              className="object-cover"
              sizes="100vw"
            />
          </ImageContainer>
          <CardMeetOurTeamContent>
            <CardMeetOurTeamContentTitle>
              Md.Hasan Habib
            </CardMeetOurTeamContentTitle>
            <CardMeetOurTeamContentDescription>
              Head of Operations
            </CardMeetOurTeamContentDescription>
          </CardMeetOurTeamContent>
        </CardMeetOurTeam>
        <CardMeetOurTeam className="col-span-full md:col-span-1">
          <ImageContainer>
            <Image
              src={ImgPersonRiaz}
              alt="Imagem do rosto de uma pessoa da equipe que se chama luna que sua função é 3D Designer."
              fill
              className="object-cover"
              sizes="100vw"
            />
          </ImageContainer>
          <CardMeetOurTeamContent>
            <CardMeetOurTeamContentTitle>Riaz</CardMeetOurTeamContentTitle>
            <CardMeetOurTeamContentDescription>
              3D designer
            </CardMeetOurTeamContentDescription>
          </CardMeetOurTeamContent>
        </CardMeetOurTeam>
      </GridContainerCardMeetOurTeam>
      <Button className="mx-auto w-full max-w-xs gap-1 rounded bg-zinc-800 text-zinc-50">
        Learn More about Us <ArrowRightIcon />
      </Button>
    </section>
  )
}

export default SectionMeetOurTeam
