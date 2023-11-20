import React from 'react'
import './index.css'

const HardSkills = () => {
  return (
    <section className='content'>
      <div className='box html'>
        <span className="--i:1;"><img src='../images/Html5.webp'></img></span>
        <p className='description'>Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5
        Le langage de balisage conçu pour représenter les pages web.</p>
      </div>
      <div className='box css'>
        <span className="--i:2;"><img src='../images/css3.webp'></img></span>
        <p className='description'>CSS de l'anglais Cascading Style Sheets (feuilles de style en cascade)
        C'est un langage informatique qui décrit la présentation des documents HTML et XML</p>
      </div>
      <div className='box js'>
        <span className="--i:3;"><img src='../images/js.webp'></img></span>
        <p className='description'>JavaScript est un langage de programmation principalement employé dans
         les pages web interactives et à ce titre est une partie essentielle des applications web.</p>
      </div>
      <div className='box react'>
        <span className="--i:4;"><img src='../images/react.webp'></img></span>
        <p className='description'>React est une bibliothèque JavaScript libre développée par Facebook
        Cette bibliothèque à pour but de faciliter la création d'application web via la création de composants</p>
      </div>
      <div className='box redux'>
        <span className="--i:5;"><img src='../images/redux.webp'></img></span>
        <p className='description'>Redux est une bibliothèque open-source JavaScript de gestion d'état pour applications web
        plus couramment utilisée avec des bibliothèques comme React ou Angular pour la construction d'interfaces utilisateur.</p>
      </div>
      <div className='box next'>
        <span className="--i:6;"><img src='../images/next.webp'></img></span>
        <p className='description'>Next.js est un framework gratuit et open source s'appuyant sur la bibliothèque 
        JavaScript React et sur la technologie Node.js.</p>
      </div>
    </section>

  )
}

export default HardSkills