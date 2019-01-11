import React from "react";
import CardsItem from "./CardsItem";

const CardList = ({ books, onBookSelect }) => {
  const renderedList = books.map(book => {
    return <CardsItem onBookSelect={onBookSelect} books={book}/>;
  });

  return <div className="ui middle aligned divided list"> {renderedList}</div>;
};

export default CardList;
