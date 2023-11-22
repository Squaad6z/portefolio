import React from 'react'
import Header from '@/components/Header'
import Form from '@/components/Form'
import InfoContact from '@/components/infoContact'

export default function contact () {
  return (
    <main>
    <Header />
    <section className='container_contact'>
    <Form />
    <InfoContact />
    </section>
    </main>
  )
}
