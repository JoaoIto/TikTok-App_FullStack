import React from "react";

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
        justify-evenly
        items-center
        text-center
        gap-12
        mt-8
        "
        >
          <p
            id="icon"
            className="
        
        text-lg
        font-bold
        "
          >
            Icone da musica
          </p>
          <p id="title">Titulo da musica</p>
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
        bottom-20
        "
      />
    </div>
  );
}
