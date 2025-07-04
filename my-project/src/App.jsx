import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#404EED] to-[#7289DA] text-white font-sans overflow-hidden">
      
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Discord</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>Download</li>
          <li>Nitro</li>
          <li>Discover</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button className="bg-white text-black rounded-full px-4 py-1 text-sm font-medium">
          Log In
        </button>
      </nav>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-12 md:py-24 gap-10">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            GROUP CHAT THAT’S ALL <br />
            FUN & GAMES
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-100 max-w-md mx-auto md:mx-0">
            Discord is great for playing games and chilling with friends, or even building a worldwide community.
            Customise your own space to talk, play, and hang out.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
            <button className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:scale-105 transition">
              Download for Windows
            </button>
            <button className="bg-gray-800 text-white rounded-full px-6 py-3 font-semibold hover:scale-105 transition">
              Open in your browser
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683e0f99bf66ed8e1d55ff2c_Leaning%20Girl%2003.webp" // You can place the hero image in public folder
            alt="Discord devices"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
