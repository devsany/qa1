import { useState } from "react";
import Ingest_data_section from "./ingest_data_section/Ingest_data_section";
const IngestData = () => {
  const [option_first_section, setOption_first_section] = useState([
    "HR",
    "Legal",
    "Common",
  ]);
  const [option_second_section, setOption_second_section] = useState([
    "Text-embedding...",
    "Text-embedding-2...",
  ]);
  return (
    <div>
      <Ingest_data_section
        content_header="Add documents in Batch"
        box_header="upload a document to add it to the Azure Storage Account, coumpte embeddings and add them to the Azure AI Search Index. Check your configuration for available document processors"
        componentType="drag-drop"
        option_first_section={option_first_section}
      />
      <Ingest_data_section
        content_header="Add URLs to the knowledge base"
        box_header="Add URLs ad then click on 'Computer Embeddings'"
        componentType="text-area"
        option_first_section={option_second_section}
      />
    </div>
  );
};

export default IngestData;
