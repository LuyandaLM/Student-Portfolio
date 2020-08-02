import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div class="demo-big-content">
      <Layout>
        <Header
          class="header"
          title={
            <Link style={{ color: "white" }} to="/">
              <i class="fa fa-fw fa-home"></i>
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <i class="fa fa-fw fa-home"></i>Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/resume"
            >
              <i class="fas fa-fw fa-id-card"></i>Curriculum Vitae
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/testimonials"
            >
              <i class="fas fa-at"></i>Testimonials
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/projects"
            >
              <i class="fas fa-laptop"></i>Projects
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <i class="fas fa-tty"></i>Contact
            </Link>
          </Navigation>
        </Header>

        <Drawer title={<Link style={{ color: "black" }} to="/"></Link>}>
          <Navigation>
            <Link style={{ color: "black" }} to="/">
              <i class="fa fa-fw fa-home"></i>Home
            </Link>
            <Link style={{ color: "black" }} to="/resume">
              <i class="fas fa-fw fa-id-card"></i>Curriculum Vitae
            </Link>
            <Link style={{ color: "black" }} to="/testimonials">
              <i class="fas fa-at"></i>testimonials
            </Link>
            <Link style={{ color: "black" }} to="/projects">
              <i class="fas fa-laptop"></i>Projects
            </Link>
            <Link style={{ color: "black" }} to="/contact">
              <i class="fas fa-tty"></i>Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div class="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
