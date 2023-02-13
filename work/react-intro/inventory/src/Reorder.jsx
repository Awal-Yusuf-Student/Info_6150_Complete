import Button from "./Button";
import React from "react";
import App from "./App";
import "./Reorder.css";

function Reorder(props) {
  const { click, title } = props;

    return <button className="Reorderbtn" onClick={click}>{title}</button>;
  
}

export default Reorder;