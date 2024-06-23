import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>You can hire me to educate or do concept concerning programming</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
