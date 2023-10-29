"use client"

import React from 'react'
import "./index.css"

const Banner = () => {
  return (
    <>
    <section className='banner'>
      <aside className='banner_info'>
        <div className='banner_description'>
        <h1>CARNEIRO MOREIRA Steven</h1>
        <h2>Développeur Front-end</h2>
        <p>Création de site web moderne & responsive</p>
        </div>
      <img className='banner_photo'src='/images/maphoto.webp'></img>
      </aside>
    </section>
    </>
  )
}

export default Banner