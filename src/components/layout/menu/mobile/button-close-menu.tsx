import { MotionButton } from '@/components/framer-motion/motions'
import { HTMLMotionProps } from 'framer-motion'
import { X } from 'lucide-react'

function ButtonCloseMenu(props: HTMLMotionProps<'button'>) {
  return (
    <div className="fixed flex w-full -translate-x-5 -translate-y-[38px] items-center justify-between px-5">
      <span className="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text font-sans text-base text-transparent lg:transition-colors lg:hover:bg-gradient-to-l">
        Archifact
      </span>{' '}
      <MotionButton
        className="h-8 w-8 bg-transparent"
        {...props}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <X width={32} height={32} />
      </MotionButton>
    </div>
  )
}

export default ButtonCloseMenu
