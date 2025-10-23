import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";

// 1Crea una instancia del cliente de React Query (fuera del componente)
const queryClient = new QueryClient();

function App() {
  
  return (
    //Envuelve toda la app con el proveedor de React Query
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter" element={<Chapter />} /> 
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;