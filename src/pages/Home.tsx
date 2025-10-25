import { Link } from "react-router-dom";
import backgroundImage from "../assets/Luffy_Wallpaper.png";

function Home() {
  return (
      <div
        className="min-h-screen bg-[right_45%_center] md:bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      {/* Overlay semitransparente */}
      <div className="min-h-screen bg-black/50 flex items-center justify-center px-4">
        <div className="text-center w-full max-w-md">
          {/* Título */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-snug">
            Daily One Piece Quizz
          </h1>

          {/* Botón 1 */}
          <Link to="/chapter">
            <button className="w-full px-4 py-3 sm:px-6 sm:py-4 focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-lg mb-4 transition-all">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-lg sm:text-xl font-bold">
                  The Will of Ohara
                </span>
                <span className="text-xs sm:text-sm font-normal opacity-90">
                  Guess manga chapter from description
                </span>
              </div>
            </button>
          </Link>

          {/* Botón 2 */}
          <Link to="/">
            <button
              disabled
              className="w-full px-4 py-3 sm:px-6 sm:py-4 focus:outline-none text-white bg-yellow-500/70 cursor-not-allowed rounded-lg mb-4"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-lg sm:text-xl font-bold">Log Pose (Coming soon...)</span>
                <span className="text-xs sm:text-sm font-normal opacity-90">
                  Find island on the map
                </span>
              </div>
            </button>
          </Link>

          {/* Pie de página opcional */}
          <p className="text-white/70 text-xs sm:text-sm mt-6">
            © 2025 Dev Julos
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
