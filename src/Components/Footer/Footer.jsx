import React, {useEffect} from 'react'
import './Footer.css'

// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
    }, [])

  return (
    <div className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* Single grid1 */}
          <div className="singleGrid" data-aos='fade-up'>
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">How It works</li>
              <li className="footerLi">Carrers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>

          {/* Single grid2 */}
          <div className="singleGrid" data-aos='fade-up'>
            <span className="footerTitle">
              Become Seller
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">Add vehicles</li>
              <li className="footerLi">Resource center</li>
              <li className="footerLi">Bond</li>
              <li className="footerLi">Release Dates</li>
            </ul>
          </div>

          {/* Single grid3 */}
          <div className="singleGrid" data-aos='fade-up'>
            <span className="footerTitle">
              Community
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">Recommendations</li>
              <li className="footerLi">Gift Cards</li>
              <li className="footerLi">Top Ups</li>
              <li className="footerLi">Selling</li>
            </ul>
          </div>

          {/* Single grid4 */}
          <div className="singleGrid" data-aos='fade-up'>
            <span className="footerTitle">
              Booking Support
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">Updates for COVID-19</li>
              <li className="footerLi">Help center</li>
              <li className="footerLi">Garages</li>
              <li className="footerLi">Trust & Safety</li>
            </ul>
          </div>
        </div>

        {/* Footer Lower section */}
        <div className="lowerSection grid">
          <p>&copy; 2023 All rights reserved</p>
          <blockquote>Made with ❤️ by Hasrouf</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer