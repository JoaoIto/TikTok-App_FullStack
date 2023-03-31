import React from "react";
import { VideoList } from "./components/Video/VideosList";
import { Title } from "./components/Title/Title"

export function App() {
  return (
    <>
      <Title />

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
          h-4/5
          lg: w-1/3
          sm: w-3/4 
          sm:w-5/6
          rounded-xl 
          border-solid 
          border-2 
          border-black
          absolute 
        "
        >
          <VideoList />
        </div>
      </div>
    </>
  );
}
