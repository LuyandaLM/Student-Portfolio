import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header"
          title={
            <Link style={{ color: "white" }} to="/">
              <i className="fa fa-fw fa-home"></i>
              Luyanda's Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <i className="fa fa-fw fa-home"></i>Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/resume"
            >
              <i classn="fas fa-fw fa-id-card"></i>Curriculum Vitae
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/aboutme"
            >
              <i className="fas fa-at"></i>About Me
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/projects"
            >
              <i className="fas fa-laptop"></i>Projects
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <i className="fas fa-tty"></i>Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ color: "black" }} to="/">
              Luyanda's Portfolio
            </Link>
          }
        >
          <Navigation>
            <Link style={{ color: "black" }} to="/">
              <i className="fa fa-fw fa-home"></i>Home
            </Link>
            <Link style={{ color: "black" }} to="/resume">
              <i className="fas fa-fw fa-id-card"></i>Curriculum Vitae
            </Link>
            <Link style={{ color: "black" }} to="/aboutme">
              <i className="fas fa-at"></i>About Me
            </Link>
            <Link style={{ color: "black" }} to="/projects">
              <i className="fas fa-laptop"></i>Projects
            </Link>
            <Link style={{ color: "black" }} to="/contact">
              <i className="fas fa-tty"></i>Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
