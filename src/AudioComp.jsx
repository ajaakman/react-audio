import React, { Component } from "react";
import LineTo from "react-lineto";
import Button from "@material-ui/core/Button";
import Draggable from "./Draggable.jsx";
import { CompDelete } from "./AudioAPI.ts";
import { CreateComponent } from "./AudioComps.js";

class AudioComp extends Component {
  constructor(props) {
    super(props);
    this.comp = CreateComponent(this.props.type);
  }

  componentDidMount() {
    this.props.selectComp(this.comp, this.props.id, this.props.type);
  }

  componentWillUnmount() {
    CompDelete(this.comp);
  }

  selectComp = () => {
    this.props.selecting
      ? this.props.selectOut(this.props.selecting, this.comp, this.props.id)
      : this.props.selectComp(this.comp, this.props.id, this.props.type);
  };

  render() {
    let style = { color: "default", variant: "outlined" };
    if (this.props.selecting)
      style = { color: "primary", variant: "contained" };
    if (this.props.selected === this.comp)
      style = { color: "default", variant: "contained" };

    return (
      <Draggable>
        {this.props.outId && (
          <LineTo
            className={"connections"}
            from={this.props.id}
            to={this.props.outId}
            zIndex={-1}
            borderStyle={"solid"}
            borderColor={"black"}
            borderWidth={1}
            fromAnchor={"bottom center"}
            toAnchor={"top center"}
          />
        )}
        <Button
          color={style.color}
          variant={style.variant}
          disableRipple={true}
          size={"large"}
          className={"comp " + this.props.id}
          onClick={this.selectComp}
        >
          {this.props.type}
        </Button>
      </Draggable>
    );
  }
}

export default AudioComp;
