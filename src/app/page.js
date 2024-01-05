"use client"
import Image from 'next/image'
import profile from '../../public/vercel.svg'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <main>
      <h1 className={roboto.className}>Data Fetching With API Calling in Client Side Component and Redirection with Component</h1>


    </main>
  )
}
