import UI from "../src/components/misc/ui";
import ContextAndStateManager from "../src/components/misc/demoContextDedicated";

export default function App() {
  return (
    <ContextAndStateManager>
      <UI />
    </ContextAndStateManager>
  );
}
