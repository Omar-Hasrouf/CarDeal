import React, {useEffect} from 'react'
import './Home.css'

import homeImage from '../../assets/aaron.jpg'

// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
  Aos.init(
    {
      duration: 30000
    }
  )
  }, [])

  return (
    <div className='home'>
      <div className="secContainer">
        
        <div data-aos='fade-up' className="homeText">
          <span className="homeSpan">
            Meet your new car
          </span>
          <h1 className="homeTitle">
            Honda Civic Type R
          </h1>
          <div className="btns flex">
            <button data-aos='fade-right' className="btn">More details</button>
            <button data-aos='fade-left' className="btn primaryBtn">Test drive</button>
          </div>
        </div>
        
        <div  data-aos='fade-down-right' className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>
  )
}

export default Home