import React from "react";
import "./BookItem.css";

const BookItem = ({ children }) => {
  return (
   <div className="ui blue segment">{children}</div>
  );
};

export default BookItem;

