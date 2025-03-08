// textNode.js

import BasicNode from "../BasicNode";
import { useEffect, useState } from "react";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [occurrences, setOccurrences] = useState(1);
  const [numberOfRightHandles, setNumberOfRightHandles] = useState(1);

  // Adding dynamic handles
  useEffect(() => {
    setNumberOfRightHandles(occurrences);
  }, [occurrences]);

  const handleTextChange = (e) => {
    // analyze text and add right handles
    const text = e.target.value;
    const occurrences = text.match(/{{(.*?)}}/g);
    if (occurrences) {
      setOccurrences(occurrences.length);
    } else {
      setOccurrences(0);
    }
    setCurrText(e.target.value);
  };

  return (
    <BasicNode
      id={id}
      heading="Text"
      numberOfRightHandles={numberOfRightHandles}
    >
      <div className="mt-2">
        <label>
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            className="w-full mt-1 min-h-8 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow resize-none"
            style={{
              fieldSizing: "content",
            }}
          />
        </label>
      </div>
    </BasicNode>
  );
};
