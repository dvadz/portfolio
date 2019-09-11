import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import projects from "./projects";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    name: "Daniel Vadil",
    description:
      "Full Stack Web Developer with years of experience in Software Testing. Knowledgeable in the waterfall and agile software development life cycle methodologies. Focused on the user experience.",
    projects: projects
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Home name={this.state.name} description={this.state.description}></Home>
        <Portfolio projects={this.state.projects}></Portfolio>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
