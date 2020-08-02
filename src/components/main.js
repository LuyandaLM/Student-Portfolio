import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Testimonials from "./testimonials";
import Contact from "./Contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/testimonials" component={Testimonials} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
