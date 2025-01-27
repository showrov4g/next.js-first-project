import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='py-10'>
       <nav >
          <ul className='flex justify-center items-center gap-6'>
            <Link href={'/home'}>
            <li>Home</li>
            </Link>
            <Link href={'/services'}>
            <li>Services</li>
            </Link>
            <Link href={'/about'}>
            <li>about</li>
            </Link>
            <Link href={'/contact'}>
            <li>contact us</li>
            </Link>
            
          </ul>
        </nav>
    </div>
  )
}
