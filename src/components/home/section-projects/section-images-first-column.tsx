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

function SectionImagesFirstColumn() {
  return (
    <>
      <GridContainerTwoCols className="pb-3 shadow-lg shadow-zinc-200">
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
            Flor plan Design 2D{' '}
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
            Exterior Design 3D{' '}
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

export default SectionImagesFirstColumn
