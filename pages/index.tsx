import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Marquee from 'react-fast-marquee'
import MovieShowtime from '../components/ShowtimePreview'
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
        const moviesCollection = collection(firestore, 'movies')
        const snapshot = await getDocs(moviesCollection)
        const movieList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setMovies(movieList)
      } catch (error) {
        console.error("Error fetching movies:", error)
      } finally {
        setLoading(false)
      }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <div>Loading movies...</div>
            ) : (
              movies.map(movie => (
                <MovieShowtime 
                  key={movie.id}
                  movieTitle={movie.eventName}
                  moviePoster={movie.eventPoster}
                  showDate={movie.showtimes[0].showtime}
                  showtimes={["12pm"]}
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

{/* <MovieShowtime 
movieTitle="War of the Worlds"
moviePoster="https://image.tmdb.org/t/p/original/bKKemquV1rR9sRg20vwwWZtyS6Z.jpg"
showDate="Sat. August 30, 2024"
showtimes={["12:45pm", "3:00pm", "7:00pm"]}
categories={["Sci-Fi", "Action", "Thriller"]}
/>
<MovieShowtime
movieTitle="Mad Max"
moviePoster="https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg"
showDate="Wed. September 11, 2024"
showtimes={["2:00pm", "5:00pm", "9:00pm"]}
categories={["caca"]}
/> */}