import React, { useContext } from "react";
import "../Styles/card.css";
import PizzasContext from "../Context/PizzaProvider";
import { formatNumber } from "../formatNumber";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const { pizzas, addToCart } = useContext(PizzasContext);
  const navigate = useNavigate();

  //Render de las Cards a mostrar en view Home
  return (
    <div className="card-container">
    {pizzas.map((pizza) =>
    <div key={pizza.id} className="cards">
    <div className="card">
        <img className="card-img-top" src={pizza.img} alt={pizza.name} />
        <div className="card-body">
          <h4 className="card-tittle">
            Pizza {pizza.name}
          </h4>
          <p className="card-text">
            <b>Ingredientes:</b>
          </p>
          <ul style={{listStyle:'none'}}>
            {pizza.ingredients.map((ingredient, i) =>(
              <li key={i}>
                🍕 {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="card-precio">
          Precio: $ {formatNumber(pizza.price)}
        </h2>
        <div className="buttons">
            <button
            className="btn-verMas"
            to={`/pizza/${pizza.id}`}
            onClick={() =>  navigate(`/pizza/${pizza.id}`)}
            >
              Ver mas</button>
            <button
            className="btn-añadir"
            onClick={()=> addToCart(pizza)}
            >
              Añadir</button>
        </div>
      </div>
      </div>
    
    )}
      
    </div>
  );
}
