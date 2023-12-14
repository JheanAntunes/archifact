import {
  TypographyList,
  TypographyListItem
} from '@/components/typography/typography'
import Link from 'next/link'

function FooterLinks() {
  return (
    <TypographyList className="grid grid-cols-3 gap-5">
      <div className="flex flex-col gap-3">
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Home
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            About Us
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Portfolio
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Services
          </Link>
        </TypographyListItem>
      </div>
      <div className="flex flex-col gap-3">
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Blog
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Working Process
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Contact Us
          </Link>
        </TypographyListItem>
      </div>
      <div className="flex flex-col gap-3">
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Terms
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Privacy
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Cookies
          </Link>
        </TypographyListItem>
        <TypographyListItem>
          <Link
            href="#"
            className="font-sans text-sm font-medium text-zinc-800 lg:hover:text-blue-500 lg:hover:underline"
          >
            Licenses
          </Link>
        </TypographyListItem>
      </div>
    </TypographyList>
  )
}

export default FooterLinks
