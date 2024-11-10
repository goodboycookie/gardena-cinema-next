import '../styles/globals.css'
import Link from 'next/link';
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Marquee from 'react-fast-marquee';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className="bg-black min-h-screen">
      <header>
        <Marquee className="bg-yellow-300 text-4xl pt-3 pb-4" gradient={false} speed={100} direction="left">
          <span className={styles.marquee}>  . . . . . . . . . . <Link href="/info"><span className="text-2xl hover:text-white hover:cursor-pointer">INFO</span></Link> . . . . . . . . . . . . . . . . .<Link href="/"><span className="hover:text-white hover:cursor-pointer">www.gardenacinema.com</span></Link> . . . . . . . . . . . . . . . <Link href="/blog"><span className="text-2xl hover:text-white hover:cursor-pointer">BLOG</span></Link> . . . . . . . . . . . . <Link href="/"><span className="hover:text-white hover:cursor-pointer">www.gardenacinema.com</span></Link> . . . . . . . . . . . . . . .  </span>
        </Marquee> 
      </header>
      <Component {...pageProps} />
  </div>)
}
