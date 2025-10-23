import { useState } from "react";
import backgroundImage from "../assets/WillOfOhara.png";
import HorizontalSelector from "../components/HorizontalSelector";
import ChapterData from "../components/ChapterData";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Popup = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center animate-fade-in">
        <p className="text-gray-800 mb-4 whitespace-pre-line">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

function Chapter() {

  const chapterID = getRandomInt(1, 1125);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleChapterSubmit = (chapter: number) => {
    if (chapter === chapterID) {
       setPopupMessage(`🎉 ONE SHOT 🎉 \n It's chapter ${chapterID}. \n You guessed!`);
    } else {
      // Calculamos proximidad
      const diff = Math.abs(chapter - chapterID);
      const maxDiff = 1125 - 1; // rango máximo posible
      const closeness = parseFloat((Math.max(0, 100 - (diff / maxDiff) * 100)).toFixed(2));

      if(closeness >= 95){
        setPopupMessage(`TOO CLOSE!! \n It's chapter ${chapterID}. \n You were ${closeness}% closer to guessing it.`);
      }else{
        setPopupMessage(`❌ You didn't get it...\n It's chapter ${chapterID}. \n You were ${closeness}% closer to guessing it.`);
      } 
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay semitransparente */}
      <div className="min-h-screen bg-black/50 flex flex-col items-center relative text-center text-white">
        

        <h1 className="text-4xl md:text-5xl font-bold mt-10">
          The Will of Ohara
        </h1>
        <p className="text-xl md:text-l mt-5">
          Guess manga chapter from description
        </p>

        <div className="w-11/12 md:w-3/5 text-white px-4 py-3 border rounded-lg bg-white/10 mt-20 space-y-10">
          <ChapterData id={chapterID} />
        </div>

        <div className="flex-1 flex justify-center items-center w-full">
          <HorizontalSelector onSubmit={handleChapterSubmit}/>
        </div>

        {popupMessage && (<Popup message={popupMessage} onClose={() => setPopupMessage(null)} />)}

      </div>
    </div>
  );
}

export default Chapter;
