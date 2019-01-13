import React from "react";
import "./BookItem.css";
import Buttons from "./Buttons";
import DeleteBtn from "./DeleteBtn";

const BookItem = ({ books, onBookSelect, onSaveButton, onDeleteBtn }) => {
  return (
    <div onClick={() => onBookSelect(books)} className="book-item item">
      <div className="header">{books.volumeInfo.title}</div>
      <div className="col-12">
      <img
        className="ui image" alt={books.volumeInfo.title} 
        src={books.volumeInfo.imageLinks.smallThumbnail}
      />
      <div className="content">
        <div className="body">{books.volumeInfo.description}</div>
      </div>
       <Buttons onSaveButton={onSaveButton}/>
       <DeleteBtn onDeleteBtn={onDeleteBtn}/>
      </div>
    </div>
  
  );
};

export default BookItem;
