import React from "react";
import { VideoList } from "./components/Video/VideosList";
import { Title } from "./components/Title"

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
        <Title />
        <VideoList />
      </div>
    </div>
  );
}
