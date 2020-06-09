import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import background from "./img/post-bg.jpg";
const Post = () => {
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
              <div className="post-heading">
                <h1>
                  Man must explore, and this is exploration at its greatest
                </h1>
                <h2 className="subheading">
                  Problems look mighty small from 150 miles up
                </h2>
                <span className="meta">
                  Posted by&nbsp;<a href="#">Start Bootstrap</a>&nbsp;on August
                  24, 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <p>
                Never in all their history have men been able truly to conceive
                of the world as one: a single sphere, a globe, having the
                qualities of a globe, a round earth in which all the directions
                eventually meet, in which there is no center because every
                point, or none, is center — an equal earth which all men occupy
                as equals. The airman's earth, if free men make it, will be
                truly round: a globe in practice, not in theory.
              </p>
              <p>
                Science cuts two ways, of course; its products can be used for
                both good and evil. But there's no turning back from science.
                The early warnings about technological dangers also come from
                science.
              </p>
              <p>
                What was most significant about the lunar voyage was not that
                man set foot on the Moon but that they set eye on the earth.
              </p>
              <p>
                A Chinese tale tells of some men sent to harm a young girl who,
                upon seeing her beauty, become her protectors rather than her
                violators. That's how I felt seeing the Earth for the first
                time. I could not help but love and cherish her.
              </p>
              <p>
                For those who have seen the Earth from space, and for the
                hundreds and perhaps thousands more who will, the experience
                most certainly changes your perspective. The things that we
                share in our world are far more valuable than those which divide
                us.
              </p>
              <h2 className="section-heading">Heading</h2>
              <p>
                There can be no thought of finishing for ‘aiming for the stars.’
                Both figuratively and literally, it is a task to occupy the
                generations. And no matter how much progress one makes, there is
                always the thrill of just beginning.
              </p>
              <p>
                There can be no thought of finishing for ‘aiming for the stars.’
                Both figuratively and literally, it is a task to occupy the
                generations. And no matter how much progress one makes, there is
                always the thrill of just beginning.
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  The dreams of yesterday are the hopes of today and the reality
                  of tomorrow. Science has not yet mastered prophecy. We predict
                  too much for the next year and yet far too little for the next
                  ten.
                </p>
              </blockquote>
              <p>
                Spaceflights cannot be stopped. This is not the work of any one
                man or even a group of men. It is a historical process which
                mankind is carrying out in accordance with the natural laws of
                human development.
              </p>
              <h2 className="section-heading">Reaching for the Stars</h2>
              <p>
                As we got further and further away, it [the Earth] diminished in
                size. Finally it shrank to the size of a marble, the most
                beautiful you can imagine. That beautiful, warm, living object
                looked so fragile, so delicate, that if you touched it with a
                finger it would crumble and fall apart. Seeing this has to
                change a man.
              </p>
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/post-sample-image.jpg"
                />
              </a>
              <span className="caption text-muted">
                To go places and do things that have never been done before –
                that’s what living is all about.
              </span>
              <p>
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before.
              </p>
              <p>
                As I stand out here in the wonders of the unknown at Hadley, I
                sort of realize there’s a fundamental truth to our nature, Man
                must explore, and this is exploration at its greatest.
              </p>
              <p>
                <span>Placeholder text by&nbsp;</span>
                <a href="http://spaceipsum.com">Space Ipsum</a>
                <span>&nbsp;Photographs by&nbsp;</span>
                <a href="https://www.flickr.com/photos/nasacommons/">
                  NASA on The Commons
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
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

export default Post;
