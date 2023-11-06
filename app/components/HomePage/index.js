"use client"
import React from 'react'
import "./index.css"


const HomePage = () => {
  return (
    <section className='homepage'>
    <section className='homepage_presentation'>
    <section className='homepage_title'>
    <h1>CARNEIRO MOREIRA Steven</h1>
    <h2 className='homepage_first_title'></h2>
    <h2 className='homepage_second_title'></h2>
    </section>
    <section className='homepage_profil'>
    <aside className='homepage_description'>
    <ul className='description_liste'>
      <li className='description_liste age'>24 ans</li>
      <li className='description_liste region'>Oise</li>
      <li className='description_liste ville'>Cuts</li>
    </ul>
    </aside>
    <aside className='homepage_round'>
    <img className='homepage_photo' src='images/photoprofil_mini.webp'></img>
    </aside>
    <div id='homepage_bar'>
    <hr id='homepage_bar_scroll'></hr>
    </div>
    </section>
    </section>
    <section className='informations'>
      <h3>À propos de moi</h3>
      <p>Passionné par la création d'expériences web élégantes et conviviales,
         je suis un développeur front-end dévoué, toujours à la recherche de nouvelles façons
         d'allier design et fonctionnalité pour offrir des solutions numériques exceptionnelles.
      </p>
    </section>
    <section className='services'>
      <h2 className='services_title'>Mes Services</h2>
      <section className='services_bloc'>
      <aside className='services_informations'>
        <h4 className='services_informations_title'>Appliactions</h4>
        <p className='services_informations_description'>Concevoir des applications web interactives et fonctionnelles pour répondre à vos besoins spécifiques.</p>
      </aside>
      <aside className='services_informations'>
        <h4 className='services_informations_title'>Expérience Utilisateur & Design</h4>
        <p className='services_informations_description'>Créer des interfaces utilisateur intuitives et esthétiques qui garantissent une expérience mémorable pour vos visiteurs.</p>
      </aside>
      <aside className='services_informations'>
      <h4 className='services_informations_title'>Accessibilité</h4>
      <p className='services_informations_description'>Assurer que votre site web est accessible à tous en mettant en œuvre des normes d'accessibilité conformes.</p>
      </aside>
    </section> 
    </section>
    </section>
  )
}

export default HomePage