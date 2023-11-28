import React from 'react'
import './index.css'

const HardSkills = () => {
  return (
    <section className='hard_skills' id='hardSkills'>
      <div className='hard_skills_intro'>
        <h2>Hard Skills</h2>
        <p>Découvrez mes compétences techniques à travers les langages de programmation que j'utilise au quotidien.</p>
      </div>
      <section className='hard_skills_content'>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>HTML5</h2>
            <img className='card_logo' src='../images/Html5.webp'></img>
            </span>
            <p>Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5
            Le langage de balisage conçu pour représenter les pages web.</p>
          </div>
        </div>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>CSS</h2>
            <img className='card_logo' src='../images/css3.webp'></img>
            </span>
            <p>CSS de l'anglais Cascading Style Sheets (feuilles de style en cascade)
            C'est un langage informatique qui décrit la présentation des documents HTML et XML</p>
          </div>
        </div>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>JAVASCRIPT</h2>
            <img className='card_logo' src='../images/js.webp'></img>
            </span>
            <p>JavaScript est un langage de programmation principalement employé dans
            les pages web interactives et à ce titre est une partie essentielle des applications web.</p>
          </div>
        </div>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>REACT</h2>
            <img className='card_logo' src='../images/react.webp'></img>
            </span>
            <p>React est une bibliothèque JavaScript développée par Facebook.
            Cette bibliothèque à pour but de faciliter la création d'application web via la création de composants.</p>
          </div>
        </div>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>REDUX</h2>
            <img className='card_logo' src='../images/redux.webp'></img>
            </span>
            <p>Redux est une bibliothèque JavaScript de gestion d'état utilisée
             avec des bibliothèques comme React pour la construction d'interfaces utilisateur.</p>
          </div>
        </div>
        <div className="perspective">
          <div className="card rotate-effect">
            <span>
            <h2>NEXT.JS</h2>
            <img className='card_logo' src='../images/next.webp'></img>
            </span>
            <p>Next.js est un framework gratuit et open source s'appuyant sur la bibliothèque
            JavaScript React et sur la technologie Node.js.</p>
          </div>
        </div>
      </section>
    </section>

  )
}

export default HardSkills