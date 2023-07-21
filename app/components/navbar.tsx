import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full h-24'>
        <div className='flex items-center h-full w-full px-4'>
            <ul className='hidden sm:flex ml-8 space-x-8'>
                <Link href="/home">
                    <li className='ml-10 hover:border-b text-xl'>Home</li>
                </Link>
                <Link href="/about">
                    <li className='ml-10 hover:border-b text-xl'>About</li>
                </Link>
                <Link href="/services">
                    <li className='ml-10 hover:border-b text-xl'>Our Services</li>
                </Link>
                <Link href="/contact">
                    <li className='ml-10 hover:border-b text-xl'>Contact Us</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar