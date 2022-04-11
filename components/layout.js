import { useState } from 'react'
import Navbar from '@/components/navbar.js'
import Footer from './footer.js'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
