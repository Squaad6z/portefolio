import React, {useState} from "react";
import "./index.css"

const images= [
    '/images/banner.webp',
    '/images/banner.png',    
]

const Carousel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);


const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1 )% images.length); 
}

const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 +images.length) % images.length);
}

return (
    <section className="carousel">
        <button onClick={prevSlide} className="prevButton">
            <img src="/images/chevron-up-solid.svg"></img>
        </button>
        <div className="slide">
            <img className="carousel_image"src={images[carouselIndex]}></img>
        </div>
        <button onClick={nextSlide} className="nextButton"> 
            <img src="/images/chevron-down-solid.svg"></img>
        </button>
    </section>
)

}

export default Carousel
