// llmNode.js

import BasicNode from "../BasicNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BasicNode
      id={id}
      heading="Input"
      numberOfLeftHandles={2}
      numberOfRightHandles={1}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BasicNode>
  );
};
