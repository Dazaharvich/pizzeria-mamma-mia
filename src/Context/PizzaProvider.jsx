import { createContext, useState, useEffect } from "react";

// Creación del context
const PizzasContext = createContext();

// Provider con la fuente de datos para proveer
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };
  //Cargar lista
  useEffect(() => {
    getPizzas();
  }, []);

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    // Si hay respuesta findIndex retorna 0, si no hay nada retorna -1
    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const incrementar = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrementar = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };


  

  console.log(carrito);
  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart, incrementar, decrementar }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

// Export del provider
export { PizzasProvider };

// Export del context
export default PizzasContext;
