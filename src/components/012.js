import React, { Fragment } from "react";
import image from "./012.jpg";

const Image = () => (
  <Fragment>
    <img
      src={image}
      alt="Loading ..."
      style={{ width: "200px", margin: "auto", display: "block " }}
    />
  </Fragment>
);

export default Image;
