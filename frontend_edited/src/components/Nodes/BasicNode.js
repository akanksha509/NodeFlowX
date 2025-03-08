import React, { useEffect } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

const BasicNode = ({
  id,
  numberOfRightHandles = 0,
  numberOfLeftHandles = 0,
  heading = "This is a node",
  children,
}) => {
  const updateNodeInternals = useUpdateNodeInternals();

  // This is required for adding dynamic handles
  useEffect(() => {
    //id is nodeId
   updateNodeInternals(id);
  }, [numberOfRightHandles, numberOfLeftHandles]);

  const leftHandles = Array.from(
    { length: numberOfLeftHandles },
    (_, i) => i + 1
  );
  const rightHandles = Array.from(
    { length: numberOfRightHandles },
    (_, i) => i + 1
  );

  return (
    <div className="border border-green-700 p-2 min-w-52 max-w-60 bg-teal-50 rounded-xl hover:border-green-900 hover:bg-teal-100 focus:border-green-900 focus:bg-teal-100">
      {leftHandles.map((i) => {
        return (
          <Handle
            key={i}
            type="target"
            position={Position.Left}
            id={`${id}-left-${i}`}
            style={{
              top: `${(100 * i) / (numberOfLeftHandles + 1)}%`,
              height: "0.5rem",
              width: "0.5rem",
            }}
          />
        );
      })}
      <div>
        <span className="font-semibold">{heading}</span>
      </div>
      {children}
      {rightHandles.map((i) => {
        return (
          <Handle
            key={i}
            type="source"
            position={Position.Right}
            id={`${id}-right-${i}`}
            style={{
              top: `${(100 * i) / (numberOfRightHandles + 1)}%`,
              height: "0.5rem",
              width: "0.5rem",
            }}
          />
        );
      })}
    </div>
  );
};

export default BasicNode;
