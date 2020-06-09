import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import background from "./img/contact-bg.jpg";
const Contact = () => {
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
                <h1>Contact Me</h1>
                <span className="subheading">
                  Have questions? I have answers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required=""
                    placeholder="Name"
                  />
                  <small className="form-text text-danger help-block"></small>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required=""
                    placeholder="Email Address"
                  />
                  <small className="form-text text-danger help-block"></small>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    required=""
                    placeholder="Phone Number"
                  />
                  <small className="form-text text-danger help-block"></small>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-3">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    data-validation-required-message="Please enter a message."
                    required=""
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                  <small className="form-text text-danger help-block"></small>
                </div>
              </div>
              <div id="success"></div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
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

export default Contact;
