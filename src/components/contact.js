import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Luyanda Mabozo</h2>
          <img
            src="https://s3-eu-west-1.amazonaws.com/content.portfoliopad.com/images/9222/1246274/Xlarge/015.jpg?AWSAccessKeyId=AKIAI7DDKYEH73YBC5NA&Expires=1594067934&Signature=tkl9FfdMIRebh%2FhdSRDEfUsQOaY%3D"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}></p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (084) 722-9233
                </ListItemContent>
              </ListItem>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  Luyandamabozo@gmail.com
                </ListItemContent>
              </ListItem>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                  Luyanda Mabozo
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
