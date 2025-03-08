// fileLoaderNode.js

import BasicNode from "../BasicNode";

export const FileLoaderNode = ({ id, data }) => {
  return (
    <BasicNode
      id={id}
      heading="File Loader"
      numberOfLeftHandles={1}
      numberOfRightHandles={1}
    >
      <div>
        <span>Reads data from a file</span>
      </div>
    </BasicNode>
  );
};
