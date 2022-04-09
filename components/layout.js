import { useState } from 'react'
import Footer from './footer.js'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
