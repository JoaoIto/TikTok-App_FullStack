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
        justify-center
        relative 
      "
    >
      <div
        id="video"
        className="
          text-white
          flex
          flex-col
          items-center
          h-full
          w-2/5 
          sm:w-5/6
          rounded-xl 
          border-solid 
          border-2 
          border-black
          absolute 
        "
      >
        <h1
          className="
            h-1/10
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
