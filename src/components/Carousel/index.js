import React, {useState} from "react";
import "./index.css"

const images= [
    '/images/NinaCarducci.webp',
    '/images/PrintIt.webp',
    './images/ohmyfood.webp',
    './images/argentbank.webp',    
]

const infoProjet = [
    {
        name : "Nina Carducci",
        subtitle : "Optimisez le référencement d'un site de photographe",
        competence : "Optimiser la performance d'un site web",
        tags : ["HTML", "CSS", "JAVASCRIPT"],
        github : "https://github.com/Squaad6z/ninacarducci",

    },
    {
        name : "Print It",
        subtitle : "Premiers pas sur le langage JavaScript",
        competence : "Programmer en utilisant les fondamentaux de JavaScript",
        tags : ["HTML", "CSS", "JAVASCRIPT"],
        github :"https://github.com/Squaad6z/Print-it",
    },
    {
        name : "Ohmyfood",
        subtitle : "Améliorez l'interface d'un site mobile avec des animations CSS",
        competence : "Intégrer une maquette en mobile-first & Mettre en œuvre des animations CSS",
        tags : ["HTML", "CSS"],
        github :"https://github.com/Squaad6z/Ohmyfood",
    },
    {
        name : "Argent Bank",
        subtitle : "Implémentez le front-end d'une application bancaire avec React",
        competence : "Afficher les données du back end sur l'interface via des appels API & Configurer des routes API pour la communication client / serveur & Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front",
        tags : ["HTML", "CSS", "JAVASCRIPT", "REACT", "REDUX"],
        github : "https://github.com/Squaad6z/argent-bank",

    },
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

// const toggleModal = () => {
//     setModalActive(!modalActive);
// }

const openGithub = () => {
    const githubLink = infoProjet[carouselIndex].github;
    window.open(githubLink, '_blank');
}

// const modalClass = modalActive ? "modal active" : "modal";

return (
    <section className="carousel">
        <div className="modal_container">
        <div className="modal">
            {/* <button className="close_modal modal_trigger" onClick={toggleModal}>X</button> */}
            <h1>{infoProjet[carouselIndex].name}</h1>
            <p>{infoProjet[carouselIndex].subtitle}</p>
            <h2>Compétences évaluées</h2>
            <p>{infoProjet[carouselIndex].competence}</p>
            <ul className="tags">
            {infoProjet[carouselIndex].tags.map((tag, index) => (
              <li key={index} className={`tag tag_${tag.toLowerCase()}`}>{tag}</li>
            ))}
          </ul>
            <button type="submit" className='github' onClick={openGithub}><img src="./images/github.svg"></img></button>
        </div>
        </div>
        <button onClick={prevSlide} className="prevButton">
            <img src="/images/chevron-up-solid.svg"></img>
        </button>
        <div className="slide">
            <img alt="image projet" className="carousel_image"src={images[carouselIndex]}></img>
            {/* <button onClick={toggleModal} className="modal_info modal_trigger">i</button> */}
        </div>
        <button onClick={nextSlide} className="nextButton"> 
            <img src="/images/chevron-down-solid.svg"></img>
        </button>
    </section>
)

}

export default Carousel