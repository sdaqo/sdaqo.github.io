import React, { Component } from "react";
import Typed from "typed.js";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomePage extends Component {
  state = {
    socialComponent: <></>,
    typedFontSize: "text-[100px]",
  };

  constructor() {
    super();
    if (window.innerWidth < 720) {
      this.state.typedFontSize = "text-[60px]";
    }
  }

  componentDidMount() {
    this.typed = new Typed(this.span, {
      strings: ["Hello,", "My Name is", "sdaqo"],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "_",
      fadeOut: false,
      fadeOutDelay: 500,
      onComplete: () => {
        this.handleSocialRender();
      },
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  handleSocialRender() {
    const socialComponent = (
      <div className="text-[50px] flex flex-row justify-center items-center fadein">
          <a href="https://github.com/sdaqo">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        <div className="mx-2" />
          <a href="mailto:sdaqo.dev@protonmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
      </div>
    );
    this.setState({ socialComponent });
  }

  render() {
    return (
      <div className={this.state.typedFontSize}>
        <span
          className="drop-shadow-2xl"
          ref={(span) => {
            this.span = span;
          }}
        ></span>
        <div className="h-1 bg-zinc-700 "></div>
        {this.state.socialComponent}
      </div>
    );
  }
}

export default HomePage;
