import React from "react";
import { Grid, Cell } from "react-mdl";

const Landing = () => {
  return (
    <div class="flex-container bg-light">
      <Grid class="landing-grid">
        <Cell col={12}>
          <img
            src="https://s3-eu-west-1.amazonaws.com/content.portfoliopad.com/images/9222/1246274/Xlarge/012.jpg?AWSAccessKeyId=AKIAI7DDKYEH73YBC5NA&Expires=1596375199&Signature=6c%2BBBjD9JoJq9iLglzQrpO38WMA%3D"
            alt="avatar"
            class="avatar-img"
          />

          <div class="card">
            <h1>Luyanda Mabozo</h1>

            <h3>Full Stack Web Developer</h3>

            <div class="social-links">
              {/* Github */}
              <a
                href="https://github.com/Luyanda-Tommy27"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa fa-github-square" />
              </a>

              {/* Email */}
              <a href="mailto:luyandamabozo@gmail.com">
                <i class="fa fa-envelope-square" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landing;
