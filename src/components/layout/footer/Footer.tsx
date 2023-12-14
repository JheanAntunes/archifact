import { TypographyH2, TypographyP } from '@/components/typography/typography'
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon
} from '@radix-ui/react-icons'
import { FacebookIcon } from 'lucide-react'
import Link from 'next/link'
import FooterLinks from './footer-links'

function Footer() {
  return (
    <footer className="bg-zinc-50">
      <div className="container flex flex-col gap-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <TypographyH2>Get in Touch</TypographyH2>
            <span className="text-zinc-800">Hello@Archifactarchitects.com</span>
            <span className="text-zinc-800">
              +880&nbsp;1990&nbsp;000&nbsp;000
            </span>
          </div>
          <FooterLinks />
          <div className="flex flex-col gap-3">
            <Link
              href="#"
              className="flex w-fit flex-col font-sans font-medium"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-950 bg-clip-text text-sm text-transparent lg:transition-colors lg:hover:bg-gradient-to-l">
                Archifact
              </span>
              <span className="bg-gradient-to-l from-blue-600 to-blue-950 bg-clip-text text-lg text-transparent lg:transition-colors lg:hover:bg-gradient-to-r">
                Architects
              </span>
            </Link>
            <TypographyP className="text-zinc-800">
              86. nawabpur road. old dhaka. 1100. Dhaka
            </TypographyP>
            <Link
              href="#"
              className="text-blue-600 underline lg:hover:text-blue-900"
            >
              Direction
            </Link>
            <div className="flex items-center gap-5">
              <Link href="#">
                <TwitterLogoIcon width={30} height={30} />
              </Link>
              <Link href="#">
                <LinkedInLogoIcon width={30} height={30} />
              </Link>
              <Link href="#">
                <InstagramLogoIcon width={30} height={30} />
              </Link>
              <Link href="#">
                <FacebookIcon width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-roboto text-sm">
            &copy;2023 ArchifactArchitects.All rights reserved.
          </span>
          <span className="font-roboto text-sm">
            Design and Develop By <span className="font-medium">Youthmind</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
