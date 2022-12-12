import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { NavLinks } from "./NavLinks";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Traveller</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
          {/* <i class="fa-solid fa-times"></i> */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavLinks.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Header;
