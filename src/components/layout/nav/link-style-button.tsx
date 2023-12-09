import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

function LinkStyleButton({
  href,
  className,
  variant,
  children,
  ...props
}: React.ComponentPropsWithRef<'a'> &
  LinkProps & { variant: ButtonProps['variant'] }) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: variant,
          className:
            'rounded-sm bg-transparent font-sans font-medium text-zinc-50'
        }),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkStyleButton
