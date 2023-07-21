import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

function Defaultlayout({children}: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Defaultlayout