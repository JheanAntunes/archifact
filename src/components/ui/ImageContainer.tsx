import { cn } from '@/lib/utils'

function ImageContainer({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('relative h-80 w-full overflow-hidden rounded', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default ImageContainer
