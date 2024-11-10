import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <div className="text-lg flex-row items-start justify-evenly flex text-white flex-wrap p-12">
      <Image className="lg:basis-2/5 w-100 h-auto" alt="Gardena Cinema Indoor seats" src="/images/gardena-cinema-blogpage.jpg" width="480" height="351"></Image>
      <div className="lg:basis-3/5 flex flex-col lg:px-6">
        <p>Gardena Cinema is the only old-fashioned single-screen stand-alone independent movie theater in South Los Angeles. The theater was built in 1946 and has been operated by the Kim family since 1976. Gardena Cinema operated in the 1970s and 1980s as a Spanish-language cinema called Teatro Variedades and hosted many famous artists from Mexico. The Gardena Cinema has shown first-run movies since 1996. The COVID-19 pandemic forced the cinema to close in March 2020. Gardena Cinema began operating outdoor cinema in the parking lot in August 2020 and will continue to do so until indoor cinema is declared to be safe by the Los Angeles County Health Officer.</p>
        <br />
        {/* <h2>Getting Here</h2> */}
        <br />
        <p className="text-lg"><b>Address:   </b><Link href="https://maps.app.goo.gl/9QmzAoEpo9WpjcGZ6">14948 Crenshaw Blvd, Gardena, CA 90249</Link></p>
        <p>Gardena Cinema offers plenty of free parking!</p>
        <br />
        <br />
        <p><b>Contact us:   </b>If you have any questions or are interested at hosting an event at Gardena Cinema, please email us at gardenacinema[at]gmail[dot]com</p>
      </div>
    </div>
  )
}
 