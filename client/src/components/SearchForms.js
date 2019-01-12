import React from "react";

function SearchForm(props) {
  return (
    <div>
    <form className="search">
      <div className="form-inline icon input">
       <i class="search link icon" onClick={props.handleFormSubmit} />
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control ml-5 w-100"
          placeholder="Search for a book..."
          id="search"
        />
       
      </div>
      
      
    </form>
  
  </div>
    
  );
}

export default SearchForm;


