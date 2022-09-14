
const localStateValues = [];
let localStateValueIndex = 0;

export default function myUseState(initialValue, reRenderMe) {
  const localStateValueIndexLocal = localStateValueIndex; // capture in closure
  if (localStateValues[localStateValueIndex] === undefined) {
    localStateValues[localStateValueIndexLocal] = initialValue;
  }
  const setValue = (val) => {
    localStateValues[localStateValueIndexLocal] = val;
    reRenderMe();
  };
  localStateValueIndex++; // update global
  
  const retVals = [localStateValues[localStateValueIndexLocal], setValue];
  return retVals;
}
