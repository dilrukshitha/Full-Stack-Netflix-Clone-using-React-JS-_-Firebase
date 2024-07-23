import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link  } from "react-router-dom";

export default function TitleCards({ title, category }) {

  const [apiData,setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGI2YWNmZTc1NTliMjA3MzE0M2Q4OWE0M2YzMDY0YSIsIm5iZiI6MTcyMTU4ODEyMS4yNzMwNTMsInN1YiI6IjY2OWQ1ODMyMzgyOGExZDgwYzQ2NjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13EQh01u2lKy8VZhEYfPm1aak9nbzXpsJ5mdxk4IuBY",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className=" text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div
        ref={cardsRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
      >
        {apiData.map((item, index) => {
          return (
            <Link to={`/player/${item.id}`}
              key={index}
              className="flex-shrink-0 w-48 hover:scale-110 pb-[2%]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path}
                alt={item.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-center text-sm">{item.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
