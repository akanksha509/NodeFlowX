import { PipelineToolbar } from "./components/Toolbar/toolbar";
import { PipelineUI } from "./components/ui";
import { SubmitButton } from "./components/submit";

// This import is required for using custom themes by 3rd party libraries
import "reactflow/dist/base.css";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
