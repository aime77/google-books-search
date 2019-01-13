import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  return (
    <div>
      <div className="ui top attached tabular menu">
        <a className="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "item active" : "item"
            }
          >
            Search Books
          </Link>
        </a>
        <a className="item">
          <Link
            to="/saved-books"
            className={
              window.location.pathname === "/saved-books"
                ? "item active"
                : "item"
            }
          >
            Saved Books
          </Link>
        </a>
      </div>
      <div className="ui bottom attached segment">
        <p />
      </div>
    </div>
  );
};

export default NavTabs;
