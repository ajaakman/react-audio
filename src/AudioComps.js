import React from "react";
import Oscillator from "./Oscillator.jsx";
import LPFilter from "./LPFilter.jsx";
import Audio from "./AudioAPI.ts";

export const AudioComps = ["Oscillator", "LPFilter"];

export const CreateComponent = type => {
  switch (type) {
    case "Oscillator":
      return new Audio.Osc();
    case "LPFilter":
      return new Audio.LP();
    default:
      console.error("Incorrect Draggable Type!!!");
      return null;
  }
};

export const GetComponent = (compType, comp, deleteComp, setOut, selecting) => {
  switch (compType) {
    case "Oscillator":
      return (
        <Oscillator
          comp={comp}
          deleteComp={deleteComp}
          setOut={setOut}
          selecting={selecting}
        />
      );
    case "LPFilter":
      return (
        <LPFilter
          comp={comp}
          deleteComp={deleteComp}
          setOut={setOut}
          selecting={selecting}
        />
      );
    default:
      return null;
  }
};
