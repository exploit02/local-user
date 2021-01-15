import React from "react";
import "./card.css";

function Card({ children, ...props }) {
    return <div className="card">{children}</div>;
}

export default Card;
