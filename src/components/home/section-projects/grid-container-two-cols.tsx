import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const GridContainerTwoColsVariantsSide = cva('grid grid-cols-1 gap-8', {
  variants: {
    variant: {
      columnLeftLarger: 'md:grid-cols-[2fr_1fr]',
      columnRightLarger: 'md:grid-cols-[1fr_2fr]'
    }
  },
  defaultVariants: {
    variant: 'columnLeftLarger'
  }
})

type GridContainerTwoColsProps = React.ComponentProps<'div'> &
  VariantProps<typeof GridContainerTwoColsVariantsSide>

export const GridContainerTwoCols = ({
  className,
  children,
  variant,
  ...restProps
}: GridContainerTwoColsProps) => {
  return (
    <div
      className={cn(GridContainerTwoColsVariantsSide({ variant, className }))}
      {...restProps}
    >
      {children}
    </div>
  )
}

export const GridContainerColumn = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...restProps}>
      {children}
    </div>
  )
}
