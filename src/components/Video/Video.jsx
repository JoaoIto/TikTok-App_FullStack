import React, { useRef, useState } from "react";
import { Footer } from "../Footer/Footer"

export function Video() {

  const videoRef = useRef(null);
  const {play, setPlay} = useState(false);

  function handleStart(){
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    }else{
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div
      className="
        h-full 
        w-full 
        flex
        flex-col
        items-center
      "
      style={{ scrollSnapAlign: "start" }}
    >
      <video 
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
      controls
      loop
      ref={videoRef}
      onClick={handleStart}
      >
      </video>

      <Footer/>
    </div>
  );
}