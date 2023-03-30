import React from "react";
import { Video } from "./components/Video";

export function App() {
  return (
    <div
      className="
    w-screen 
    h-screen 
    bg-tiktok
    text-ice
    flex 
    items-center 
    content-center 
    justify-center"
    >
      <div
        id="video"
        className="
          text-white
          flex
          flex-col
          items-center 
          min-h-tiktok
          w-2/5 
          sm: w-5/6
          rounded-xl 
          border-solid 
          border-2 
          border-black"
      >
        <h1
          className="
          h-1/5
          text-5xl 
          font-bold"
        >
          TikTok
        </h1>
        <Video />
      </div>
    </div>
  );
}
