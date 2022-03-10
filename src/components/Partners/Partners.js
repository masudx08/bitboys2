import React from 'react'
import './partners.css'
import Partner1 from '../../images/partner-img.png'
import { Col, Row } from 'react-bootstrap'
export default function Partners() {
  const partners = [
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
  ]
  return (
    <div className='partnerC'>
      <div>
        <h1>Kynno Partners</h1>
      </div>
      <Row className='justify-content-center'>
        {
          partners.map(partner=>{
            return (
              <Col xs={6} md={4}>
                <div>
                  <img src={partner.img} alt="" />
                </div>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
