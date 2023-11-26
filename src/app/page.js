"use client"
import Header from "@/components/Header"
import HomePage from "@/components/HomePage"
import HardSkills from "@/components/HardSkills"
import Realisations from "@/components/Realisations"
import Form from "@/components/Form"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main>
      <div>
      <div className="background-overlay" />
      <div className="background-container" />
      <Header />
      <HomePage />
      <HardSkills />
      <Realisations />
      <Form />
      <Footer />
      </div>
    </main>
  )
}
