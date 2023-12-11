import ImgSalaCozinha from '@/components/assets/img-sala-cozinha.jpg'
import ImgSalaLazer from '@/components/assets/img-sala-lazer.jpg'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import ImageContainer from '../../ui/ImageContainer'
import {
  GridContainerColumn,
  GridContainerTwoCols
} from './grid-container-two-cols'

function SectionImagesSecondColumn() {
  return (
    <>
      <GridContainerTwoCols
        variant="columnRightLarger"
        className="pb-3 shadow-lg shadow-zinc-200"
      >
        {/* Column 1 */}
        <GridContainerColumn className="flex flex-col gap-3">
          <ImageContainer>
            <Image
              src={ImgSalaCozinha}
              alt="Imagem que mostra a sala e a cozinha da casa."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </ImageContainer>
          <Button className="w-fit gap-1 font-sans" variant="ghost">
            Interior Design 3D{' '}
            <div className="flex">
              <ArrowRightIcon />
              <ArrowRightIcon />
            </div>{' '}
          </Button>
        </GridContainerColumn>
        {/* Column 2 */}
        <GridContainerColumn>
          <ImageContainer>
            <Image
              src={ImgSalaLazer}
              alt="Imagem que mostra a sala e parte de lazer da casa."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </ImageContainer>
          <Button className="w-fit gap-1 font-sans" variant="ghost">
            Kitchen Design 3D{' '}
            <div className="flex">
              <ArrowRightIcon />
              <ArrowRightIcon />
            </div>{' '}
          </Button>
        </GridContainerColumn>
      </GridContainerTwoCols>
    </>
  )
}

export default SectionImagesSecondColumn
