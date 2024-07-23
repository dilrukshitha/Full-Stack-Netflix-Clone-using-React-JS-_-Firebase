
import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

export default function Player() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGI2YWNmZTc1NTliMjA3MzE0M2Q4OWE0M2YzMDY0YSIsIm5iZiI6MTcyMTU4ODEyMS4yNzMwNTMsInN1YiI6IjY2OWQ1ODMyMzgyOGExZDgwYzQ2NjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13EQh01u2lKy8VZhEYfPm1aak9nbzXpsJ5mdxk4IuBY'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  

  return (
    <div className="h-screen flex flex-col items-center justify-between p-[1%] bg-[#121212] text-white">
      <div className="flex items-center w-full mb-4">
        <img onClick={()=>{navigate(-2)}} src={back_arrow_icon} alt="Back" className="w-8 h-8 cursor-pointer mr-4" />
        <h1 className="text-lg font-semibold">How To Create Portfolio Website In React JS</h1>
      </div>
      <div className="w-full flex justify-center flex-grow">
        <div className="relative w-[80%] pb-[45%] bg-[#121212]"> {/* 16:9 aspect ratio */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full" 
            src={`https://www.youtube.com/embed/${apiData.key}`}
            frameBorder="0" 
            title="Trailer" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-[80%] p-[1%] flex justify-between items-center">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}


