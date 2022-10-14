import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./Views/Carrito";
import Detalle from "./Views/Detalle";
import NotFound from "./Views/NotFound";
import Home from "./Views/Home";
import { PizzasProvider } from "./Context/PizzaProvider";

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;
