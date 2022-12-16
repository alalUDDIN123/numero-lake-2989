import React from 'react'
import "../styles/Footer.css"
import facebook from "../styles/facebook.svg"
import insta from "../styles/instagram.svg"
import twitter from "../styles/twitter.svg"
import gpay from "../styles/gpay.svg"
import apple from "../styles/apple.svg"

const Footer = () => {
  return (
    <div className='footer' >
      <div className='upper' >
        <div>
          <h5>POPULAR LOCATIONS</h5>
          <p>Kolkata</p> <p>Mumbai</p><p>Chennai</p><p>Pune</p>
        </div>
        <div><h5>TRENDING LOCATIONS</h5>
        <p>Bhubaneshwar</p> <p>Hyderabad</p><p>Chandigarh</p><p>Nashik</p>
       </div>
        <div><h5>ABOUT US</h5>
        <p>About OLX Group</p> <p>Careers
</p><p>Contact Us</p><p>OLXPeople</p> <p>Waah Jobs</p> </div>
        <div><h5>OLX</h5>
        <p>Help</p> <p>Sitemap</p><p>Legal & Privacy information</p><p>Blog</p> <p>OLX Autos Sell Car</p></div>
        <div><h5>FOLLOW US</h5>
        <div className='logo'>
  <img src={facebook} />
  <img src={insta} />
  <img src={twitter} />
  
        </div>
        <div className='lower_logo'>
        <img src={gpay}/>
  <img src={apple}/>
       </div></div>
      </div>
      <div className='lower' >
        <div className='left' >
          <h5>Other Countries</h5>
          <p> Pakistan-</p><p>South Africa-</p>
          <p>Indonesia</p>
        </div>
        <div className='right' >
          <p>All rights reserved © 2006-2022 OLX</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
