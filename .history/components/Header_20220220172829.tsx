import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-green-500'>Follow</h3>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Header