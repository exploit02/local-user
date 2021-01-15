import React from "react";
import "./input.css";

function Input(props) {
    return (
        <div className="input">
            <input {...props} />
        </div>
    );
}

export default Input;
