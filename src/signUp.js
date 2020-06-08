import React from "react";

function singUp(props) {
  return (
    <div>
    <h1>Please sign Up here</h1>
    <h1> Email Address is {props.email} and Name is {props.name} </h1>

    </div>
  );
}

export default singUp;
