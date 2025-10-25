import { useState } from "react";
import thumbImage from "../assets/Strawhats_Flag.png";
import img1 from "../assets/arcs/01.png";
import img2 from "../assets/arcs/02.png";
import img3 from "../assets/arcs/03.png";
import img4 from "../assets/arcs/04.png";
import img5 from "../assets/arcs/05.png";
import img6 from "../assets/arcs/06.png";
import img7 from "../assets/arcs/07.png";
import img8 from "../assets/arcs/08.png";
import img9 from "../assets/arcs/09.png";
import img10 from "../assets/arcs/10.png";
import img11 from "../assets/arcs/11.png";
import img12 from "../assets/arcs/12.png";
import img13 from "../assets/arcs/13.png";
import img14 from "../assets/arcs/14.png";
import img15 from "../assets/arcs/15.png";
import img16 from "../assets/arcs/16.png";
import img17 from "../assets/arcs/17.png";
import img18 from "../assets/arcs/18.png";
import img19 from "../assets/arcs/19.png";
import img20 from "../assets/arcs/20.png";
import img21 from "../assets/arcs/21.png";
import img22 from "../assets/arcs/22.png";
import img23 from "../assets/arcs/23.png";
import img24 from "../assets/arcs/24.png";
import img25 from "../assets/arcs/25.png";
import img26 from "../assets/arcs/26.png";
import img27 from "../assets/arcs/27.png";
import img28 from "../assets/arcs/28.png";
import img29 from "../assets/arcs/29.png";
import img30 from "../assets/arcs/30.png";
import img31 from "../assets/arcs/31.png";
import img32 from "../assets/arcs/32.png";


export default function HorizontalSelector({ onSubmit }: { onSubmit?: (value: number) => void }) {
  const [value, setValue] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // evita recargar la página
    if (onSubmit) onSubmit(value); // llama callback externo si existe
    console.log("Chapter submitted:", value);
  };

  const moveLeft1 = () => setValue((v) => Math.max(1, v - 1));
  const moveRight1 = () => setValue((v) => Math.min(1125, v + 1));
  const moveLeft10 = () => setValue((v) => Math.max(1, v - 10));
  const moveRight10 = () => setValue((v) => Math.min(1125, v + 10));
  const moveLeft50 = () => setValue((v) => Math.max(1, v - 50));
  const moveRight50 = () => setValue((v) => Math.min(1125, v + 50));

  // Lógica para cambiar imagen según el valor
  const getImage = () => {
    if (value <= 7) return img1;
    if (value <= 21) return img2;
    if (value <= 41) return img3;
    if (value <= 68) return img4;
    if (value <= 95) return img5;
    if (value <= 100) return img6;
    if (value <= 105) return img7;
    if (value <= 114) return img8;
    if (value <= 129) return img9;
    if (value <= 154) return img10;
    if (value <= 217) return img11;
    if (value <= 236) return img12;
    if (value <= 302) return img13;
    if (value <= 321) return img14;
    if (value <= 374) return img15;
    if (value <= 430) return img16;
    if (value <= 441) return img17;
    if (value <= 489) return img18;
    if (value <= 513) return img19;
    if (value <= 524) return img20;
    if (value <= 549) return img21;
    if (value <= 580) return img22;
    if (value <= 597) return img23;
    if (value <= 602) return img24;
    if (value <= 653) return img25;
    if (value <= 699) return img26;
    if (value <= 801) return img27;
    if (value <= 824) return img28;
    if (value <= 902) return img29;
    if (value <= 908) return img30;
    if (value <= 1057) return img31;
    if (value <= 1125) return img32;
    return "";
  };

  // Lógica para cambiar el rango de capitulos segun el arco
  const getRange = () => {
      if (value <= 7) return "1 to 7";
      if (value <= 21) return "8 to 21";
      if (value <= 41) return "22 to 41";
      if (value <= 68) return "42 to 68";
      if (value <= 95) return "69 to 95";
      if (value <= 100) return "96 to 100";
      if (value <= 105) return "101 to 105";
      if (value <= 114) return "106 to 114";
      if (value <= 129) return "115 to 129";
      if (value <= 154) return "130 to 154";
      if (value <= 217) return "155 to 217";
      if (value <= 236) return "218 to 236";
      if (value <= 302) return "237 to 302";
      if (value <= 321) return "303 to 321";
      if (value <= 374) return "322 to 374";
      if (value <= 430) return "375 to 430";
      if (value <= 441) return "431 to 441";
      if (value <= 489) return "442 to 489";
      if (value <= 513) return "490 to 513";
      if (value <= 524) return "514 to 524";
      if (value <= 549) return "525 to 549";
      if (value <= 580) return "550 to 580";
      if (value <= 597) return "581 to 597";
      if (value <= 602) return "598 to 602";
      if (value <= 653) return "603 to 653";
      if (value <= 699) return "654 to 699";
      if (value <= 801) return "700 to 801";
      if (value <= 824) return "802 to 824";
      if (value <= 902) return "825 to 902";
      if (value <= 908) return "903 to 908";
      if (value <= 1057) return "909 to 1057";
      if (value <= 1125) return "1058 to 1125";
      return "1126 to current";
  };



  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center p-6 w-full">
        <h2 className="text-lg font-semibold mb-4 text-white">Select the chapter</h2>

        {/* 🖼️ Imagen que cambia según el valor */}
        <img
          src={getImage()}
          alt="preview"
          className="w-40 h-40 object-contain mb-6"
          //style={{ transform: `scale(${1 + value / 2000})` }} // efecto sutil al cambiar
        />

        {/* 📝 Texto debajo de la imagen */}
        <p className="text-white text-sm mb-6">
          Chapters {getRange()}
        </p>

        {/* 🎚️ Slider */}
        <div className="w-[80vw]">
          <input
            type="range"
            min={1}
            max={1125}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none custom-slider"
          />
        </div>
        
        {/* ⬅️➡️ Botones de salto */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-6 justify-center mt-6">
          <button type="button" onClick={moveLeft50} className="hidden md:inline-flex px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">◁◁◁</button>
          <button type="button" onClick={moveLeft10} className="px-1 md:px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">◁◁</button>
          <button type="button" onClick={moveLeft1} className="px-1 md:px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">◁</button>
          <span className="font-bold text-white text-base md:text-lg text-center min-w-[120px]">Chapter: {value}</span>
          <button type="button" onClick={moveRight1} className="px-1 md:px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">▷</button>
          <button type="button" onClick={moveRight10} className="px-1 md:px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">▷▷</button>
          <button type="button" onClick={moveRight50} className="hidden md:inline-flex px-2 py-1 rounded-full bg-white/20 hover:bg-white/40 transition text-white font-bold text-lg shadow-md border border-white">▷▷▷</button>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-md transition border border-white"
        >
          Let’s see!
        </button>

        {/* Estilos personalizados del slider */}
        <style>{`
          input[type="range"].custom-slider {
            accent-color: transparent; /* evitamos color por defecto */
          }

          /* Chrome, Safari, Edge */
          input[type="range"].custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 40px;
            height: 40px;
            background: url(${thumbImage}) no-repeat center;
            background-size: contain;
            cursor: pointer;
            border: none;
            margin-top: -18px; /* Ajusta verticalmente si es necesario */
          }

          /* Firefox */
          input[type="range"].custom-slider::-moz-range-thumb {
            width: 40px;
            height: 40px;
            background: url(${thumbImage}) no-repeat center;
            background-size: contain;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    </form>
  );
}
