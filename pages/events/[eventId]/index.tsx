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
// import { useEffect } from 'react'

export default function index() {


  return (
    <div className="text-white">swagisimo!!!!</div>
  )
}
