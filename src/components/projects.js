import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "250px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h3>GitHub Finder</h3>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/Luyanda-Tommy27/GITHUB-FINDER-PROJECT"
                colored
              >
                Go to Repo
              </Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h3>Contact Keeper</h3>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/Luyanda-Tommy27/ContactKeeper"
                colored
              >
                Go to Repo
              </Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h3>IT Logger</h3>
            </CardText>
            <CardActions border>
              <Button href="https://github.com/Luyanda-Tommy27/IT-Logger">
                Go to Repo
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>
            <h5>Projects</h5>
          </Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
