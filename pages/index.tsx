import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Marquee from 'react-fast-marquee';
import MovieShowtime from '../components/ShowtimePreview';
import { firestore } from '../firebase/clientApp';
import { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export default function Home() {  
  var listData:any;


  const matineeImg = '/images/abc7.jpg';
  const matineeImgTwo = '/blackpanther-matinee.jpg'

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const matineeImgs = [matineeImg, matineeImgTwo];
  const [currImg, changeCurrImg] = useState(0);


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
  ];

  const ImageCycle = (manualShift: number) => {
    switch (manualShift){
      case 1:
        changeCurrImg(currImg - 1);
        if (currImg <= 0) {changeCurrImg(matineeImgs.length - 1);}
        break;
      case 2:
        changeCurrImg(currImg + 1);
        if (currImg >= matineeImgs.length-1) {changeCurrImg(0);}
        break; 
    }
  }


  // const [value, loading, error] = useCollection(
  //   collection(getFirestore(firebase), 'hooks'),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // const [one, two, three] = useCollection(
  //   firebase.firestore().collection("votes"),
  //   {}
  // );


  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const snapshot = await firestore.collection('movies').get();
  //       const movieList = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       setMovies(movieList);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);


  return (
    <div>
      <Head>
        <title>Welcome to Gardena Cinema</title>
        <meta name="description" content="Experience the magic of movies at Gardena Cinema" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>


      {/* HOMEPAGE CONTENT */}
      <main className="flex flex-col items-center justify-start pt-8">
        {/* <h1 className={styles.showtimes}>Welcome to Gardena Cinema</h1> */}

        <ImageCarousel images={carouselImages} />

        <div className="w-full max-w-4/5 mt-12 flex flex-col items-center">
          <h2 className={styles.showtimes}>UPCOMING EVENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MovieShowtime 
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
          />

          </div>
        </div>
      </main>
    </div>
  )
}