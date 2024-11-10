import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <div className="flex-row items-center flex text-white items-center justify-center p-12">
      <Image className="w-100 h-auto" alt="Gardena Cinema Indoor seats" src="/images/gardena-cinema-blogpage.jpg" width="480" height="351"></Image>
      <div className="flex flex-col items-center p-4">
        <p>Gardena Cinema is the only old-fashioned single-screen stand-alone independent movie theater in South Los Angeles. The theater was built in 1946 and has been operated by the Kim family since 1976. Gardena Cinema operated in the 1970s and 1980s as a Spanish-language cinema called Teatro Variedades and hosted many famous artists from Mexico. The Gardena Cinema has shown first-run movies since 1996. The COVID-19 pandemic forced the cinema to close in March 2020. Gardena Cinema began operating outdoor cinema in the parking lot in August 2020 and will continue to do so until indoor cinema is declared to be safe by the Los Angeles County Health Officer.</p>
        <br />
        {/* <h2>Getting Here</h2> */}
        <br />
        <p><b>Address:   </b><a href="https://maps.app.goo.gl/9QmzAoEpo9WpjcGZ6">14948 Crenshaw Blvd, Gardena, CA 90249</a></p>
        <p>Gardena Cinema offers plenty of free parking!</p>
      </div>
    </div>
  )
}
 