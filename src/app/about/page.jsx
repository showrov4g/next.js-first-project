'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function About() {
    const router = useRouter();
    const isLogin = false;
    const handleNavigation =()=>{
        if(isLogin){
            router.push('/about/address')
        }else{
            router.push('/')
        }
    }
  return (
    <div>
      <h1>This is about page</h1>
      <Link href={'/about/address'}>address</Link>
      <button type='button' className='' onClick={handleNavigation}>address page</button>
    </div>
  )
}
