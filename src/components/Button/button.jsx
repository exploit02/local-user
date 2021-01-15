import React from "react";
import "./button.css";

function Button({ children, color, ...props }) {
    return (
        <button className={color || "default"} {...props}>
            {children}
        </button>
    );
}

export default Button;
