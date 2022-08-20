let localStateValue;

export default function StateManagementExample({reRenderMe}) {
  
  function myUseState(initialValue) {
    
    if (localStateValue === undefined) {
      localStateValue = 100;
    }
    const getValue = () => {
      return localStateValue
    }
    const setValue = () => {
      localStateValue++;
    }
    
    const retVals = [getValue, setValue];
    return retVals;
  }

  const [cnt, incrementCnt] = myUseState("Hello");
  
  return (
    <div>
      <button onClick={(event) => {
        incrementCnt();
        reRenderMe();
      }}>{cnt}</button>
    </div>
  );
}
