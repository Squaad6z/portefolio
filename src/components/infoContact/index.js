import React from 'react'
import './index.css'



const infoContact = () => {
  return (
    <aside className='info_contact'>
    <div className='personal_email'>
      <img src='./images/envelope-regular.svg'></img> 
      <a href='mailto:carneiromoreirasteven22@gmail.com'>Contactez moi</a>
    </div>
    <div className='personal_facebook'>
      <img src='./images/facebook.svg'></img> 
      <a href='https://www.facebook.com/steven.carneiro.566'>Facebook</a>
    </div>
    <div className='personal_instagram'>
      <img src='./images/instagram.svg'></img> 
      <a href='https://www.instagram.com/squaad6zz/'>Instagram</a>
    </div>
    <div className='personal_linkedin'>
      <img src='./images/linkedin.svg'></img> 
      <a href='https://www.linkedin.com/in/steven-carneiro-moreira-742626264/'>Linkedin</a>
    </div>
    <div className='personal_position'>
      <img src='./images/location-dot-solid.svg'></img>
      <a href="https://www.google.com/maps/place/Cuts,+60400" target="_blank">Google Maps</a>
    </div>
    </aside>
  )
}

export default infoContact