import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Tilt from 'react-tilt'
import './foundation.css'
export default function Foundation() {
  return (
    <div className='foundationC'>
      <div className="inner">

        <div className='top'>
          <div>
            <h1>The KYNNO Foundation</h1>
          </div>
          <div>
          <p>
            The Kynno Foundation will be created with a mission to accelerate decentralized technologies
            adoption to the masses. The vision of a world where individuals are empowered to retain
            ownership of their data and can access networks through which they transfer value
            without being reliant on third-parties. The Kynno Foundation’s initial focus will be
            expanding and developing the ecosystem of the Kynno Network.
          </p>
          </div>
        </div>
        <Row className='justify-content-center align-items-center'>
          <Col  xs={12} sm={8} md={4}  className='mycol'>
            <Tilt className="Tilt foundationBox" options={{ max : 25 }} >
              <h4>Grant and Delegation Programs:</h4>
              <p>The Kynno Foundation will reserve funds for R&D
                initiatives led by third parties that bring value to the
                ecosystem’s growth.</p>
            </Tilt>
          </Col>
          <Col  xs={12} sm={8} md={4}  className='mycol'>
            <Tilt className="Tilt foundationBox" options={{ max : 25 }} >
            <h4>Research:</h4>
            <p>The Kynno Foundation will reserve funds for R&D
              initiatives led by third parties that bring value to the
              ecosystem’s growth.</p>
            </Tilt>
          </Col>
          <Col  xs={12} sm={8} md={4}  className='mycol'>
            <Tilt className="Tilt foundationBox" options={{ max : 25 }} >
            <h4>Education and Advancement:</h4>
            <p>A Kynno school to educate people, companies and
              governments and leverage knowledge to push for
              decentralized technologies’ mass adoption.</p>
            </Tilt>
          </Col>
         
        </Row>
      </div>
    </div>
  )
}
