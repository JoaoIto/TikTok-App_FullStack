import React from 'react';
import { Video } from './Video';
import styles from "../../styles/App.css?inline";

export function VideoList() {
  return (
    <div
      id="videoList"
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