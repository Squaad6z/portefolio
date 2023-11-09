import React, {useState} from "react";
import "./index.css"

const images= [
    '/images/NinaCarducci.webp',
    '/images/PrintIt.webp',    
]

const infoProjet = [
    {
        name : "Nina Carducci",
        subtitle : "Optimisez le référencement d'un site de photographe",
        competence : "Optimiser la performance d'un site web",
        tags : "HTML CSS JAVASCRIPT"


    },
    {
        name : "Print It",
        subtitle : "Premiers pas sur le langage JavaScript",
        competence : "Programmer en utilisant les fondamentaux de JavaScript",
        tags : "HTML CSS JAVASCRIPT "
    }
    
]
const Carousel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [modalActive, setModalActive] = useState(false)


const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1 )% images.length); 
}

const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 +images.length) % images.length);
}

const toggleModal = () => {
    setModalActive(!modalActive);
}

const modalClass = modalActive ? "modal active" : "modal";

return (
    <section className="carousel">
        <div className="modal_container">
        <div className={modalClass}>
            <button className="close_modal modal_trigger" onClick={toggleModal}>X</button>
            <h1>{infoProjet[carouselIndex].name}</h1>
            <p>{infoProjet[carouselIndex].subtitle}</p>
            <h2>Compétences évaluées</h2>
            <p>{infoProjet[carouselIndex].competence}</p>
            <p>{infoProjet[carouselIndex].tags}</p>
        </div>
        </div>
        <button onClick={prevSlide} className="prevButton">
            <img src="/images/chevron-up-solid.svg"></img>
        </button>
        <div className="slide">
            <img className="carousel_image"src={images[carouselIndex]}></img>
            <button onClick={toggleModal} className="modal_info modal_trigger">i</button>
        </div>
        <button onClick={nextSlide} className="nextButton"> 
            <img src="/images/chevron-down-solid.svg"></img>
        </button>
    </section>
)

}

export default Carousel
