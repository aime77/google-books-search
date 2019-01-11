import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={SearchBooks} />
        <Route exact path="/saved-books" component={SavedBooks} />
        <Route path="/not-found" component={Page404} />
      </div>
    </Router>
  );
}

export default App;
