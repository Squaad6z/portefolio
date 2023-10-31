"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react'
import Carousel from '../components/Carousel';
import Header from '../components/Header';

const realisations = () => {
  return (
    <main>
    <Header />
    <Carousel />
    </main>
  )
}

export default realisations