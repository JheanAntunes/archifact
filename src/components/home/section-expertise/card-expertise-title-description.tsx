import { TypographyH3, TypographyP } from '@/components/typography/typography'
import { cn } from '@/lib/utils'

export type DataCardExpertise = {
  title: string
  description: string
}

export const dataCardExpertise: DataCardExpertise[] = [
  {
    title: 'Floor Plan Design 2D',
    description: 'birds-eye view of room layouts with clear space distribution.'
  },
  {
    title: 'Kitchen Design 3D',
    description: '3D deciction of kitchen layout. appliances, and aesthetics.'
  },
  {
    title: 'Exterior Design 3D',
    description: '3D visualization of propertys outdoor facade and landscape'
  },
  {
    title: 'Bathroom Design 3D',
    description: '3D representation of bathroom space. fixtures, and design.'
  },
  {
    title: 'Interior Design 3D',
    description: '3D portrayal of indoor spaces. furniture, and décor'
  },
  {
    title: 'Tiny  House Design 3D',
    description: '3D design of compact homes optimizing style and utility.'
  }
]

export const ContainerCardExpertise = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'mt-8 grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export const CardExpertise = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('text-zinc-50', className)} {...restProps}>
      {children}
    </div>
  )
}

export const CardExpertiseTitle = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h3'>) => {
  return (
    <TypographyH3 className={cn('md', className)} {...restProps}>
      {children}
    </TypographyH3>
  )
}

export const CardExpertiseDescription = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'p'>) => {
  return (
    <TypographyP className={cn('', className)} {...restProps}>
      {children}
    </TypographyP>
  )
}
