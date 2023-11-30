import React, {useEffect} from 'react'
import './Trending.css'
// Import icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

// Import images
import car1 from '../../assets/campbell.jpg'
import car2 from '../../assets/dillon.jpg'
import car3 from '../../assets/goh.jpg'
// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Trending = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
    }, [])

  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 data-aos='fade-up' className="secTitle">Trending Near You</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending