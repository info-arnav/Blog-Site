import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import background from "./img/about-bg.jpg";
const About = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-lg fixed-top"
        id="mainNav"
      >
        <div className="container">
          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            className="navbar-toggler"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/index">
                  Home
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/post">
                  Blog Post
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Add Post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className="masthead"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <div className="site-heading">
                <h1>About Me</h1>
                <span className="subheading">This is what I do</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <p>i am a crazy girl - arnav gupta</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              praesentium recusandae illo eaque architecto error, repellendus
              iusto reprehenderit, doloribus, minus sunt. Numquam at quae
              voluptatum in officia voluptas voluptatibus, minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              consequuntur magnam, excepturi aliquid ex itaque esse est vero
              natus quae optio aperiam soluta voluptatibus corporis atque iste
              neque sit tempora!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </li>
              </ul>
              <p className="text-muted copyright">
                Copyright&nbsp;©&nbsp;Arnav Gupta 2020
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
