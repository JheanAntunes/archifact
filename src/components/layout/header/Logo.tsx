import Link from 'next/link'

function Logo() {
  return (
    <Link href="#" className="flex flex-col font-sans font-medium">
      <span className="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-sm text-transparent lg:transition-colors lg:hover:bg-gradient-to-l">
        Archifact
      </span>
      <span className="bg-gradient-to-l from-zinc-50 to-zinc-400 bg-clip-text text-lg text-transparent lg:transition-colors lg:hover:bg-gradient-to-r">
        Architects
      </span>
    </Link>
  )
}

export default Logo
