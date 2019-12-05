import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import projects from "./projects";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    name: "Daniel Vadil",
    description:
      "Full Stack Web Developer with years of experience in Software Testing. Knowledgeable in the waterfall and agile software development life cycle methodologies.",
    projects: projects
  };

  render() {
    return (
      <div className='app'>
        <Home name={this.state.name} description={this.state.description}></Home>
        <Portfolio projects={this.state.projects}></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
