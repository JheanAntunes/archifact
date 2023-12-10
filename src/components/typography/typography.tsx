import { cn } from '@/lib/utils'

export function TypographyH1({
  className,
  children,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'font-sans text-4xl font-medium tracking-tight lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  className,
  children,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('font-sans text-3xl font-medium tracking-tight', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({
  className,
  children,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('font-sans text-2xl font-medium tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function TypographyP({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('font-roboto', className)} {...props}>
      {children}
    </p>
  )
}

export function TypographyList({
  className,
  children,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('', className)} {...props}>
      {children}
    </ul>
  )
}

export function TypographyListItem({
  className,
  children,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li className={cn('font-roboto', className)} {...props}>
      {children}
    </li>
  )
}
