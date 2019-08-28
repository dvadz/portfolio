import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

class App extends React.Component {
  state = {
    name: "Daniel Vadil",
    description:
      "Full Stack Web Developer with years of experience in Software Testing. Knowledgeable in the cascade and agile software development life cycle. Detail-oriented and always focused on the user experience.",
    about: "This is about me"
  };

  render() {
    return (
      <div className='container'>
        <Navbar></Navbar>
        <Home name={this.state.name} description={this.state.description}></Home>
        <About></About>
      </div>
    );
  }
}

export default App;
