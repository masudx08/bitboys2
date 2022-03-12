import React from 'react'
import './customSlider.css'
import Line from '../../../images/line.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tilt from 'react-tilt'
export default function CustomSlider({ data, desktop, tab, mobile }) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: desktop
    },
    tablet: {
      breakpoint: { max: 991, min: 751 },
      items: tab
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: mobile
    }
  };
  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={false}>
        {
          data && data.map((item, index) => {
            return (
              <div key={index}>
                <Tilt 
                options = {
                  {
                    reverse:        false,  // reverse the tilt direction
                    max:            15,     // max tilt rotation (degrees)
                    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
                    speed:          300,    // Speed of the enter/exit transition
                    transition:     true,   // Set a transition on enter/exit.
                    axis:           null,   // What axis should be disabled. Can be X or Y.
                    reset:          true    // If the tilt effect has to be reset on exit.
                  }
              }
                className="Tilt slider-container"  >
                  <div className='sliderC'>
                    <div key={item}>
                   
                      <h4>{item.title1}</h4>
                      <p>
                        {item.description1}
                      </p>
                      <h5>
                        {item.title2}
                      </h5>
                      <p>
                        {item.description2}
                      </p>
                      <h5>
                        {item.title3}
                      </h5>
                      <p>
                        {item.description3}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </div>
            )
          })
        }
        {
          !data &&
          <div>nothing</div>
        }
      </Carousel>


    </div>
  )
}
