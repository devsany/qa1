import React, { useEffect, useRef, useState } from "react";
import "./Config.css";
import ConfiguratinoFlow from "./ConfiguratinoFlow/ConfiguratinoFlow";
import Prompt from "./Prompt/Prompt";
import Fewshotexample from "./Fewshotexample/Fewshotexample";
import Table from "./Table/Table";

const Configuration = () => {
  const [ConfigurationFlowDropDownData, setConfigurationFlowDropDownData] =
    useState(["Custom", "BYOD"]);
  const [orchestrator, setOrchestrator] = useState([
    "openai_function",
    "langchain",
    "langchain",
    "prompt_flow",
  ]);

  const [assistant, setAssistant] = useState([
    "default",
    "contract assistant",
    "contract assistant",
  ]);
  return (
    <div>
      <div className="configuration_container">
        <ConfiguratinoFlow
          header="Conversational flow configuration"
          header_flow="Conversational flow"
          options={ConfigurationFlowDropDownData}
          questionIcon="Whether to use the custom conversational flow or BYOD conversational flow. Refer to the Conversational flow options README for more details."
        />
      </div>
      <div className="configuration_container">
        <ConfiguratinoFlow
          header="Orchestrator configuration"
          header_flow="Orchestrator strategy"
          options={orchestrator}
          questionIcon="Whether to use the custom conversational flow or BYOD conversational flow. Refer to the Conversational flow options README for more details."
        />
      </div>
      <div className="configuration_container">
        <ConfiguratinoFlow
          header="Assistant type configuration"
          header_flow="Assistant Type"
          options={assistant}
          questionIcon="Whether to use the default user prompt or the Contract Assistance user prompt. Refer to the Contract Assistance README for more details."
        />
      </div>
      <div className="configuration_container">
        <Prompt
          header="Prompt configuration"
          questionIcon="Whether to use a similar prompt format to Azure OpenAI On Your Data, including separate system and user messages, and a few-shot example."
        />
      </div>
      <div className="configuration_container">
        <Fewshotexample header="Assistant type configuration" />
      </div>
      <div className="configuration_container">
        <Table />
      </div>
    </div>
  );
};

export default Configuration;
