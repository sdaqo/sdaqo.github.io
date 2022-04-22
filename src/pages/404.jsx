import React, { Component } from "react";
import Typed from "typed.js";

class ErrorPage extends Component {
  componentDidMount() {
    this.typed = new Typed(this.p, {
      strings: ["404", "Page Not Found :("],
      typeSpeed: 40,
      backSpeed: 40,
      cursorChar: "",
      fadeOut: false,
      fadeOutDelay: 500,
      loop: true,
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="text-2xl underline underline-offset-8">
        <span ref={(p) => (this.p = p)}></span>
      </div>
    );
  }
}

export default ErrorPage;
