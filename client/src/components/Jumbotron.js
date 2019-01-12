import React from "react";


function Jumbotron(props) {
  return (
    <div className="jumbotron text-center">
     {props.children}
    </div>
  );
}

export default Jumbotron;
