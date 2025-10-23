import { Link } from "react-router-dom";
import backgroundImage from '../assets/Luffy_Wallpaper.png';

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay semitransparente */}
      <div className="min-h-screen bg-black/50 flex items-center justify-center">
        <div className="text-center">
          {/* Contenedor que define el ancho compartido */}
          <div className="inline-block">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Daily One Piece Quizz
            </h1>
            <Link to="/chapter">
              <button className="w-full px-6 py-4 focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-lg mb-3 dark:focus:ring-yellow-900">
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-xl font-bold">The Will of Ohara</span>
                  <span className="text-sm font-normal">Guess manga chapter from description</span>
                </div>
              </button>
            </Link>
            <Link to="/">
              <button disabled className="w-full px-6 py-4 focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-lg mb-3 dark:focus:ring-yellow-900">
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-xl font-bold">Log Pose</span>
                  <span className="text-sm font-normal">Find island on the map</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
