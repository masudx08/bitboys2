import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css'
export default function About() {
  return (
    <div className='aboutC relative'>
      <div className="fixedText">
        Kynno is limitless
      </div>
      <div className="inner">
        <div>
          <h1 >Kynno Enterprise Grade <br /> Blockchain</h1>
        </div>
        <Row >
          <Col xs={12} md={6}>
            <div>
              <p >
                Kynno is a revolutionary decentralized permissionless enterprise
                grade blockchain platform, built to support and operate secure, 
                compliant, and cutting-edge digital infrastructures.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <p style={{fontWeight:'400'}}>
                Kynno is a revolutionary decentralized permissionless enterprise
                grade blockchain platform, built to support and operate secure, 
                compliant, and cutting-edge digital infrastructures.
              </p>
            </div>
          </Col>
        </Row>
        
        <div >
            <div className='setbg aboutBottom' >
              <div className='inner '>
                <h4>What is the objective of the KYNNO blockchain?</h4>
                <p style={{fontWeight:'400'}}>
                  Kynno’s main objective is to interface and communicate with other 
                  blockchains and wallets to gather data on all your assets. This data
                  is then sent to one centralized dashboard on your Kynno Data Hub
                  to be analyzed, organized and displayed.
                </p>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}
