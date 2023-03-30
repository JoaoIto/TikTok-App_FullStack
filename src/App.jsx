import React from "react";
import { VideoList } from "./components/Video/VideosList";

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
          overflow-scroll
          text-white
          flex
          flex-col
          items-center 
          justify-around
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
        <VideoList />
      </div>
    </div>
  );
}
