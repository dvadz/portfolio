import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

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
      </div>
    );
  }
}

export default App;
