let localStateValue;

export default function StateManagementExample({reRenderMe}) {
  
  function myUseState(initialValue) {
    
    if (localStateValue === undefined) {
      localStateValue = 100;
    }
    
    const setValue = () => {
      localStateValue++;
    }
    
    const retVals = [localStateValue, setValue];
    return retVals;
  }

  const [cnt, setCnt] = myUseState("Hello");
  
  return (
    <div>
      <button onClick={() => {
        setCnt();
        reRenderMe();
      }}>{cnt}</button>
    </div>
  );
}
