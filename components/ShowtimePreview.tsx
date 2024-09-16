import React from 'react';
import Image from 'next/image';

interface MovieShowtimeProps {
  movieTitle: string;
  showDate: string;
  showtimes: string[];
  categories: string[];
  moviePoster: string;
}

const MovieShowtime: React.FC<MovieShowtimeProps> = ({
  movieTitle,
  moviePoster,
  showDate,
  showtimes,
  categories,
}) => {
  return (
    <div className="w-72 m-4 rounded-lg overflow-hidden shadow-lg border-4 border-white">
      <div className="relative h-96">
        <img
          src={moviePoster}
          alt={`${movieTitle} poster`}
        />
      </div>
      <div className="bg-black text-white p-4">
        <h2 className="text-xl font-bold mb-2">{movieTitle}</h2>
        <p className="text-sm mb-3">{showDate}</p>
        <p className="text-sm mb-3">{showtimes.join(', ')}</p>
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