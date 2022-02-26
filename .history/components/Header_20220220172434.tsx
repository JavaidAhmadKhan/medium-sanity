import Link from 'next/link'

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img className='w-44 object-contain' src="https://links.papareact.com/yvf" alt="" />
        </Link>
      </div>
      <div></div>
    </header>
  )
}

export default Header
