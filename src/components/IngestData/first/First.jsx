import React, { useRef, useState } from "react";
import "./first.css";

const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200MB

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please reload the page.</h2>;
    }
    return this.props.children;
  }
}

const First = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploadMethod, setUploadMethod] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState(["HR", "Legal", "Common"]);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    setSearchQuery(option);
    setIsOpen(false);
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Drag and Drop
  const handleIngestDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateFile(droppedFile, "Drag and Drop");
    }
  };

  // Handle File Selection via Browse Button
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      validateFile(selectedFile, "Browse");
    }
  };

  // Validate File Size and Set File
  const validateFile = (file, method) => {
    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds 200MB. Please select a smaller file.");
      setFile(null);
      setUploadMethod("");
    } else {
      setFile(file);
      setUploadMethod(method);
      setError("");
    }
  };
  const handleReprocess = () => {
    console.log(file);
  };
  return (
    <ErrorBoundary>
      <div className="ingest-card-one">
        <div className="ingest-header-content">
          Upload a document to add it to the Azure storage Account, compute
          embeddings, and add them to the Azure AI Search index.
        </div>

        <div className="drop-and-browse-file-main">
          {/* Drag and Drop Area */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={handleIngestDrag}
            onDrop={handleDrop}
            className="drop-area"
          >
            <div className="icon-main">
              <div className="icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
              </div>
            </div>

            <div className="text-content">
              <h2>Drag and Drop files here</h2>
              <p>
                Limit 200MB per file * PDF, TXT, URL, MD, HTML, HTM, DOCX, JPG,
                JPEG, PNG
              </p>
            </div>
          </div>

          {/* Browse File Area */}
          <label className="browse-button">
            <div className="browse-area">
              Browse files
              <input type="file" onChange={handleFileSelect} hidden />
            </div>
          </label>
        </div>

        {/* File Name & Upload Status */}
        {file && (
          <div className="file-info">
            <p>
              <strong>File:</strong> {file.name} ({uploadMethod})
            </p>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <div className="reprocess-main">
          <div className="dropdown-container" ref={dropdownRef}>
            {/* Input Field */}
            <div className="input-box" onClick={() => setIsOpen(!isOpen)}>
              <input
                type="text"
                // className="input-ingest"
                placeholder="Choose an option"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="arrow">&#9662;</span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="dropdown-options">
                {/* Displaying filtered options using .map */}
                <div className="options-list">
                  {filteredOptions &&
                    filteredOptions.map((option, index) => (
                      <div
                        key={index}
                        className="option-item"
                        onClick={() => handleSelectOption(option)}
                      >
                        {option}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          <button
            disabled={!file}
            className="reprocess"
            onClick={handleReprocess}
          >
            Reprocess all documents in the Azure Storage account
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default First;
