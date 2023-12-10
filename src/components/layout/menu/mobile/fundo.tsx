'use client'
import { MotionDiv } from '@/components/framer-motion/motions'
import { cn } from '@/lib/utils'
import { HTMLMotionProps } from 'framer-motion'

function Fundo({ children, className, ...props }: HTMLMotionProps<'div'>) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        'fixed inset-0 bg-zinc-950/20 backdrop-blur-sm transition-all duration-300 ease-linear',
        className
      )}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}

export default Fundo
