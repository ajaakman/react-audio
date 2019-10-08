import React, { Component } from "react";
import "./App.css";
import Audio from "./AudioAPI.ts";
import AudioApp from "./AudioApp.jsx";
import Error from "./Error.jsx";
import Loading from "./Loading.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 0,
      initialized: false,
      runtime: false
    };
    this.audio = null;
    Audio.onRuntimeInitialized = () => {
      this.audio = new Audio.Master();
      this.loadAudio();
      this.setState({ runtime: true });
    };
  }

  componentWillUnmount() {
    this.audio.delete();
    this.audio = null;
  }

  loadAudio = () => {
    let err = this.audio.InitAudio();
    err ? this.setState({ error: err }) : this.setState({ initialized: true });
  };

  render() {
    let app;

    if (!this.state.runtime) app = <Loading />;
    else if (this.state.error)
      app = <Error element="Audio" code={this.state.error} />;
    else
      app = (
        <AudioApp
          initialized={this.state.initialized}
          loadAudio={this.loadAudio}
          audio={this.audio}
        />
      );

    return <div className="app">{app}</div>;
  }
}

export default App;
