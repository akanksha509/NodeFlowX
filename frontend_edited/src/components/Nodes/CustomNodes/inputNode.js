// inputNode.js

import { useState } from "react";
import BasicNode from "../BasicNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BasicNode id={id} heading="Input" numberOfRightHandles={1}>
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
            value={inputType}
            onChange={handleTypeChange}
            className="w-full mt-1 placeholder:text-slate-400 text-slate-700 text-sm rounded-md px-2 py-2 border-r-8 border-transparent outline outline-slate-200"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BasicNode>
  );
};
