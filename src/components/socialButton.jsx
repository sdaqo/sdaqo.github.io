import React, { Component } from "react";
import { isMobile } from "react-device-detect";

class SocialButton extends Component {
  state = {
    fill: "",
  };

  constructor(props) {
    super(props);
    if (isMobile) {
      this.state.fill = this.props.fill;
    }
  }

  render() {
    return (
      <a href={this.props.link} rel="noreferrer" target="_blank">
        <button
          className="socialButton mx-2"
          style={{
            "--color": this.props.fill,
            backgroundColor: this.state.fill,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ height: "80%", width: "80%" }}
            className={this.props.extraClasses}
            preserveAspectRatio="xMidYMid meet"
            fill-rule="evenodd"
          >
            <path fill="white" d={this.props.svgPath}></path>
          </svg>
        </button>
      </a>
    );
  }
}

export default SocialButton;
