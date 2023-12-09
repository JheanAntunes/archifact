import { MotionDiv } from '@/components/framer-motion/motions'
import { cn } from '@/lib/utils'
import { HTMLMotionProps } from 'framer-motion'

export const motionContainerVariants = {
  initial: {
    x: '-100%',
    opacity: 0
  },
  animate: {
    opacity: 1,
    x: '0'
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.5 }
  }
}

function ContainerContent({
  children,
  className,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      exit="exit"
      variants={motionContainerVariants}
      className={cn(
        'fixed inset-y-0 left-0 w-full max-w-xs border-r border-solid border-r-zinc-800 bg-zinc-950/90 px-5 pb-5 pt-[58px] text-zinc-50 transition-all duration-500 ease-linear',
        className
      )}
      {...props}
    >
      {children}
    </MotionDiv>
  )
}

export default ContainerContent
