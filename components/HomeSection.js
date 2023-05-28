import React from 'react'
import Navbar from './navbar'
import '../styles/homestyles.css'

function HomeSection() {
  return (
    <div className='home-con'>
      <Navbar />
      <div className='home-banner-text'>
        <h1>New-age firm of substance</h1>
        <p>professionalism, knowledge, trust & independence define us</p>
      </div>
    </div>
  )
}

export default HomeSection
