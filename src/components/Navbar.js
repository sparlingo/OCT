import React, { Component } from 'react'
import $ from 'jquery'

class Navbar extends Component {
  
  componentDidMount() {
    $(document).ready(function() {
      $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
    });
    $(document).ready(function() {
      $(".bottom-link").click(function() {
        $(".bottom-link").removeClass("is-active")
        $(this).addClass("is-active");
      });
    });
  }

  render() {
    return (
      <section className="hero is-medium is-primary">
        <div className="hero-head">
          <nav class="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="bulma" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHero">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHero" class="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    Home
                  </a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      Login
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Blue Bird Barter
            </h1>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="bottom-link"><a>Thing 1</a></li>
                <li className="bottom-link"><a>Thing 2</a></li>
                <li className="bottom-link"><a>Thing 3</a></li>
                <li className="bottom-link"><a>Thing 4</a></li>
                <li className="bottom-link"><a>Thing 5</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    )
  }
}

export default Navbar