import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container m-auto grid grid-rows-[auto,1fr,auto] min-h-screen px-4'>
        <header className='font-bold leading-[60px]'>Kin+Carta</header>
        <main className='py-12'>{children}</main>
        <footer className='text-center leading-[60px] opacity-80'>Made by 🐱‍👤 Martin</footer>
      </body>
    </html>
  )
}
