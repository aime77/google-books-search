import React from "react";

// const BookList = ({ books, onBookSelect, onSaveButton, onDeleteBtn}) => {
//   const renderedList = books.map(book => {
//     return <BookItem onBookSelect={onBookSelect} books={book} onSaveButton={onSaveButton} onDeleteBtn={onDeleteBtn}/>;
//   });

//   return <div className="ui relaxed divided list"> {renderedList}</div>;
// };

// export default BookList;

const BookList = ({children}) => {
 
  return <div className="ui relaxed divided list"> {children}</div>;
};

export default BookList;



