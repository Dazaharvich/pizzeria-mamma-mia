import { Link } from "react-router-dom";
import { formatNumber } from "../formatNumber";
import PizzasContext from "../Context/PizzaProvider";
import React, { useContext } from "react";
import '../Styles/navbar.css'


export default function Navbar() {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  return (
    <div className="navbar">
      <div className="link">
        <Link to="/" className="logo">
          <h4 className="nombre-logo">
            <span className="logo-pizza">🍕</span>Pizzería Mamma Mia!
          </h4>
        </Link>

        <Link to="/carrito" className="link-carrito">
          <h4 className="total">
            <span className="logo-carrito">🛒</span>Total: $
            {formatNumber(total)}
          </h4>
        </Link>
      </div>
    </div>
  );
}
