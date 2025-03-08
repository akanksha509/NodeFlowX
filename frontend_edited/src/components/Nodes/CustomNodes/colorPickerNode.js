// colorPickerNode.js

import { useState } from "react";
import BasicNode from "../BasicNode";

export const ColorPickerNode = ({ id, data }) => {
  const [color, setColor] = useState("#000000");

  return (
    <BasicNode
      id={id}
      heading="Color Picker"
      numberOfLeftHandles={1}
      numberOfRightHandles={1}
    >
      <div className="mt-2">
        <div>
          Color Picked is: <strong>{color}</strong>
        </div>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          defaultValue={color}
        />
      </div>
    </BasicNode>
  );
};
