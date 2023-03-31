import React from 'react';
import { Video } from './Video';

export function VideoList() {
  return (
    <div
      className="
        items-center 
        justify-center 
        h-full 
        w-full 
        overflow-y-scroll
        scroll-snap-type: y mandatory;
        scrollbar-width: none;"
      style={{ scrollSnapAlign: "start" }}
    >
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}