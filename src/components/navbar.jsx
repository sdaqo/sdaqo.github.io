import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  getClasses(path) {
    var classes = "buttonShadow";
    if (path === this.props.currentPage)
      return classes + " bg-cyan-500 shadow-lg shadow-cyan-500/50";
    return classes;
  }

  render() {
    return (
      <div className="flex bottom-0 justify-center text-white mt-3">
        <Link to="/">
          <button className={this.getClasses("/")}>Home</button>
        </Link>
        <div className="mx-2" />
        <Link to="/projects">
          <button className={this.getClasses("/projects")}>Projects</button>
        </Link>
        <div className="mx-2" />
        <Link to="/about">
          <button className={this.getClasses("/about")}>About</button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
