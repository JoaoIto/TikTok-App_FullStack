import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export function Footer() {
  return (
    <div
      className="
    relative
    flex
    flex-col
    items-start
    bottom-40
    font-Inter
    "
    >
      <div
        className="
      mb-28
      ml-8
      "
        id="texts"
      >
        <legend
          className="
    font-bold
    text-xl
      "
        >
          @JoaoIto - joaoitoxd
        </legend>
        <span> Este é o vídeo do João! Aproveite!</span>
        <div
          id="musicVideo"
          className="
        flex
        justify-around
        items-center
        text-center
        gap-2
        mt-10
        "
        >
          <MusicNoteIcon />
          <p
            id="title"
          >
            Rockstar - Post Malone
          </p>
        </div>
      </div>
      <img
        height="40"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
        alt="Icon vinil"
        className="
        h-16
        invert
        absolute
        right-5
        bottom-24
        "
      />
    </div>
  );
}
