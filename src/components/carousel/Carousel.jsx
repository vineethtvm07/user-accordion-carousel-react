import './carousel.css'
import {images} from '../Api/CarouselData'
import { useState } from 'react'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined, ClearOutlined} from '@material-ui/icons'


function Carousel() {
  const path = window.location.replace
  const [currentImage, setCurrentImage] = useState(0)
  const handlePrev = () => {
    currentImage > 0 && setCurrentImage(currentImage - 1)
  }

  const handleFrd = () => {
    currentImage < images.length -1  && setCurrentImage(currentImage + 1)
  }

  return (
    <div className='container'>
      <div className="carousel">
        <div className="home-btn">
        <button onClick={(e) => window.location.replace("/")} 
          className='home-btn'> <ClearOutlined/> </button>
        </div>
        <div className="carouselInner" style={{backgroundImage:`url( ${images[currentImage].imgs})`}}>

            {currentImage !== 0 &&  <div className="left-icon" onClick={handlePrev}> 
            <ArrowBackIosOutlined className='arrow-icon'/> </div>}

            {currentImage < images.length - 1 && <div className="right-icon" onClick={handleFrd}> 
            <ArrowForwardIosOutlined className='arrow-icon'/> </div>}
    
        </div>
      </div>
    </div>
  )
}

export default Carousel
