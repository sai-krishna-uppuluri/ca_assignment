import React from 'react'
import '../styles/footerStyles.css'

function FooterSection() {
  return (
    <div className='footer-con'>
        <div className='footer-inner-con'> 
            <div className='footer-each-con'>
                <h1> Contact Us </h1>
                <h3>Prakash & Rajaguru</h3>
                <p>185/7, 2nd Floor, Chandra Plaza</p>
                <p>8th F Main Road, 26th Cross</p>
                <p>Chandra Plaza, Jayanagar 3rd Block</p>
                <p>Bangalore – 560011, Karnataka, India</p>
                <p>Phone: 91-80-26538257</p>
                <p >Email: start@pandr.in</p>
            </div>
            <div className='footer-each-con footer-home-con'>
                <h1>Home </h1>
                <p> About Us </p>
                <p> Work With Us </p>
                <p> Our Team</p>
            </div>
            <div className=' footer-each-con footer-service-con'>

                <h1> Services </h1>
                <p>consulting </p>
                <p> Accounting </p>
                <p>Assurance </p>
                <p> Tax </p>
            </div>
            <div className='footer-each-con footer-privacy-con'>
                <h1> Others</h1>
                <p> Disclaimer </p>
                <p> Privacy Policy </p>
            </div>
        </div>
        <p className='text-color'> Copyright (c) 2023 Prakash and Rajaguru, Bangalore, India. All Rights Reserved.</p>
    </div>
  )
}

export default FooterSection
