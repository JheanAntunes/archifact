import { TypographyP } from '@/components/typography/typography'
import { cn } from '@/lib/utils'
import React from 'react'

export type DataCardInternationallyImplemented = {
  title: string
  description: string
}
export const dataCardInternationallyImplemented: DataCardInternationallyImplemented[] =
  [
    {
      title: '120+',
      description: 'projects completed internationally'
    },
    {
      title: '10+',
      description: 'years of experience'
    },
    {
      title: '20k',
      description: 'sq meters realized'
    }
  ]

export const ContainerCardInternationallyImplemented = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'mt-8 grid grid-cols-3 gap-8 rounded bg-zinc-200/60 p-8 shadow-md',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

export const CardInternationallyImplemented = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('', className)} {...restProps}>
      {children}
    </div>
  )
}

export const CardInternationallyImplementedTitle = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'span'>) => {
  return (
    <span
      className={cn('block font-sans text-6xl font-medium', className)}
      {...restProps}
    >
      {children}
    </span>
  )
}

export const CardInternationallyImplementedDescription = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'p'>) => {
  return (
    <TypographyP className={cn('text-zinc-800', className)} {...restProps}>
      {children}
    </TypographyP>
  )
}
