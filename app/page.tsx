import Link from 'next/link';
import React from 'react'

function HomePage() {
  return (
    <main>
      <div className='bg-blue-500'> welcome home</div>
      <Link href="/realestate">real estate</Link>
    </main>
  )
}

export default HomePage;
