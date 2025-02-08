import React from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop"; // Import your Drag and Drop component
import TextArea from "../TextArea/TextArea";

const DynamicComponentRenderer = ({ componentType, textarea_placeholder }) => {
  switch (componentType) {
    case "drag-drop":
      return <DragAndDrop />;
    case "text-area":
      return <TextArea textarea_placeholder={textarea_placeholder} />;
    default:
      return <h2>No Component Selected</h2>;
  }
};

export default DynamicComponentRenderer;
