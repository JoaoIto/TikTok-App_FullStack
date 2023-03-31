import React from "react";

export function Video() {
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
      <video src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"></video>
    </div>
  );
}