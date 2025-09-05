import { useState } from "react";

export default function FileExplorer({ data }) {
  return (
    <div>
      {data.map((node) => (
        <FileNode node={node} />
      ))}
    </div>
  );
}

function FileNode({ node }) {
  const isFolder = node.children;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginLeft: "10px" }}>
      <div
        style={{ fontWeight: isFolder ? "bold" : "" }}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        {node.name} {isFolder ? "[+]" : ""}
      </div>
      <div>{isFolder && isOpen && <FileExplorer data={node.children} />}</div>
    </div>
  );
}
