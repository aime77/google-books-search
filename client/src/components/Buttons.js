import React from "react";

const Buttons=({ type = "default", className, children, onClick }) =>{
  return (
    <button onClick={onClick} className={["btn btn-lg", `mx-2`, `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}
export default Buttons;
