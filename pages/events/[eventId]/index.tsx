import React from 'react'
// import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import ShowtimePreview from '../../../components/ShowtimePreview'
import { firestore } from '../../../firebase/clientApp'
import { useState, useEffect } from 'react'
import ImageCarousel from '../../../components/ImageCarousel'
import { collection, getDocs } from 'firebase/firestore'

export default function index() {

const [movies, setMovies] = useState<Movie[]>([]);
const [loading, setLoading] = useState(true);
  
useEffect(() => {
    const fetchMovies = async () => {
        try {
        const moviesCollection = collection(firestore, 'events')
        const snapshot = await getDocs(moviesCollection)
        const movieList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setMovies(movieList);
        } catch (error) {
        console.error("Error fetching movies:", error)
        } finally {
        setLoading(false)
        }
        console.log(movies);
    }

    fetchMovies()
    }, [])
  return (
    <div className="text-white">swagisimo!!!!</div>
  )
}
