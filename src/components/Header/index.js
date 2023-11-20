import React from 'react'
import Link from "next/link"
import "./index.css"

const Header = () => {
  return (
    <header className='sidebar'>
      <div className='item'> 
      <img src="/images/house-solid.svg" 
      alt="icon" className="icon" id="home"
      ></img>
      <Link className='text' href="/">Home</Link>
      </div>
      <hr></hr>
      <div className='item'> 
      <img src="/images/sitemap-solid.svg" 
      alt="icon" className="icon" id="home"
      ></img>
      <Link className='text' href="/hard_skills">Hard Skills</Link>
      </div>
      <div className='item'> 
      <img src="/images/code-solid.svg" 
      alt="icon" className="icon" id="home"
      ></img>
      <Link className='text' href="/realisations">Réalisations</Link>
      </div>
      <div className='item'> 
      <img src="/images/envelope-regular.svg" 
      alt="icon" className="icon" id="home"
      ></img>
      <Link className='text' href="/contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header