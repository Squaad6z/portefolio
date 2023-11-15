"use client"
import React, {useState} from 'react'
import './index.css'

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState ({
        firstname : "",
        lastname : "",
        email : "",
        telephone : "",
        message : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log(formData);
    
        try {
          setIsSubmitting(true);
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log("Message envoyé avec succès !");
            setFormData({
              firstname: "",
              lastname : "",
              email: "",
              telephone: "",
              message: "",
            });
          } else {
            console.error(
              "Une erreur s'est produite lors de l'envoi du formulaire :",
              error,
            );
          }
        } catch (error) {
          console.error(
            "Une erreur s'est produite lors de l'envoi du formulaire :",
            error,
          );
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <main className='contact'>
    <form className='form' onSubmit={handleSubmit}>
    <section className='form_container'>
        <h1>Me contacter</h1>
        <div className='firstname'>
            <label>Nom</label>
            <input id='firstname_input' value={formData.firstname} type='text' name='firstname' required onChange={handleChange}></input>
        </div>
        <div className='lastname'>
            <label>Prénom</label>
            <input id='lastname_input' value={formData.lastname} type='text' name='lastname' required onChange={handleChange}></input>
        </div>
        <div className='email'>
            <label>Email</label>
            <input id='email_input' value={formData.email} type='email' name='email' required onChange={handleChange}></input>
        </div>
        <div className='telephone'>
            <label>Téléphone</label>
            <input id='telephone_input' value={formData.telephone} type='text' name='telephone' required onChange={handleChange}></input>
        </div>
        <div className='message'>
            <label>Message</label>
            <input id='message_block' rows="6" value={formData.message} name='message' required onChange={handleChange}></input>
        </div>
        <button className='submit' type='submit'>{isSubmitting ? (
              <>
                En cours...
              </>
            ) : (
              "Envoyer"
            )}</button>
    </section>
    </form>
    </main>

  )
}

export default Form