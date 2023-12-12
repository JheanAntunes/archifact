import { TypographyH3, TypographyP } from '@/components/typography/typography'
import { cn } from '@/lib/utils'
import React from 'react'

export const GridContainerCardMeetOurTeam = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div {...restProps} className={cn('grid grid-cols-3 gap-8', className)}>
      {children}
    </div>
  )
}

export const CardMeetOurTeam = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div {...restProps} className={cn('', className)}>
      {children}
    </div>
  )
}

export const CardMeetOurTeamContent = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'div'>) => {
  return (
    <div {...restProps} className={cn('mt-2 flex flex-col gap-1', className)}>
      {children}
    </div>
  )
}

export const CardMeetOurTeamContentTitle = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'h3'>) => {
  return (
    <TypographyH3 {...restProps} className={cn('text-zinc-50', className)}>
      {children}
    </TypographyH3>
  )
}

export const CardMeetOurTeamContentDescription = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<'p'>) => {
  return (
    <TypographyP {...restProps} className={cn('text-zinc-400', className)}>
      {children}
    </TypographyP>
  )
}
