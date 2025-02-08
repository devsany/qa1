import React, { useRef, useState } from "react";
import "./ingest_data_section.css";
import Wrapper from "../../Configuration/Wrapper";
import DynamicComponentRenderer from "../DynamicComponentRenderer/DynamicComponentRenderer";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import DropSelection from "../dropSelection/DropSelection";

const Ingest_data_section = (props) => {
  const { box_header, componentType, option_first_section, content_header } =
    props;

  const [options, setOption] = useState(["HR", "Legal", "Common"]);
  const [file, setFile] = useState(null);
  const handleReprocess = () => {
    console.log(file);
  };
  return (
    <Wrapper content_header={content_header}>
      <div className="ingest-card-one">
        <div className="ingest-header-content">{box_header}</div>
        <DynamicComponentRenderer
          componentType={componentType}
          textarea_placeholder="PLACE YOUR URLS HERE SEPARATED BY A NEW LINE"
        />
        <div className="reprocess-main">
          <DropSelection
            options={option_first_section}
            dropSelectionHeader="Content mapping"
          />
          <button
            disabled={!file}
            className="reprocess"
            onClick={handleReprocess}
          >
            Reprocess all documents in the Azure Storage account
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Ingest_data_section;
