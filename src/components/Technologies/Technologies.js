import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Tilt from 'react-tilt'
import './technologies.css'
export default function Technologies() {
  const tiltOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            15,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          300,    // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true    // If the tilt effect has to be reset on exit.
}
  return (

    <div className='techC'>
      <div>
        <div className='setbg-1'>
          <div className="inner1">
            <div>
              <div className='top'>
                <div>
                  <h1>Kynno Zkps Technologies</h1>
                </div>
                <div>
                  <div>
                    <p>Storing personal data in a decentralized way while guaranteeing its security
                      is made possible by combining Kynno’s disruptive blockchain technology and
                      Zero Knowledge Proof Protocols.
                    </p>
                    <p>
                      ‍Our network processes data, transactions, runs applications, operates
                      as a repository and serves as the regulating point of entry into
                      Kynno’s data ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <Row className='justify-content-center align-items-center'>
                <Col xs={12} sm={8} md={4} className='mycol'>
                  <Tilt className="Tilt techBox" options={tiltOptions} >
                    <div className="Tilt-inner">
                      <h4>Grant and Delegation Programs:</h4>
                      <p>
                        The Kynno Foundation will reserve funds for R&D
                        initiatives led by third parties that bring value to the
                        ecosystem’s growth.
                      </p>
                    </div>
                  </Tilt>
                </Col>
                <Col xs={12} sm={8} md={4} className='mycol'>
                  <Tilt className="Tilt techBox" options={tiltOptions} >
                    <div className="Tilt-inner">
                      <h4>Research:</h4>
                      <p>
                        The Kynno Foundation will reserve funds for R&D
                        initiatives led by third parties that bring value to the
                        ecosystem’s growth.
                      </p>
                    </div>
                  </Tilt>
                </Col>
                <Col xs={12} sm={8} md={4} className='mycol'>
                  <Tilt className="Tilt techBox" options={tiltOptions} >
                    <div className="Tilt-inner">
                      <h4>Education and Advancement:</h4>
                      <p>
                        A Kynno school to educate people, companies and
                        governments and leverage knowledge to push for
                        decentralized technologies’ mass adoption.
                      </p>
                    </div>
                  </Tilt>
                </Col>
              </Row>
            </div>

          </div>
        </div>
        <div className='setbg-2'>
          <div className="inner2">
            <h2>
              One unique platform connected
              to all ecosystems and centralizing
              your web 3.0 identity, assets, data
              and legal documents efficiently
              and securely.
            </h2>
            <h3 >Leadership Team Of KYNNO</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
