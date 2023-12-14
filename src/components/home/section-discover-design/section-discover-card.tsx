import { TypographyH3, TypographyP } from '@/components/typography/typography'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export const SectionDiscoverContainerCard = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export const SectionDiscoverCard = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-[200px_200px] gap-4 rounded',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export const SectionDiscoverCardContent = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...restProps}>
      {children}
    </div>
  )
}

export const SectionDiscoverCardBadge = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <Badge
      className={cn(
        'w-fit border-yellow-600 font-sans font-medium text-yellow-600',
        className
      )}
      {...restProps}
      variant="outline"
    >
      {children}
    </Badge>
  )
}

export const SectionDiscoverCardTitle = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h3'>) => {
  return (
    <TypographyH3 className={cn('text-zinc-50', className)} {...restProps}>
      {children}
    </TypographyH3>
  )
}

export const SectionDiscoverCardDescription = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'p'>) => {
  return (
    <TypographyP
      className={cn('w-full max-w-xl text-zinc-400', className)}
      {...restProps}
    >
      {children}
    </TypographyP>
  )
}
