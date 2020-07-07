import React from "react";
import { Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const Resume = () => {
  return (
    <div className="container">
      <div className="row">
        <Cell className="resume-right-col" col={12}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://s3-eu-west-1.amazonaws.com/content.portfoliopad.com/images/9222/1246274/Xlarge/012.jpg?AWSAccessKeyId=AKIAI7DDKYEH73YBC5NA&Expires=1594067935&Signature=HuUoOEsjuBdyX%2FZIIW0mVhGRCe8%3D"
              alt="avatar"
              className="avatar-img"
              style={{ height: "400px" }}
            />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Luyanda Mabozo</h2>
          <h4>Full Stack Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Luyanda is a very creative individual, who has proven himself to be
            quite resourceful as a developer.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>24 Pouter street Kuilsriver 7580</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Phone</h5>
          <p>(084) 722-9233</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Email</h5>
          <p>Luyandamabozo@gmail.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>

        <div className="row">
          <Cell className="resume-right-col" col={12}>
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

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2015}
              jobName="EPWP Student"
              jobDescription="Data capturing, Setting up meetings, Substitute receptionist & HR Manager assistant"
            />

            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Real Estate Agent Intern"
              jobDescription="View ins, Check eligibility for a mortgage, Data Capturing, Evaluation of properties & Sale of properties "
            />
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Call centre Agent"
              jobDescription="Customer service through courtesy calls"
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Promoter"
              jobDescription="Sales activations, promotion of products"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={40} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={60} />
          </Cell>
        </div>
      </div>
    </div>
  );
};

export default Resume;
