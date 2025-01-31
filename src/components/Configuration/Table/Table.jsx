import React, { useState } from "react";
import Wrapper from "../Wrapper";

const Table = () => {
  const [toggleBox1, setToggleBox1] = useState(true);
  // Initial table headers
  const [headers, setHeaders] = useState(["Name", "Age", "City"]);

  // Initial table data
  const [data, setData] = useState([
    { Name: "John", Age: 25, City: "New York" },
    { Name: "Alice", Age: 30, City: "Los Angeles" },
    { Name: "Bob", Age: 28, City: "Chicago" },
  ]);

  // Track which header is being edited
  const [editingHeaderIndex, setEditingHeaderIndex] = useState(null);
  const [newHeaderValue, setNewHeaderValue] = useState("");

  // Handle double-click to enable editing mode
  const handleHeaderDoubleClick = (index) => {
    setEditingHeaderIndex(index);
    setNewHeaderValue(headers[index]);
  };

  // Handle header change when input field is modified
  const handleHeaderChange = (e) => {
    setNewHeaderValue(e.target.value);
  };

  // Handle pressing Enter or clicking outside to save changes
  const handleHeaderBlur = (index) => {
    if (newHeaderValue.trim() !== "") {
      const updatedHeaders = [...headers];
      const oldHeader = headers[index];
      updatedHeaders[index] = newHeaderValue;

      // Update headers
      setHeaders(updatedHeaders);

      // Update data keys (map old keys to new keys)
      const updatedData = data.map((row) => {
        const newRow = { ...row };
        newRow[newHeaderValue] = newRow[oldHeader];
        delete newRow[oldHeader];
        return newRow;
      });

      setData(updatedData);
    }
    setEditingHeaderIndex(null);
  };

  const handleBoxClick = () => {
    setToggleBox1(!toggleBox1);
  };
  return (
    <div>
      <Wrapper content_header="Document processing configuration">
        This is table
      </Wrapper>
    </div>
  );
};

export default Table;
