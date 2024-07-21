import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

export default function Home() {
  const isLgScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={hero_banner} alt="" className="w-full banner-img-gradient" />
        <div className="absolute bottom-0 w-full pl-[4%] text-sm sm:text-base">
          <img
            src={hero_title}
            alt=""
            className="w-[30%] sm:w-[40%] max-w-[420px] mb-4 sm:mb-8"
          />
          <p className="text-white text-poppin max-w-[700px] mb-4 sm:mb-6">
            Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum
            on a remote island in order to investigate the disappearance of a
            patient, where Teddy uncovers a shocking truth about the place.
          </p>
          <div className="flex gap-4 pb-[1%]">
            <button className="flex items-center justify-center bg-white bg-opacity-70 hover:bg-opacity-95 rounded-md px-4 py-2 transition-all duration-300">
              <img src={play_icon} alt="Play" className="w-6 h-6" />
              <span className="text-black ml-2">Play</span>
            </button>
            <button className="flex items-center justify-center bg-white bg-opacity-30 hover:bg-opacity-40 rounded-md px-4 py-2 transition-all duration-300">
              <img src={info_icon} alt="Info" className="w-6 h-6" />
              <span className="text-white ml-2">More Info</span>
            </button>
          </div>
          {isLgScreen && <TitleCards title={"Popular on Netflix"} />}{" "}
          {/* Render only on larger screens */}
        </div>
      </div>

      <div className="pl-[4%] py-[2%]">
        {!isLgScreen && <TitleCards title={"Popular on Netflix"} />}{" "}
        {/* Render only on smaller screens */}
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Picks for you"} />
      </div>
      
      <Footer />
    </div>
  );
}
