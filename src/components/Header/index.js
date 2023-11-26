import React from 'react'
import Link from "next/link"
import "./index.css"

const Header = () => {
  return (
    <header>
      <h2>CMS</h2>
      <nav className='sidebar'>
  <div className='item'> 
    <a href="#presentation">
      <img src="/images/house-solid.svg" alt="icon" className="icon" />
      Présentation
    </a>
  </div>
  <div className='item'> 
    <a href="#hardSkills">
      <img src="/images/sitemap-solid.svg" alt="icon" className="icon" />
      Hard Skills
    </a>
  </div>
  <div className='item'> 
    <a href="#realisations">
      <img src="/images/code-solid.svg" alt="icon" className="icon" />
      Réalisations
    </a>
  </div>
  <div className='item'> 
    <a href="#contact">
      <img src="/images/envelope-regular.svg" alt="icon" className="icon" />
      Contact
    </a>
  </div>
</nav>
    </header>
  )
}

export default Header
