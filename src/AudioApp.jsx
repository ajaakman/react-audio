import React, { Component } from "react";
import ReactResizeDetector from "react-resize-detector";
import shortid from "shortid";
import Selector from "./Selector.jsx";
import Main from "./Main.jsx";
import Controls from "./Controls.jsx";

class AudioApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
      comp: null,
      id: null,
      type: null,
      selecting: null
    };
  }

  createComp = type => {
    //if (!this.props.initialized) this.props.loadAudio(); // TODO.

    this.setState(prevState => {
      let newcomponents = [];

      newcomponents = [
        ...prevState.components,
        {
          id: shortid.generate(),
          outId: null,
          type: type
        }
      ];

      return {
        components: newcomponents
      };
    });
  };

  selectComp = (newComp, newId, newType) =>
    this.setState({ comp: newComp, id: newId, type: newType });

  deleteComp = () => {
    this.setState(prevState => {
      let items = prevState.components.filter(item => item.id !== prevState.id);

      for (let i = 0; i < items.length; i++) {
        if (items[i].outId === prevState.id) items[i].outId = null;
      }

      return {
        components: items,
        comp: null,
        id: null,
        type: null,
        selecting: null
      };
    });
  };

  selectOut = (comp, out, id) => {
    comp === out ? comp.SetOut(0) : comp.SetOut(out.Get());

    this.setState(prevState => {
      let items = prevState.components;

      for (let i = 0; i < items.length; i++) {
        if (items[i].id === prevState.id) {
          if (prevState.id !== id) items[i].outId = id;
          else items[i].outId = null;
        }
      }

      return {
        components: items,
        selecting: null
      };
    });
  };

  setOut = (comp, id) => {
    this.state.selecting
      ? this.setState({ selecting: null })
      : this.setState({ selecting: comp });
  };

  redrawConnections = () => {
    this.setState(prevState => {
      const newcomponents = prevState.components;
      return {
        components: newcomponents
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.redrawConnections}
        />
        <Selector createComp={this.createComp} />
        <Main
          components={this.state.components}
          comp={this.state.comp}
          selectComp={this.selectComp}
          selecting={this.state.selecting}
          selectOut={this.selectOut}
          audio={this.props.audio}
        />
        <Controls
          comp={this.state.comp}
          deleteComp={this.deleteComp}
          type={this.state.type}
          setOut={this.setOut}
          selecting={this.state.selecting}
        />
      </React.Fragment>
    );
  }
}

export default AudioApp;
