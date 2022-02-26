import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="https://links.papareact.com/yvf" alt="Picture of the author"
      width={500}
      height={500}>
        </Link>
      </div>
      <div></div>
    </header>
  )
}

export default Header
