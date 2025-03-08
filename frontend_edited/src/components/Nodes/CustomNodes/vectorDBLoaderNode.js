// vectorDBLoaderNode.js

import BasicNode from "../BasicNode";

export const vectorDBLoaderNode = ({ id, data }) => {
  return (
    <BasicNode
      id={id}
      heading="VectorDB Loader"
      numberOfLeftHandles={1}
      numberOfRightHandles={1}
    >
      <div>
        <span>Vectorizes the document.</span>
      </div>
    </BasicNode>
  );
};
