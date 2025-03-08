// outputNode.js

import { useState } from "react";
import BasicNode from "../BasicNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BasicNode id={id} heading="Output" numberOfLeftHandles={1}>
      <div className="flex flex-col gap-2 mt-2">
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="w-full mt-1 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
        </label>
        <label>
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="w-full mt-1 placeholder:text-slate-400 text-slate-700 text-sm rounded-md px-2 py-2 border-r-8 border-transparent outline outline-slate-200"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BasicNode>
  );
};
