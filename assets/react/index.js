import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import background from "./img/home-bg.jpg";
const Index = () => {
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
                <h1 id="index-title">arnav Gupta</h1>
                <span className="subheading">A page for my essays</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8">
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by&nbsp;
                <a href="#">Start Bootstrap on September 24, 2018</a>
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </a>
              <p className="post-meta">
                Posted by&nbsp;
                <a href="#">Start Bootstrap on September 18, 2018</a>
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by&nbsp;
                <a href="#">Start Bootstrap on August 24, 2018</a>
              </p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by&nbsp;<a href="#">Start Bootstrap on July 8, 2018</a>
              </p>
            </div>
            <hr />
            <div className="clearfix">
              <button className="btn btn-primary float-right" type="button">
                Older Posts&nbsp;⇒
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default Index;
