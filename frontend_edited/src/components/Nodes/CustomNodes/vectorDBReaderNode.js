// vectorDBReaderNode.js

import BasicNode from "../BasicNode";

export const VectorDBReaderNode = ({ id, data }) => {
  return (
    <BasicNode
      id={id}
      heading="VectorDB Reader"
      numberOfLeftHandles={1}
      numberOfRightHandles={1}
    >
      <div>
        <span>Read vectorized document.</span>
      </div>
    </BasicNode>
  );
};
