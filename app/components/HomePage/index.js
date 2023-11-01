"use client"
import React from 'react'
import "./index.css"


const HomePage = () => {
  return (
    <section className='homepage'>
    <section className='homepage_title'>
    <h1>CARNEIRO MOREIRA Steven</h1>
    <h2 className='homepage_first_title'></h2>
    <h2 className='homepage_second_title'></h2>
    </section>
    <aside className='homepage_round'>
    <img className='homepage_photo' src='images/photoprofil_mini.webp'></img>
    <aside className='homepage_description'>
    <ul className='description_liste'>
      <li className='description_liste age'>24 ans</li>
      <li className='description_liste region'>Oise</li>
      <li className='description_liste ville'>Cuts</li>
    </ul>
    </aside>
    <div id='homepage_bar'>
    <hr id='homepage_bar_scroll'></hr>
    </div>
    </aside>
    <section className='informations'>
      <h3>À propos de moi</h3>
      <p>Passionné par la création d'expériences web élégantes et conviviales,
         je suis un développeur front-end dévoué, toujours à la recherche de nouvelles façons
         d'allier design et fonctionnalité pour offrir des solutions numériques exceptionnelles.
      </p>
    </section>
    <section>
      <h1></h1>
    <section className='services'>
      <aside className='services_informations'></aside>
      <aside className='services_informations'></aside>
      <aside className='services_informations'></aside>
    </section>
    </section>
    </section>
  )
}

export default HomePage