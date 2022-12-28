import React from 'react'
import styles from '../styles/Home.module.css'
export default function showtimes() {

const matinees = [["Black Panther 2: Wakanda Forever", "6:30pm", "Saturday Nov. 5"],["Black Panther 2: Wakanda Forever", "6:30pm", "Saturday Nov. 5"], ["The Wizard of Oz", "7:00pm", "Saturday Nov. 6"]];
  

      return(
          <>{
        matinees.map((movie, key) => {return(
        <div key={key} className="rounded-lg mb-2 bg-neutral-100 text-black p-2 border-2 border-neutral-100 flex flex-row justify-between items-center">
            <div>
                <div>{movie[0]}</div>
                <div><span>{movie[1]}</span><span> - </span><span>{movie[2]}</span></div>
            <div className={styles.categories}>
                <div>thing</div> <div>another thing</div>
            </div>
            </div>
            <div className="flex flex-row">
            <div>INFO</div>
            <div>BUY</div>
        </div>
      </div>
        )}

      ) }</>)

    }
