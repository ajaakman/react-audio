import React from "react";
import Oscillator from "./Oscillator.jsx";
import LPFilter from "./LPFilter.jsx";
import { CompAddOsc, CompAddLP } from "./AudioAPI.ts";

export const AudioComps = ["Oscillator", "LPFilter"];

export const CreateComponent = type => {
  switch (type) {
    case "Oscillator":
      return CompAddOsc(440, 0.0);
    case "LPFilter":
      return CompAddLP();
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
