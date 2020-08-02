import React from "react";
import { Grid, Cell } from "react-mdl";
import Image from "./012";

const Landing = () => {
  return (
    <div class="flex-container bg-light">
      <Grid class="landing-grid">
        <Cell col={12}>
          <Image />

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
