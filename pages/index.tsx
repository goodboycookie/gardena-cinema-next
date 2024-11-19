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

interface BlogPost {
  imageSource: string
  imageCaption: string
  postTitle: string
  previewText: string
}

interface HomeProps {
  blogPosts: CarouselImage[]
  movies: Movie[]
}

interface Movie {
  id: string
  eventName: string
  eventPoster: string
  showtimes: any[]
  tags: string[]
}

export const getStaticProps = async () => { 
  try {
    // Fetch blog posts
    const blogPostsCollection = collection(firestore, 'blogposts');
    const blogSnapshot = await getDocs(blogPostsCollection);
    
    const carouselImages = blogSnapshot.docs.map(doc => ({
      src: doc.data().imageSource,
      alt: doc.data().imageCaption,
      title: doc.data().postTitle,
      caption: doc.data().previewText
    }));

    // Fetch movies/events
    const eventsCollection = collection(firestore, 'events');
    const eventsSnapshot = await getDocs(eventsCollection);
    
    const movies = eventsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return {
      props: {
        blogPosts: JSON.parse(JSON.stringify(carouselImages)),
        movies: JSON.parse(JSON.stringify(movies))
      },
      revalidate: 60 // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        blogPosts: [],
        movies: []
      }
    };
  }
}


export default function Home({blogPosts, movies}: HomeProps) {
  // const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const matineeImg = '/images/abc7.jpg'
  const matineeImgTwo = '/blackpanther-matinee.jpg'
  const matineeImgs = [matineeImg, matineeImgTwo]
  const [currImg, changeCurrImg] = useState(0)

  const ImageCycle = (manualShift: number) => {
    if (manualShift === 1) {
      changeCurrImg(currImg <= 0 ? matineeImgs.length - 1 : currImg - 1)
    } else if (manualShift === 2) {
      changeCurrImg(currImg >= matineeImgs.length - 1 ? 0 : currImg + 1)
    }
  }

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const moviesCollection = collection(firestore, 'events')
  //       const snapshot = await getDocs(moviesCollection)
  //       const movieList = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }))
  //       setMovies(movieList);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //     console.log(movies);
  //   }

  //   fetchMovies();
  // }, [])

  return (
    <div>
      <Head>
        <title>Welcome to Gardena Cinema</title>
        <meta name="description" content="Experience the magic of movies at Gardena Cinema" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start pt-8">
        <ImageCarousel images={blogPosts} />

        <div className="w-full max-w-4/5 mt-12 flex flex-col items-center">
          <h2 className={styles.showtimes}>UPCOMING EVENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies && movies.length > 0 ? (
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
            ) : (
              <div>No events currently scheduled</div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}

