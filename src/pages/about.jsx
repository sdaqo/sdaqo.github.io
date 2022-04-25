import React, { Component } from "react";
import SocialButton from "../components/socialButton";
import svgPaths from "../misc/svgPaths";

class About extends Component {
  state = {
    socials: [
      {
        fill: "black",
        link: "https://github.com/sdaqo",
        extraClasses: "ml-[0.29rem]",
        svgPath: svgPaths.github,
      },
      {
        fill: "#2f52a2",
        link: "https://myanimelist.net/profile/SDA0",
        extraClasses: "ml-[0.35rem]",
        svgPath: svgPaths.mal,
      },
      {
        fill: "#7389dc",
        link: "https://discord.com/users/456899938878750720",
        extraClasses: "ml-[0.30rem] mb-[0.10rem]",
        svgPath: svgPaths.discord,
      },
      {
        fill: "#ff581a",
        link: "https://www.reddit.com/user/VastHabit8504",
        extraClasses: "ml-[0.30rem]",
        svgPath: svgPaths.reddit,
      },
    ],
  };

  render() {
    return (
      <>
        <div>
          <div className="text-box rounded-lg mx-2">
            <h1 className="mb-1 text-center text-xl font-extrabold">
              Hi, my name is sdaqo, SDA0 or as they call me in real-life: Paul
            </h1>
            <hr className="mb-5"></hr>
            <h2 className="text-center mb-3 text-lg font-semibold">
              Python & Web (well somewhat) Developer
            </h2>
            <h2 className="text-center text-lg mb-3 font-semibold">
              Certified Stackoverflow Collector
            </h2>
            <h2 className="text-center text-lg mb-3 font-semibold">
              Professional Anime enjoyer
            </h2>
            <h2 className="text-center text-lg mb-3 font-semibold hidden">
              Hi there :)
            </h2>
          </div>
          <div className="mt-36 text-center">
            <div className="flex justify-center mt-3">
              {this.state.socials.map((obj) => {
                return (
                  <SocialButton
                    fill={obj.fill}
                    link={obj.link}
                    svgPath={obj.svgPath}
                    extraClasses={obj.extraClasses}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
