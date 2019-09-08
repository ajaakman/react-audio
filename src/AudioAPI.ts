declare var Module: any;
export const Audio = Module;

export const InitAudio = Module.cwrap("InitAudio", "number", null);

export const MasterComp = Module.cwrap("MasterComp", "number", null);
export const MasterGetAmp = Module.cwrap("MasterGetAmp", "number", null);
export const MasterSetAmp = Module.cwrap("MasterSetAmp", null, ["number"]);

export const CompDelete = Module.cwrap("CompDelete", null, ["number"]);
export const CompSetOut = Module.cwrap("CompSetOut", "boolean", [
  "number",
  "number"
]);

export const CompAddOsc = Module.cwrap("CompAddOsc", "number", [
  "number",
  "number"
]);
export const OscGetFreq = Module.cwrap("OscGetFreq", "number", ["number"]);
export const OscSetFreq = Module.cwrap("OscSetFreq", null, [
  "number",
  "number"
]);
export const OscSetAmp = Module.cwrap("OscSetAmp", null, ["number", "number"]);
export const OscGetAmp = Module.cwrap("OscGetAmp", "number", ["number"]);

export const OscSetPhase = Module.cwrap("OscSetPhase", null, [
  "number",
  "number"
]);
export const OscGetPhase = Module.cwrap("OscGetPhase", "number", ["number"]);

export const OscSetWave = Module.cwrap("OscSetWave", null, [
  "number",
  "number"
]);
export const OscGetWave = Module.cwrap("OscGetWave", "number", ["number"]);

export const CompAddLP = Module.cwrap("CompAddLP", "number", null);

export const LPGetCutoff = Module.cwrap("LPGetCutoff", "number", ["number"]);
export const LPSetCutoff = Module.cwrap("LPSetCutoff", null, [
  "number",
  "number"
]);
