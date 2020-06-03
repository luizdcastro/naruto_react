import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.shinobis.map((shinobi) => (
      <Card key={shinobi._id} shinobi={shinobi} />
    ))}
  </div>
);
