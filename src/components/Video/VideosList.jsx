import React from 'react';
import { Video } from './Video';

export function VideoList() {
  return (
    <div
      className="items-center justify-center h-full w-full overflow-y-scroll scrollbar-none"
      style={{ scrollSnapType: "y mandatory" }}
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