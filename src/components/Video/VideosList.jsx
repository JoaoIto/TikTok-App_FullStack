import React from 'react';
import { Video } from './Video';

export function VideoList() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Video />
      <Video />
    </div>
  );
}