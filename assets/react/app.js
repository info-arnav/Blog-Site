import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Index from "./index";
import About from "./about";
import Contact from "./contact";
import Edit from "./edit";
import Post from "./post";
import Api from "./api";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Index} />
      <Route path="/index" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/edit" component={Edit} />
      <Route path="/post" component={Post} />
      <Route path="/api" component={Api} />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
