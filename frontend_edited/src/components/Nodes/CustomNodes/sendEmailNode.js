// sendEmailNode.js

import { useState } from "react";
import BasicNode from "../BasicNode";

export const SendEmailNode = ({ id, data }) => {
  const [currEmail, setCurrEmail] = useState("");
  const handleEmailChange = (e) => {
    setCurrEmail(e.target.value);
  };
  return (
    <BasicNode id={id} heading="Send Email" numberOfLeftHandles={1}>
      <div className="mt-2">
        <label for="email">
          Email Id:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@mail.com"
            value={currEmail}
            onChange={handleEmailChange}
            className="w-full mt-1 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
        </label>
      </div>
    </BasicNode>
  );
};
