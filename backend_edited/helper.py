from collections import defaultdict


def is_acyclic(edge_list):
    # Build the adjacency list from the edge list
    adjacency_list = defaultdict(list)
    all_nodes = set()  # Keep track of all unique nodes

    for source, target in edge_list:
        adjacency_list[source].append(target)
        all_nodes.add(source)
        all_nodes.add(target)

    # Helper function to perform DFS and detect a cycle
    def dfs(node, visited, rec_stack):
        visited[node] = True
        rec_stack[node] = True

        # Recur for all neighbors
        for neighbor in adjacency_list[node]:
            if not visited[neighbor]:  # Visit if not already visited
                if dfs(neighbor, visited, rec_stack):
                    return True
            elif rec_stack[neighbor]:  # Check for cycle
                return True

        rec_stack[node] = False  # Remove from recursion stack
        return False

    # Initialize visited and recursion stack dictionaries for all nodes
    visited = {node: False for node in all_nodes}
    rec_stack = {node: False for node in all_nodes}

    # Check each node for a cycle
    for node in all_nodes:
        if not visited[node]:
            if dfs(node, visited, rec_stack):
                return False  # Cycle detected

    return True  # No cycles detected, graph is acyclic
