import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import ShowtimePreview from '../components/ShowtimePreview'
import { firestore } from '../firebase/clientApp'
import { useState, useEffect } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { collection, getDocs } from 'firebase/firestore'

interface CarouselImage {
  src: string
  alt: string
  title: string
  caption: string
}

interface Movie {
  id: string
  [key: string]: any  // Add specific movie properties here
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  const matineeImg = '/images/abc7.jpg'
  const matineeImgTwo = '/blackpanther-matinee.jpg'
  const matineeImgs = [matineeImg, matineeImgTwo]
  const [currImg, changeCurrImg] = useState(0)

  const carouselImages: CarouselImage[] = [
    {
      src: '/images/abc7.jpg',
      alt: 'ABC7 News Feature',
      title: 'Gardena Cinema Featured on ABC7',
      caption: 'Our beloved cinema was recently featured on ABC7 News, highlighting our commitment to preserving the classic movie-going experience. Read more about our journey and the community\'s support.'
    },
    {
      src: '/blackpanther-matinee.jpg',
      alt: 'Black Panther Matinee',
      title: 'Special Black Panther Matinee Screening',
      caption: 'Join us for a special matinee screening of Black Panther. Experience the excitement of Wakanda on the big screen and enjoy our exclusive themed concessions!'
    },
  ]

  const ImageCycle = (manualShift: number) => {
    if (manualShift === 1) {
      changeCurrImg(currImg <= 0 ? matineeImgs.length - 1 : currImg - 1)
    } else if (manualShift === 2) {
      changeCurrImg(currImg >= matineeImgs.length - 1 ? 0 : currImg + 1)
    }
  }

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
    <div>
      <Head>
        <title>Welcome to Gardena Cinema</title>
        <meta name="description" content="Experience the magic of movies at Gardena Cinema" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start pt-8">
        <ImageCarousel images={carouselImages} />

        <div className="w-full max-w-4/5 mt-12 flex flex-col items-center">
          <h2 className={styles.showtimes}>UPCOMING EVENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div>Loading movies...</div>
            ) : (
              movies.map(movie => (
                <ShowtimePreview 
                  key={movie.id}
                  movieId={movie.id}
                  movieTitle={movie.eventName}
                  moviePoster={movie.eventPoster}
                  showtimes={movie.showtimes}
                  categories={movie.tags}
                />
              ))
            )}
          </div>

        </div>
      </main>
    </div>
  )
}

