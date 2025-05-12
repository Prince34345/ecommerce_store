import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './mainnav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-action'

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories()
  return (
    <header className='border-b-[.5px] border-neutral-500'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
        <Link href='/' className='ml-4 lg:ml-0 gap-x-2'>
           <p className='font-bold text-xl'>STORE</p>
        </Link>
        <MainNav data={categories}/>
        <NavbarActions/>
        </div>
      </Container>
    </header>
  )
}

export default Navbar