import {
  TypographyList,
  TypographyListItem
} from '@/components/typography/typography'
import { cn } from '@/lib/utils'
import { DataLinks } from '@/utils/data-links-menu-raiz'
import Link from 'next/link'
type NavLinksProps = React.ComponentProps<'ul'> & { dataLinks: DataLinks[] }
function NavLinks({ dataLinks, className, ...props }: NavLinksProps) {
  return (
    <TypographyList
      className={cn('flex gap-5 font-sans font-medium', className)}
      {...props}
    >
      {dataLinks.map(({ href, name }) => (
        <TypographyListItem key={href + name}>
          <Link
            href={href}
            className={cn(
              'text-zinc-400 lg:transition-colors lg:hover:text-zinc-50',
              name === 'Home' ? 'text-zinc-50' : ''
            )}
          >
            {name}
          </Link>
        </TypographyListItem>
      ))}
      {props.children}
    </TypographyList>
  )
}

export default NavLinks
