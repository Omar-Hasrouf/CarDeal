import React, {useEffect} from 'react'
import './Review.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'

import car1 from '../../assets/marc.jpg'
import car2 from '../../assets/campbell.jpg'
import car3 from '../../assets/goh.jpg'
import user1 from '../../assets/hipp.jpg'
import user2 from '../../assets/vicky.jpg'
import user3 from '../../assets/hipp.jpg'

import { AiFillStar } from 'react-icons/ai'
// Import AOS for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {
  // Let's initialize Aos and set the default animation duration
  useEffect(()=>{
    Aos.init(
      {
        duration: 2000
      }
    )
    }, [])

  return (
    <div className='review section'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">
            Recent Reviews
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/* Single review */}
          <div className="singleReview grid" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comforatble and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jack Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          {/* Single review */}
          <div className="singleReview grid" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Honda
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comforatble and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user2} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Sam Neil
                  </span>
                  <p>CTO</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          {/* Single review */}
          <div className="singleReview grid" data-aos='fade-up'>
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="reviewTitle">
              2023 Dacia Duster
            </h5>
            <span className="desc">
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comforatble and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user3} alt="Reviewer Image" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jeff Neilsen
                  </span>
                  <p>CPO</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review