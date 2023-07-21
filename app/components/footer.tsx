import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-16">
      <div className="container mx-auto text-center py-4">
        <p className="text-gray-900">&copy; 2023 Real Estate</p>
        <div className="flex justify-center space-x-4">
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
        </div>
      </div>
    </footer>
  )
}

export default Footer