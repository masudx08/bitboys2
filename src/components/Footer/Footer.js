import React from 'react'
import './footer.css'
import { FormControl, InputGroup } from 'react-bootstrap'
import Logo from '../../images/logo.png'
import Twitter from '../../images/twitter.png'
import Medium from '../../images/medium.png'
import Github from '../../images/github.png'
import Discord from '../../images/discord.png'
export default function Footer() {
  return (
    <div className='footerC'>
    
    <div className='hideInDesktop footerIcon'>
      <div className='footLogo'>
        <img src={Logo} alt="" />
      </div>
        <div className='d-flex'>
          <div className='icon-bg'><img src={Twitter} alt=''/></div>
          <div className='icon-bg'><img src={Medium} alt='' /></div>
          <div className='icon-bg'><img src={Github} alt='' /></div>
          <div className='icon-bg'><img src={Discord} alt='' /></div>
        </div>
      </div>
    <div className='footer-bottom'>
      <div style={{width:'206px'}} className='hideInMobile'>
        <img src={Logo} alt="" />
      </div>
      <div>
        <p>© 2022 Kynno. All Rights Reserved</p>
      </div>
      <div className='hideInMobile'>
        <div className='d-flex '>
        <div className='icon-bg'><img src={Twitter} alt=''/></div>
          <div className='icon-bg'><img src={Medium} alt='' /></div>
          <div className='icon-bg'><img src={Github} alt='' /></div>
          <div className='icon-bg'><img src={Discord} alt='' /></div>
        </div>
      </div>
    </div>
  </div>
  )
}
