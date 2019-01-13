import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onBookSelect, onSaveButton, onDeleteBtn}) => {
  const renderedList = books.map(book => {
    return <BookItem onBookSelect={onBookSelect} books={book} onSaveButton={onSaveButton} onDeleteBtn={onDeleteBtn}/>;
  });

  return <div className="ui relaxed divided list"> {renderedList}</div>;
};

export default BookList;
