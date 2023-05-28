import React from 'react'
import '../app/globals.css'
import '../styles/businessStyles.css'
import Image from 'next/image'
import businessImage from '../public/2.jpg'

export default function BusinessSection() {
  return (
    <div className='uni-padding business-con'>
      <div className='business-image-con'>
        <Image src={businessImage} width={500} height={50} alt='business-section' className='business-image'/>
      </div>
      <div className='business-text-con'>
        <h3>We are a full service New-age CA firm, with our office in Bangalore, India</h3>
        <p className='business-para-text'>
            Prakash & Rajaguru is a full service chartered accountancy firm based out of Bangalore, Karnataka, India. We are a member of the Institute of Chartered Accountants of India (ICAI) from April 2010 and have completed 10+ highly successful years in the profession. CA Rajaguru CG and CA AR Pai are currently the two partners of the firm and are well supported by several associates. All of us are driven by only one vision – to provide exceptional services to our clients with a high degree of professionalism, knowledge, trust & independence.
        </p>
        <p>Know more about us</p>
      </div>
    </div>
  )
}
