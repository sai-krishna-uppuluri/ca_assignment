import React from 'react'
import '../app/globals.css'
import '../styles/aboutStyles.css'
import Image from 'next/image'
import aboutImage from '../public/1.jpg'

export default function AboutSection() {
  return (
    <div className='uni-padding about-con'>
      <div className='about-text-con'>
        <h3>We are a full service New-age CA firm, with our office in Bangalore, India</h3>
        <p className='about-para-text'>
            Prakash & Rajaguru is a full service chartered accountancy firm based out of Bangalore, Karnataka, India. We are a member of the Institute of Chartered Accountants of India (ICAI) from April 2010 and have completed 10+ highly successful years in the profession. CA Rajaguru CG and CA AR Pai are currently the two partners of the firm and are well supported by several associates. All of us are driven by only one vision – to provide exceptional services to our clients with a high degree of professionalism, knowledge, trust & independence.
        </p>
        <p>Know more about us</p>
      </div>
      <div className='about-image-con'>
        <Image src={aboutImage} width={500} height={50} alt='about-section' className='about-image'/>
      </div>
    </div>
  )
}
