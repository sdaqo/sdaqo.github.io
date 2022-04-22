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
    console.log(this.props.currentPage);
    return (
      <div className="flex bottom-0 justify-center text-white mt-3">
        <Link to="/portfolio-website">
          <button className={this.getClasses("/portfolio-website")}>
            Home
          </button>
        </Link>
        <div className="mx-2" />
        <Link to="/portfolio-website/projects">
          <button className={this.getClasses("/portfolio-website/projects")}>
            Projects
          </button>
        </Link>
        <div className="mx-2" />
        <Link to="/portfolio-website/about">
          <button className={this.getClasses("/portfolio-website/about")}>
            About
          </button>
        </Link>
      </div>
    );
  }
}

export default NavBar;
