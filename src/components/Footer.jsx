
import React from "react";
import facebook_icon from "../assets/facebook_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import youtube_icon from "../assets/youtube_icon.png";

export default function Footer() {
  return (
    <div className=" py-8">
      <div className="flex justify-center space-x-6 mb-6">
        <img src={facebook_icon} alt="Facebook" className="h-6 w-6 hover:scale-110" />
        <img src={instagram_icon} alt="Instagram" className="h-6 w-6 hover:scale-110" />
        <img src={twitter_icon} alt="Twitter" className="h-6 w-6 hover:scale-110" />
        <img src={youtube_icon} alt="YouTube" className="h-6 w-6 hover:scale-110" />
      </div>
      <div className="text-white mx-auto w-[90%] max-w-[800px] flex flex-wrap justify-center gap-5 text-sm">
        <a href="#" className="hover:scale-110">Audio Description</a>
        <a href="#" className="hover:scale-110">Investor Relations</a>
        <a href="#" className="hover:scale-110">Legal Notices</a>
        <a href="#" className="hover:scale-110">Help Centre</a>
        <a href="#" className="hover:scale-110">Jobs</a>
        <a href="#" className="hover:scale-110">Cookie Preferences</a>
        <a href="#" className="hover:scale-110">Gift Cards</a>
        <a href="#" className="hover:scale-110">Terms of Use</a>
        <a href="#" className="hover:scale-110">Corporate Information</a>
        <a href="#" className="hover:scale-110">Media Centre</a>
        <a href="#" className="hover:scale-110">Privacy</a>
        <a href="#" className="hover:scale-110">Contact Us</a>
      </div>
      <div className="flex justify-center mt-6 text-xs">
        <p className="text-slate-400">© 1997-2023 Netflix, Inc.</p>
      </div>
    </div>
  );
}
