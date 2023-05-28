import Image from 'next/image'
import React from 'react'
import '../app/globals.css'
import '../styles/contactStyles.css'
import contactImage from '../public/6.jpg'

function ContactSection() {
  return (
    <div className='contact-con'>
        <div className='contact-image-con'>
            <Image src={contactImage} height={400} width={500} alt='contact-section' className='contact-image'/>
        </div>
        <div className='contact-button-con'>
            <button className='contact-button' type='button'> Contact Us </button>
        </div>
    </div>
  )
}

export default ContactSection
