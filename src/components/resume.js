import React from "react";
import { Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Image from "./012";

const Resume = () => {
  return (
    <div class="flex-container">
      <div class="row">
        <Cell class="resume-right-col" col={6}>
          <div style={{ textAlign: "center" }}>
            <Image />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Luyanda Mabozo</h2>
          <h4>Full Stack Developer</h4>
          <hr style={{ borderTop: "3px solid navy", width: "50%" }} />
          <p>
            Luyanda is a very creative individual, who has proven himself to be
            quite resourceful as a developer.
          </p>
          <hr style={{ borderTop: "3px solid navy", width: "50%" }} />
          <h5>City</h5>
          <p>Cape Town</p>
          <hr style={{ borderTop: "3px solid navy", width: "50%" }} />
          <h5>Phone</h5>
          <p>(084) 722-9233</p>
          <hr style={{ borderTop: "3px solid navy", width: "50%" }} />
          <h5>Email</h5>
          <p>Luyandamabozo@gmail.com</p>
          <hr style={{ borderTop: "3px solid navy", width: "50%" }} />
        </Cell>

        <div class="row">
          <Cell class="resume-right-col" col={6}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2015}
              schoolName="Brackenfell High School"
            />
            <Education
              startYear={2017}
              endYear={2019}
              schoolName="Cape Peninsula University of Technology"
            />
            <hr style={{ borderTop: "3px solid navy" }} />
            <h2>Experience</h2>
            <h4>1. City Of Cape Town</h4>
            <Experience
              startYear={2014}
              endYear={2015}
              jobName="EPWP Student"
              jobDescription="Data capturing, Setting up meetings, Substitute receptionist & HR Manager assistant"
            />
            <h4>2. Leapfrog Properties</h4>
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Real Estate Agent Intern"
              jobDescription="View ins, Check eligibility for a mortgage, Data Capturing, Evaluation of properties & Sale of properties "
            />
            <h4>3. Customer Care Solutions</h4>
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Call centre Agent"
              jobDescription="Customer service through courtesy calls"
            />
            <h4>4. Sozala Media/Trinity Brands</h4>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Promoter"
              jobDescription="Sales activations, promotion of products"
            />
            <hr style={{ borderTop: "3px solid navy" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={40} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={60} />
          </Cell>
          <Cell class="resume-right-col" col={6}>
            <Image />

            <div class="card">
              <h1>About Me</h1>
              <h4>Full Name:</h4> Luyanda Mabozo
              <h4>Date of Birth:</h4> 27/05/1997
              <h4>Gender:</h4> Male
              <h4>Location (suburb):</h4> Summerville, Kuilsriver{" "}
              <h4>Nationality:</h4> South African Citizen
              <h4>Willing to relocate:</h4> No
              <h4>Any criminal record:</h4> No{" "}
              <h4>Are you blacklisted or do you have any credit issues?</h4> No
              <h4>Student Bio:</h4> I am a self-disciplined, responsible and
              patient individual who loves interacting and communicating with
              people. I am a very goal orientated person and believe that I can
              add value to all projects I am involved in by utilizing the skills
              I have acquired over the years as a stepping stone to achieving
              success. I live for self-growth and developing my skills further
              and these qualities will help me to achieve my future aspirations
              of becoming a full stack developer.{" "}
              <h4>Where does my passion for the tech space came from?</h4> In
              high school, I took CAT as a subject just to further my computer
              literacy and that is where I got my HTML knowledge. I bought
              myself a laptop in grade 11 and started video editing as my new
              skill because not only was I in love with the hardware parts of a
              computer or laptop, but I fell in love with the software part of
              things. I find it very fascinating to give instructions to a
              computer and it returns an outcome especially when it is something
              tangible. Programming is something I was very interested in as
              well and I’m glad that I found Life Choices Academy to nurture me.
              <h4>Passion Board:</h4>
              <ul>
                <li>Video editing</li>
                <li>Sound engineering</li>
                <li>Modelling </li>
                <li>Outdoor activities (camping, hiking, eating out)</li>
              </ul>{" "}
            </div>
          </Cell>
        </div>
      </div>{" "}
      /
    </div>
  );
};

export default Resume;
