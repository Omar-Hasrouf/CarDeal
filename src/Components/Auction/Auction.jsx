import React, {useEffect} from 'react'
import './Auction.css'
// Import icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

// Import images
import car1 from '../../assets/goh.jpg'
import car2 from '../../assets/joey.jpg'
import car3 from '../../assets/joshua.jpg'
import car4 from '../../assets/kevin.jpg'
import car5 from '../../assets/lance.jpg'
import car6 from '../../assets/stefan.jpg'


// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
    }, [])
  
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car6} alt="Car Image" />
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

            <div className="price_buyBtn flex">
              <span className="price">
                $41,200
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car5} alt="Car Image" />
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

            <div className="price_buyBtn flex">
              <span className="price">
                $51,200
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid">
            <div className="imgDiv">
              <img src={car4} alt="Car Image" />
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

            <div className="price_buyBtn flex">
              <span className="price">
                $38,200
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid singleCarActive">
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

            <div className="price_buyBtn flex">
              <span className="price">
                $20,200
              </span>
              <span className="buyBtn">
                Buy Now
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

            <div className="price_buyBtn flex">
              <span className="price">
                $21,200
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>

          {/* Single Car Div*/} 
          <div data-aos='fade-up' className="singleCar grid singleCarActive">
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

            <div className="price_buyBtn flex">
              <span className="price">
                $15,200
              </span>
              <span className="buyBtn">
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auction