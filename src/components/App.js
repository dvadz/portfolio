import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

class App extends React.Component {
  state = {
    name: "Daniel Vadil",
    description: "I am a Full Stack Developer"
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Home name={this.state.name} description={this.state.description}></Home>
        <About></About>
      </div>
    );
  }
}

export default App;
