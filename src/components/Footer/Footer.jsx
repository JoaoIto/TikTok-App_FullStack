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
    </div>
  );
}
