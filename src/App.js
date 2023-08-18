import React, { useState } from "react";
import Tag from "./Components/Tag.jsx";

const App = () => {
  const [treeData, setTreeData] = useState({
    name: "Root",
    data: "Root Data",
    children: [],
  });

  const updateTag = (updatedTag) => {
    setTreeData((prevData) => {
      const updatedTree = updateTagRecursively(prevData, updatedTag);
      return { ...updatedTree };
    });
  };

  const updateTagRecursively = (node, updatedTag) => {
    if (node === updatedTag) {
      return updatedTag;
    }
    if (node.children && node.children.length > 0) {
      const updatedChildren = node.children.map((child) =>
        updateTagRecursively(child, updatedTag)
      );
      return { ...node, children: updatedChildren };
    }
    return node;
  };

  const addChild = (parentTag, index = -1) => {
    const newChild = {
      name: "New Child",
      data: "hello world",
      children: [],
    };

    setTreeData((prevData) => {
      const updatedTree = { ...prevData };

      if (index === -1) {
        parentTag.children.push(newChild);
      } else {
        parentTag.children.splice(index + 1, 0, newChild);
      }

      return { ...updatedTree };
    });
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <Tag tag={treeData} onUpdate={updateTag} onAddChild={addChild} />
      <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer", marginTop: "10px" }}>
        Export
      </button>
    </div>
    </>
  );
};

export default App;
