import React, {useState} from "react";
import './index.css'


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
        website : "https://squaad6z.github.io/ninacarducci/"

    },
    {
        name : "Print It",
        subtitle : "Premiers pas sur le langage JavaScript",
        competence : "Programmer en utilisant les fondamentaux de JavaScript",
        tags : ["HTML", "CSS", "JAVASCRIPT"],
        github :"https://github.com/Squaad6z/Print-it",
        website : "https://squaad6z.github.io/Print-it/"
    },
    {
        name : "Ohmyfood",
        subtitle : "Améliorez l'interface d'un site mobile avec des animations CSS",
        competence : "Intégrer une maquette en mobile-first & Mettre en œuvre des animations CSS",
        tags : ["HTML", "CSS"],
        github :"https://github.com/Squaad6z/Ohmyfood",
        website : "https://squaad6z.github.io/Ohmyfood/"
    },
    {
        name : "Argent Bank",
        subtitle : "Implémentez le front-end d'une application bancaire avec React",
        competence : "Afficher les données du back end sur l'interface via des appels API & Configurer des routes API ",
        tags : ["HTML", "CSS", "JAVASCRIPT", "REACT", "REDUX"],
        github : "https://github.com/Squaad6z/argent-bank",

    },
]
const Realisations = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);


const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1 )% images.length); 
}

const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 +images.length) % images.length);
}


const openGithub = () => {
    const githubLink = infoProjet[carouselIndex].github;
    window.open(githubLink, '_blank');
}

const openWebsite = () => {
    const websiteLink = infoProjet[carouselIndex].website;
    window.open(websiteLink, '_blank')
}

return (
    <section className="realisations" id="realisations">
        <div className="realisations_intro">
        <h2>Mes Réalisations</h2>
        <p>Découvrez un aperçu de quelques-uns des projets que j'ai réalisés au cours de ma formation en développement web.
         Chaque projet représente un défi unique et une opportunité d'apprentissage, illustrant ma passion pour la création et la résolution de problèmes.</p>
        </div>
        <section className="carousel">
        <div className="modal_container">
        <aside className="modal">
            <h2>{infoProjet[carouselIndex].name}</h2>
            <p>{infoProjet[carouselIndex].subtitle}</p>
            <h3>Compétences évaluées</h3>
            <p>{infoProjet[carouselIndex].competence}</p>
            <ul className="tags">
            {infoProjet[carouselIndex].tags.map((tag, index) => (
              <li key={index} className={`tag tag_${tag.toLowerCase()}`}>{tag}</li>
            ))}
          </ul>
            <button type="submit" aria-label="GitHub" className='github' onClick={openGithub}><img alt="github logo" src="./images/github.svg"></img></button>
            <button type="submit" aria-label="website" className='github' onClick={openWebsite}><img alt="pc logo" src="./images/desktop-solid.svg"></img></button>
        </aside>
        </div>
        <section className="slide_container">
        <button onClick={prevSlide} aria-label="Prev" className="prevButton">
            <img className="slide_button prev" alt="fleche haut" src="/images/chevron-up-solid.svg"></img>
        </button>
        <div className="slide">
            <img alt="image projet" className="carousel_image"src={images[carouselIndex]}></img>
        </div>
        <button onClick={nextSlide} aria-label="Next" className="nextButton">
            <img className="slide_button next" alt="fleche bas"  src="/images/chevron-down-solid.svg"></img>
        </button>
        </section>
        </section>
    </section>
)

}

export default Realisations