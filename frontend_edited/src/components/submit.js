// submit.js

import { useStore } from "../store/store";
import { parsePipelineAPI } from "../api/parsePipeline";
import Alert from "./Alert/Alert";
import { useState } from "react";
export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const dismissAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  const handleSubmitForm = async () => {
    // create edge list
    const edgeList = [];

    edges.forEach((edge) => {
      let source = edge.source;
      let target = edge.target;
      // adding directed edge (sourceHandle, targetHandle);
      edgeList.push([source, target]);
    });

    // if no nodes do nothing
    // can be customized according to our need
    if (nodes.length === 0) {
      setAlertType("error");
      setAlertMessage("Add some nodes");
      setShowAlert(true);
      return;
    }

    // Checking if cycle is present or not in the graph using API.
    try {
      
      const data = await parsePipelineAPI(edgeList, nodes);
      const message = `Pipeline Summary:<br/><br/>Number of Nodes: ${
        data.num_nodes
      }<br/>Number of Edges: ${data.num_edges}<br/>Is Acyclic: ${
        data.is_dag ? "Yes" : "No"
      }`;
      setAlertType("success");
      setAlertMessage(message);
      setShowAlert(true);
    } catch (error) {
      const message = "Something went wrong!";
      console.log(error)
      setAlertType("error");
      setAlertMessage(message);
      setShowAlert(true);
    }
  };

  return (
    <div className="flex items-center justify-center m-8 relative">
      {showAlert ? (
        <Alert
          onDismiss={dismissAlert}
          message={alertMessage}
          type={alertType}
        />
      ) : (
        ""
      )}
      <button
        type="submit"
        onClick={handleSubmitForm}
        className="bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      >
        Submit
      </button>
    </div>
  );
};
