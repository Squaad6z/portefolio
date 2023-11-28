"use client"
import React from 'react'
import "./index.css"


const HomePage = () => {
  return (
    <section className='homepage' id='presentation'>
      <section className='homepage_presentation'>
        <section className='homepage_title'>
          <h1>CARNEIRO MOREIRA Steven</h1>
          <p className='homepage_first_title'>
            Enthousiaste et déterminé, je suis un développeur Front-End junior de 24 ans passionné par la création d'expériences web engageantes.
            <br></br>
            Ma carrière dans le développement a débuté après une reconversion, où j'ai suivi une formation initialisation Full-Stack de 3 mois chez OpenClassrooms.<br></br>
            Ce premier contact avec le monde du développement a été une révélation pour moi, stimulant ma curiosité et ma passion pour la création numérique.
          </p>
        </section>
        <section className='homepage_profil'>
          <aside className='homepage_round'>
            <img className='homepage_photo' src='images/photoprofil.jpg'></img>
          </aside>
          <div id='homepage_bar'>
          </div>
        </section>
      </section>
      <section className='informations'>
        <h2>Mon Parcours</h2>
        <p>
          J'ai choisi de poursuivre ma formation en intégration web chez OpenClassrooms. C'est là que j'ai consolidé mes compétences en tant qu'intégrateur web,
          découvrant le plaisir de transformer des designs inspirants en réalité interactive.
          Mon parcours m'a permis de développer une solide compréhension des technologies Front-End modernes telles que HTML, CSS, JavaScript, et des frameworks
          tels que React, Redux, Next.JS. Je suis constamment à l'affût des nouvelles tendances et des meilleures pratiques pour créer des interfaces utilisateur
          intuitives et esthétiques.
        </p>
        <br></br>
        <p>
          Aujourd'hui, je suis passionné par l'idée de contribuer à des projets innovants, d'apprendre continuellement et de collaborer avec des équipes créatives.
          Mon engagement envers le développement web et ma volonté d'apprendre font de moi un professionnel déterminé à relever de nouveaux défis et à évoluer constamment dans ce domaine dynamique.
        </p>
      </section>
    </section>
  )
}

export default HomePage