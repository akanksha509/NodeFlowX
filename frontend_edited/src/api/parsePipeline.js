const API_URL = process.env.REACT_APP_API_URL;

export async function parsePipelineAPI(edges, nodes) {
  const result = await fetch(`${API_URL}/pipelines/parse`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ edge_list: edges, node_list: nodes }),
  });

  const content = await result.json();

  return content;
}
