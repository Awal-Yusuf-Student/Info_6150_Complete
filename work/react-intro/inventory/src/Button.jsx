import React from "react";

function Button(props) {
  const { click, title } = props;
  console.log(click)
  return <button onClick={click}>{title}</button>;
}

export default Button;