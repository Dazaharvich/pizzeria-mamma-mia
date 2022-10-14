import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import PizzasContext from "../Context/PizzaProvider";
import { formatNumber } from "../formatNumber";
import "../Styles/carrito.css";

export default function Carrito() {
  const { carrito, incrementar, decrementar } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <Navbar />
      <div className="carrito-container">
      <div className="carrito">
        <h4>Detalles del pedido:</h4>
          <div className="lista-carrito">
            {carrito.map((item, i) => (
              <div key={i} className="detalles">
                <div className="producto">
                  <img src={item.img} className="img-carrito" alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
                <div className="contadores">
                  <h6>$ {formatNumber(item.price * item.count)}</h6>
                  <button
                    className="decrementar"
                    onClick={() => decrementar(i)}
                  >
                    -
                  </button>
                  <b>{item.count}</b>
                  <button
                    className="incrementar"
                    onClick={() => incrementar(i)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr className="line" />
        <div className="totales">
          <h2>Total: ${formatNumber(total)}</h2>
          <button className="btn-verMas">Ir a Pagar</button>
        </div>
      </div>
      </div>
    </>
  );
}
