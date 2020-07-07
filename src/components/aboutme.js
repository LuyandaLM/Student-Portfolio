import React from "react";
import { Cell } from "react-mdl";

const About = () => {
  return (
    <div className="container">
      <Cell className="resume-right-col" col={12}>
        <pre>
          <h1>About Page</h1>
          <h4>Full Name:</h4> Luyanda Mabozo
          <h4>Date of Birth:</h4> 27/05/1997
          <h4>Gender:</h4> Male
          <h4>Location (suburb):</h4> Summerville, Kuilsriver{" "}
          <h4>Nationality (or legal status in this country):</h4> South African
          Citizen Willing to relocate (Yes/No – Then where Johannesburg,
          Pretoria or Durban): Yes Where: Johannesburg, Durban Support: Yes, I
          have an aunt and friends in Johannesburg. I have a childhood friend in
          Durban <h4>Any type of criminal record:</h4> No{" "}
          <h4>Are you blacklisted or do you have any credit issues?</h4> No
          <h4>Student Bio:</h4> I am a self-disciplined, responsible and patient
          individual who loves interacting and communicating with people. I am a
          very goal orientated person and believe that I can add value to all
          projects I am involved in by utilizing the skills I have acquired over
          the years as a stepping stone to achieving success. I live for
          self-growth and developing my skills further and these qualities will
          help me to achieve my future aspirations of becoming a full stack
          developer.{" "}
          <h4>
            Please provide us with an idea as to where your passion for the tech
            space came from.
          </h4>{" "}
          In high school, I took CAT as a subject just to further my computer
          literacy and that&#39;s where I got my HTML knowledge. I bought myself
          a laptop in grade 11 and started video editing as my new skill because
          not only was I in love with the hardware parts of a computer or
          laptop, but I fell in love with the software part of things. I find it
          very fascinating to give instructions to a computer and it returns an
          outcome especially when it is something tangible. Programming is
          something I was very interested in as well and I’m glad that I found
          Life Choices Academy to nurture me. <h4>Passion Board:</h4>
          <ul>
            <li>Video editing</li>
            <li>Sound engineering</li>
            <li>Modelling </li>
            <li>Outdoor activities (camping, hiking, eating out)</li>
          </ul>{" "}
        </pre>
      </Cell>
    </div>
  );
};

export default About;
