import React from "react";
import { Grid, Cell } from "react-mdl";

const Landing = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://s3-eu-west-1.amazonaws.com/content.portfoliopad.com/images/9222/1246274/Xlarge/012.jpg?AWSAccessKeyId=AKIAI7DDKYEH73YBC5NA&Expires=1594067935&Signature=HuUoOEsjuBdyX%2FZIIW0mVhGRCe8%3D"
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Luyanda Mabozo</h1>

            <p>Full Stack Web Developer</p>

            <div className="social-links">
              {/* Linked In */}
              <a
                href="https://www.linkedin.com/in/tommy-lu-ab1b1b1a6/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-envelope-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/Luyanda-Tommy27"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Insta */}
              <a
                href="https://www.instagram.com/tommy_lu_007/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/luks.mabee2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landing;
