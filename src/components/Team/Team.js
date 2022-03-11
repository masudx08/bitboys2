import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './team.css'
import Simo from '../../images/t-profile1.png'
import Nilton from '../../images/t-profile2.png'
import Ahmed from '../../images/t-profile3.png'
import Task1 from '../../images/task-profile1.png'
import Task2 from '../../images/task-profile2.png'
import Task3 from '../../images/task-profile3.png'
import Task4 from '../../images/task-profile4.png'
import Task5 from '../../images/task-profile5.png'
import Tooltip from '../_common/Tooltip/Tooltip';
export default function Team() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const teamMembers = [
    {
      name: 'Simo Alami',
      title: 'CEO & Co-Founder',
      img: Simo
    },
    {
      name: 'Nilton Rodrigues',
      title: 'CEO & Co-Founder',
      img: Nilton
    },
    {
      name: 'Ahmed Oubadi',
      title: 'CTO & Blockchain Expert',
      img: Ahmed
    },
  ]
  const taskForces = [
    {
      img: Task1,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task2,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task3,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task4,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task5,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task1,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task2,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task3,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task4,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
    {
      img: Task5,
      name: 'Simo Alami',
      title: 'CEO & Co-Founder'
    },
  ]


  return (
    <div id='team' className='teamC'>

      <div className="team">
        <div>
          <h1>Leadership Team</h1>
          <p>A Task Force Of Seasoned Professionals</p>
        </div>

        <div className='d-flex teamImages'>
          {
            teamMembers.map((member, id) => {
              return (
                <div key={id} className='memberCont'>
                  <div className='title'>
                    <p>{member.name}</p>
                    <small>{member.title}</small>
                  </div>
                  <Tooltip content={
                    <div className='text-center'>
                      Lorem Ipsum is simply <br />
                      dummy text of the printing  <br />
                      and typesetting industry.  <br />
                      Lorem Ipsum has been  <br />
                    </div>
                  }>
                    <div className='myImg'>
                      <img src={member.img} alt="" />
                    </div>
                  </Tooltip>

                </div>
              )
            })
          }
        </div>
      </div>
      <div className="task">
        <div className='text-area'>
          <h1>TaskForce</h1>
          <p>At Kynno we are not a team, we are a taskforce of experienced
            professionals working tirelessly to make this project the Unicorn of Crypto!</p>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        dotListClass="custom-dot-list-style"
      >

        {
          taskForces.map((task, id) => {
            return (
              <div key={id} className='d-flex taskImages'>
                <div key={id}>
                  <div>
                    <img src={task.img} alt="" />
                    <div className='title text-center'>
                      <p>{task.name}</p>
                      <small>{task.title}</small>
                    </div>
                  </div>
                </div>
              </div>

            )
          })
        }


      </Carousel >
    </div >
  )
}
