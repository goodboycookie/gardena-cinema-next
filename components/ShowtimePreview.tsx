import React from 'react';
import Image from 'next/image';
import {Timestamp} from 'firebase/firestore';

interface MovieShowtimeProps {
  movieTitle: string;
  showtimes: Array<{
      time: Timestamp;
      seatsAvailable: number;
  }>;
  categories: string[];
  moviePoster: string;
}

const MovieShowtime: React.  FC<MovieShowtimeProps> = ({
  movieTitle,
  moviePoster,
  showtimes,
  categories,
}) => {
  const formatShowtime = (timestamp: Timestamp) => {
    console.log("showtime: ", timestamp);
    const date = timestamp.toDate();
    console.log("date: ", date);
    // Format the date part
    const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayNum = date.getDate();

    // Format the time part
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    console.log(`${dayName} ${monthName} ${dayNum} @ ${hours}:${minutes}${period}`);
    return `${dayName} ${monthName} ${dayNum} @ ${hours}:${minutes}${period}`;
  };

  const renderShowtimes = () => {
    return showtimes.map((showtime, index) => (
      <div key={index} className="mb-2 text-sm">
        <span>{formatShowtime(showtime.time)}</span>
        {/* <span className="ml-2 text-gray-400">({showtime.seatsAvailable} seats)</span> */}
      </div>
    ));
  };

  return (
    <div className="w-72 m-4 rounded-lg overflow-hidden shadow-lg border-4 border-white text-white hover:text-yellow-300 hover:cursor-pointer">
      <div className="relative h-96">
        <Image
          src={moviePoster}
          alt={`${movieTitle} poster`}
          fill={true}
        />
      </div>
      <div className="p-4 pt-6">
        <h2 className="text-xl font-bold mb-2">{movieTitle}</h2>
        <div>
          {renderShowtimes()}
        </div>
        <div className="flex flex-wrap gap-1">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-[#f1d100] text-black text-xs py-1 px-2 rounded-full font-bold"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieShowtime;