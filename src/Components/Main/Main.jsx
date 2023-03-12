import React, { useEffect } from 'react'
import './main.css'
import img from '../../Assets/image/image1.jpg'
import img2 from '../../Assets/image/image2.jpg'
import img3 from '../../Assets/image/image3.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id:1,
    imgsrc:img,
    destTitle: 'Bora Bora',
    location: "New Zealand",
    grade: "CULTUTRAL RELAX",
    fees: "$700",
    description: "The epitome of romance, Bora Bora is one of the best destinations in the world."
  },
  {
    id: 2,
    imgsrc:img3,
    destTitle: 'Cinque Terre',
    location: "Italy",
    grade: "CULTUTRAL RELAX",
    fees: "$840",
    description: "The vibrant hues of the houses are its benchmark and explain the beauty of this place. It represents the harmonious interaction between people and nature to produce a landscape of exceptional scenic quality"
  },
  {
    id: 3,
    imgsrc:img2,
    destTitle: 'Guanajuato',
    location: "Mexico",
    grade: "CULTUTRAL RELAX",
    fees: "$802",
    description: "Guanajuato is a city in central Mexico. It's known for its silver mining history and colonial architecture."
  },
]

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  
  }, [])
  

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgsrc,destTitle,fees,grade,description,location}) => {
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>

                  </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                  
                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                </div>
              </div>
            )
          }
          )
        }
      </div>

    </section>
  )
}

export default Main