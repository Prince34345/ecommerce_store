import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './mainnav'

const Navbar = () => {
  return (
    <header className='border-b-[.5px] border-neutral-500'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
        <Link href='/' className='ml-4 lg:ml-0 gap-x-2'>
           <p className='font-bold text-xl'>STORE</p>
        </Link>
        <MainNav data={[]}/>
        </div>
      </Container>
    </header>
  )
}

export default Navbar