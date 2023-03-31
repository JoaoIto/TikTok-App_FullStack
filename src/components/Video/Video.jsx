import React, { useRef } from "react";

export function Video() {

  const videoRef = useRef(null);

  function handleStart(){
    videoRef.current.play();
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
    </div>
  );
}