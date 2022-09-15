let localStateValue = "";

export default function UseMyState({initial}) {
  if (initial != undefined) {
    localStateValue = initial;
  }
  const setValue = (val) => {
    localStateValue = val;
  };
  const retVals = [localStateValue, setValue];
  return retVals;
  
}
