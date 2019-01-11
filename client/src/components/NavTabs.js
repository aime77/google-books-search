import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  return (
    <div>
      <div class="ui top attached tabular menu">
        <a class="item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "item active" : "item"
            }
          >
            Search Books
          </Link>
        </a>
        <a class="item">
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
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search books..." />
              <i class="search link icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="ui bottom attached segment">
        <p />
      </div>
    </div>
  );
};

export default NavTabs;
