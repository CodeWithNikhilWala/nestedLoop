import React, { useState } from "react";

const Tag = ({ tag, onUpdate, onAddChild, onUpdateChild }) => { 
  const [collapsed, setCollapsed] = useState("");
  const [editing, setEditing] = useState("");
  const [newName, setNewName] = useState("");

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
    <div style={{ border: "1px solid #ccc", borderRadius: "4px", padding: "10px", margin: "5px", backgroundColor: "#f9f9f9" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
        <button style={{ marginRight: "5px", backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "14px" }} onClick={handleCollapse}>
          {collapsed ? ">" : "v"}
        </button>
        {editing ? (
          <input
            style={{ width: "100%", fontWeight: "bold", border: "none", outline: "none" }}
            type="text"
            value={newName}
            onChange={handleNameChange}
          />
        ) : (
          <div style={{ cursor: "pointer", fontWeight: "bold" }} >
            {tag.name}
          </div>
        )}
      </div>
      {!collapsed && (
        <div style={{ marginBottom: "5px" }}>
          <input
            style={{ width: "100%", border: "none", outline: "none", padding: "5px" }}
            type="text"
            value={tag.data}
            
          />
          <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer",marginTop:"10px" }} onClick={() => onAddChild(tag)}>
            Add Child
          </button>
        </div>
      )}
      {!collapsed && (
        <div style={{ marginLeft: "20px" }}>
          {tag.children.map((child, index) => (
            <Tag
              key={index}
              tag={child}
              onAddChild={(parent) => onAddChild(parent, index)}
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Tag;
