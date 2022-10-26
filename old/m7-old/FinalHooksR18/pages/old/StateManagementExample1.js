let localStateValue;

export default function StateManagementExample1({ reRenderMe }) {
  function myUseState(initialValue) {
    if (localStateValue === undefined) {
      localStateValue = initialValue;
    }

    const setValue = (val) => {
      localStateValue = val;
    };

    const retVals = [localStateValue, setValue];
    return retVals;
  }

  const [cnt1, setCnt1] = myUseState(100);

  return (
    <div>
      <button
        onClick={() => {
          setCnt1(cnt1 + 1);
          reRenderMe();
        }}
      >
        {cnt1}
      </button>
    </div>
  );
}
