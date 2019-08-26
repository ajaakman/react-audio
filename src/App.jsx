import React, { Component } from "react";
import "./App.css";
import { Audio, InitAudio } from "./AudioAPI.ts";
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
    Audio.onRuntimeInitialized = () => {
      this.setState({ runtime: true });
    };
  }

  loadAudio = () => {
    let err = InitAudio();
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
        />
      );

    return <div className="app">{app}</div>;
  }
}

export default App;
