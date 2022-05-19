import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <p className="CreditTagline">About</p>
        <div className="AboutPic">
          <img
            src={require("../images/patrick.jpg")}
            alt="Patrick Ugbugba"
            className="PatrickPhoto"
          />
          <div className="ProfileContent">
            <p className="PatrickName">Patrick Ugbugba</p>
            <p className="DataScience">(Data Scientist)</p>
            <a href="https://github.com/">
              <img
                src={require("../images/Git.png")}
                alt="Git"
                className="GithubLogo1"
              />
            </a>
            <p className="Project">
            University of Sunderland School of Computer Science CETM46 – Data
            Science Product Development 2021/22 Session
          </p>
          </div>          
        </div>
      </div>
    );
  }
}

export default About;
