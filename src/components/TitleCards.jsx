
import React, { useEffect, useRef } from 'react';
import cards_data from '../assets/cards/Cards_data';

export default function TitleCards({ title, category }) {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className=" text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div
        ref={cardsRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
      >
        {cards_data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 w-48 hover:scale-110 pb-[2%]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-center text-sm">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
