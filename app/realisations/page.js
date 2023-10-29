"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react'
import Carousel from '../components/Carousel';

const realisations = () => {
    const [number, setNumber] = useState(0);
    const increment = () => {
    setNumber(number + 1)
    }
    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(()=> {
        console.log('le composant est démonté')
    }, [number])
  return (
    <>
    <Link href="/cv">Cv+</Link>
    <div>{number}</div>
    <Carousel />
    <button onClick={()=> increment()}>Incrémente</button>
    <button onClick={()=> decrement()}>Décremente</button>
    </>
  )
}

export default realisations