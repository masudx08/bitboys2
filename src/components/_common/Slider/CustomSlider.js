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
      breakpoint: { max: 3000, min: 1700 },
      items: desktop
    },
    tablet: {
      breakpoint: { max: 1699, min: 751 },
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
                <Tilt className="Tilt slider-container"  >
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
