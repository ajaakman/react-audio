import React from "react";
import AudioComp from "./AudioComp.jsx";
import MasterMixer from "./MasterMixer.jsx";

const Main = props => {
  return (
    <div className="main">
      {props.components.map(item => (
        <AudioComp
          key={item.id}
          id={item.id}
          outId={item.outId}
          type={item.type}
          selected={props.comp}
          amp={item.amp}
          freq={item.freq}
          selectComp={props.selectComp}
          selecting={props.selecting}
          selectOut={props.selectOut}
        />
      ))}
      <MasterMixer
        selecting={props.selecting}
        selectOut={props.selectOut}
        audio={props.audio}
      />
    </div>
  );
};

export default Main;
