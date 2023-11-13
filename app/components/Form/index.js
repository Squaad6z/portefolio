import React from 'react'
import './index.css'

const Form = () => {
  return (
    <main className='contact'>
    <div className='form'>
    <section className='form_container'>
        <h1>Me contacter</h1>
        <div className='firstname'>
            <label>Nom</label>
            <input id='firstname_input' type='text' name='firstname' required></input>
        </div>
        <div className='lastname'>
            <label>Prénom</label>
            <input id='lastname_input' type='text' name='lastname' required></input>
        </div>
        <div className='email'>
            <label>Email</label>
            <input id='email_input' type='email' name='email' required></input>
        </div>
        <div className='telephone'>
            <label>Téléphone</label>
            <input id='telephone_input' type='text' name='telephone'></input>
        </div>
        <div className='message'>
            <label>Message</label>
            <input id='message_block' rows="6" name='message'></input>
        </div>
        <button className='submit' type='submit'>Envoyer</button>
    </section>
    </div>
    </main>

  )
}

export default Form