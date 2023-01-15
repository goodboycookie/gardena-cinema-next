import React from 'react'
import styles from '../styles/Home.module.css'
export default function showtimes() {

const matinees = [["Black Panther 2: Wakanda Forever", "6:30pm", "Saturday Nov. 5"],["Black Panther 2: Wakanda Forever", "6:30pm", "Saturday Nov. 5"], ["The Wizard of Oz", "7:00pm", "Saturday Nov. 6"]];
  

      return(
          <>{
        matinees.map((movie, key) => {return(
        <div key={key} className="rounded-lg mb-2 bg-neutral-100 text-black p-2 border-2 border-neutral-100 flex flex-row justify-between items-center">
            <div>
                <div className="text-xl font-bold">{movie[0]}</div>
                <div><span>{movie[1]}</span><span> - </span><span>{movie[2]}</span></div>
            <div className={styles.categories}>
                <div>thing</div> <div>another thing</div>
            </div>
            </div>
          <div className="flex flex-row">
            <div className="border-red-2 bg-red-600 p-2 m-1 w-50 br-2 rounded-md text-white">INFO</div>
            <div className="border-black-1 bg-red-600 p-2 m-1 w-50 rounded-md text-white">BUY</div>
          </div>
      </div>
        )}

      ) }</>)

    }

