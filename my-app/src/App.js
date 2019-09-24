import React from "react";
import "./App.css";

class Example extends React.Component {
  state = {
    liked: false
  };

  handleClick = () => {
    console.log("click");
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    console.log("state: ", this.state);
    // console.log("props: ", this.props);
    // this.props.name = "Alfonso"; ❌ props are immutable (read-only)

    let str = "";
    if (this.state.liked === true) {
      str = "Unlike";
    } else if (this.state.liked === false) {
      str = "Like";
    }

    // this.setState({ liked: !this.state.liked }); ❌ infinite loop

    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleClick}>{str}</button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <Example name="Antonio" />
    </div>
  );
};

export default App;
