import './Sellers.css'

import React, {useEffect} from 'react'
// Import images
import sellerImage1 from '../../assets/toyota.png'
import sellerImage2 from '../../assets/mercedes.png'
import sellerImage3 from '../../assets/ds.png'
import sellerImage4 from '../../assets/audi.png'

// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sellers = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
    }, [])
  
  return (
    <div className='sellers section'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading grid">
          <h3 className="secTitle">
            Explore Top sellers in town
          </h3>

          <p>Joseph Samuel holds the Guinsess World Record for being the greatest salesman in the world.</p>
        </div>

        <div className="sellersContainer grid">
          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className='img' />
            </div>
            <span className="info">
              <h4 className="name">
                Toyota
              </h4>
              <p>from $40k</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage2} alt="" className='img' />
            </div>
            <span className="info">
              <h4 className="name">
                Mercedes Benz
              </h4>
              <p>from $60k</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage3} alt="" className='img' />
            </div>
            <span className="info">
              <h4 className="name">
                Volkswagen
              </h4>
              <p>from $35k</p>
            </span>
          </div>

          {/* Single seller */}
          <div data-aos='fade-up' className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage4} alt="" className='img' />
            </div>
            <span className="info">
              <h4 className="name">
                Hyundai
              </h4>
              <p>from $23k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellers