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
        overflow-y-scroll" /* adicionado para permitir rolagem */
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