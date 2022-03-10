import React, {useState} from 'react'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap'
import {ImCross} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import './mynavbar.css'
import Logo from '../../images/logo.png'
import Logo2 from '../../images/main-logo.png'
export default function MyNavbar() {

 function openSidebar(){
   const customSidebar = document.getElementById('customSidebar')
   const classnames = customSidebar.className.replace('hideIt','')
   customSidebar.className = classnames
 }
 function closeSidebar(){
   const customSidebar = document.getElementById('customSidebar')
   customSidebar.className += ' hideIt'
 }
  return (
    <div className='mynavbarC' id="home">
      <Navbar expand="lg" className='p-0'>
      <div className='navbar-nav'>
        <div  style={{width: '206px'}}>
          <Navbar.Brand href="#home" className='hideInMobile'>
            <img className='nav-logo' src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
        <Nav className="me-auto links hideTheMenu">
        <Nav.Link href="#whitepaper" >Whitepaper</Nav.Link>
            <Nav.Link href="#tokenomics" >Tokenomics</Nav.Link>
            <Nav.Link href="#team" >Team</Nav.Link>
            <Nav.Link href="#usecases" >Usecases</Nav.Link>
            </Nav>
        {/* <Navbar.Collapse id="basic-navbar-nav">
           
        </Navbar.Collapse> */}
        </div>
        <div className='nav-icon'>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={openSidebar} />
            {/* <Navbar.Brand href="#home" className='hideInDesktop'>
              <img className='nav-logo' src={Logo} alt="" />
            </Navbar.Brand> */}
          </div>
          <div className='d-flex outlineBtn'>
            <p>Invest in Pre-Seed</p>
          </div>
        </div>
      </div>
      <div className="hideInDesktop customSidebar hideIt" id='customSidebar'>
        <Nav className="me-auto">
           
          <div className='crossbtn d-flex justify-content-between'>
            <img src={Logo} style={{width:'100px', marginLeft: '10px'}} alt="" />
            <ImCross onClick={closeSidebar} />
          </div>
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#whitepaper" >Whitepaper</Nav.Link>
            <Nav.Link href="#tokenomics" >Tokenomics</Nav.Link>
            <Nav.Link href="#team" >Team</Nav.Link>
            <Nav.Link href="#usecases" >Usecases</Nav.Link>
          </Nav>
      </div>
    </Navbar>
    </div>
  )
}