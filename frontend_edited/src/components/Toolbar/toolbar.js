// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-3">
      <div className="mt-[20px] flex flex-wrap gap-3 items-center justify-center">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="colorPicker" label="Color Picker" />
        <DraggableNode type="fileLoader" label="File Loader" />
        <DraggableNode type="vectorDBLoader" label="VectorDB Loader" />
        <DraggableNode type="vectorDBReader" label="VectorDB Reader" />
        <DraggableNode type="sendEmail" label="Send Email" />
      </div>
    </div>
  );
};
