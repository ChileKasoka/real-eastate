import React from 'react'
import Image from 'next/image'
//import Logo from '../public/Logo.png'
import Navbar from './navbar'
import SearchBar from './search-bar'


function Header() {
  return (
    <header className='w-full shadow-xl bg-white'>
      <div className='flex justify-between px-10'>
      <div className='flex items-center'>
          <Image
            src="/Logo.png"
            alt="logo"
            width="50"
            height="45"
          />
        </div>
        <div className='flex justify-center'>
        <SearchBar />
        </div>
        <div className='flex items-center'>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header