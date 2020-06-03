import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img className="image" alt="ninja" src={props.shinobi.image} />
    <h2>{props.shinobi.name}</h2>
    <p>Rank: {props.shinobi.rank}</p>
    <p>{props.shinobi.clan}</p>
  </div>
);
