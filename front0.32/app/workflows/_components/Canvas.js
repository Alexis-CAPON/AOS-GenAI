// src/components/Canvas.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNode } from "../redux/actions";

const Canvas = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);

  const handleDrop = (event) => {
    event.preventDefault();
    const nodeType = event.dataTransfer.getData("nodeType");
    const newNode = {
      id: Date.now(),
      type: nodeType,
      position: { x: event.clientX, y: event.clientY },
    };
    dispatch(addNode(newNode));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="canvas"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: "100%", height: "100vh", border: "1px solid #ccc" }}
    >
      {nodes.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Canvas;
