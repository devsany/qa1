import React, { useState } from "react";
import FewShotExampleInbuildCard from "./FewShotExampleInbuildCard/FewShotExampleInbuildCard";
import Wrapper from "../Wrapper";

const Fewshotexample = (props) => {
  const [toggleBox1, setToggleBox1] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const handleBoxClick = () => {
    setToggleBox1(!toggleBox1);
  };
  return (
    <div>
      <Wrapper content_header={props.header}>
        <div>
          <div>
            The following can be used to configure a few-shot example to be used
            in the answering prompt. Only used if Azure OpenAI On Your Data
            prompt format is enabled. The configuration is optional, but all
            three options must be provided to be valid.
          </div>
          <FewShotExampleInbuildCard
            shotAnswerType="Documents"
            questionHeader="JSON object containing documents retrieved from the knowledge base, in the following format:"
            text='{
  "retrieved_documents": [
    {
      "[doc1]": {
        "content": "Dual Transformer Encoder (DTE) DTE (https://dev.azure.com/TScience/TSciencePublic/_wiki/wikis/TSciencePublic.wiki/82/Dual-Transformer-Encoder) DTE is a general pair-oriented sentence representation learning framework based on transformers. It provides training, inference and evaluation for sentence similarity models. Model Details DTE can be used to train a model for sentence similarity with the following features: - Build upon existing transformer-based text representations (e.g.TNLR, BERT, RoBERTa, BAG-NLR) - Apply smoothness inducing technology to improve the representation robustness - SMART (https://arxiv.org/abs/1911.03437) SMART - Apply NCE (Noise Contrastive Estimation) based similarity learning to speed up training of 100M pairs We use pretrained DTE model"
      }
    },
    {
      "[doc2]": {
        "content": "trained on internal data. You can find more details here - Models.md (https://dev.azure.com/TScience/_git/TSciencePublic?path=%2FDualTransformerEncoder%2FMODELS.md&version=GBmaster&_a=preview) Models.md DTE-pretrained for In-context Learning Research suggests that finetuned transformers can be used to retrieve semantically similar exemplars for e.g. KATE (https://arxiv.org/pdf/2101.06804.pdf) KATE . They show that finetuned models esp. tuned on related tasks give the maximum boost to GPT-3 in-context performance. DTE have lot of pretrained models that are trained on intent classification tasks. We can use these model embedding to find natural language utterances which are similar to our test utterances at test time. The steps are: 1. Embed"
      }
    },
    {
      "[doc3]": {
        "content": "train and test utterances using DTE model 2. For each test embedding, find K-nearest neighbors. 3. Prefix the prompt with nearest embeddings. The following diagram from the above paper (https://arxiv.org/pdf/2101.06804.pdf) the above paper visualizes this process: DTE-Finetuned This is an extension of DTE-pretrained method where we further finetune the embedding models for prompt crafting task. In summary, we sample random prompts from our training data and use them for GPT-3 inference for the another part of training data. Some prompts work better and lead to right results whereas other prompts lead"
      }
    },
    {
      "[doc4]": {
        "content": "to wrong completions. We finetune the model on the downstream task of whether a prompt is good or not based on whether it leads to right or wrong completion. This approach is similar to this paper: Learning To Retrieve Prompts for In-Context Learning (https://arxiv.org/pdf/2112.08633.pdf) this paper: Learning To Retrieve Prompts for In-Context Learning . This method is very general but it may require a lot of data to actually finetune a model to learn how to retrieve examples suitable for the downstream inference model like GPT-3."
      }
    }
  ]
}'
          />

          <FewShotExampleInbuildCard
            shotAnswerType="User Question"
            questionHeader="The example user question."
            text="What features does the Dual Transformer Encoder (DTE) provide for sentence similarity models and in-context learning?"
          />
          <FewShotExampleInbuildCard
            shotAnswerType="User Answer"
            questionHeader="The expected answer."
            text="The Dual Transformer Encoder (DTE) is a framework for sentence representation learning that can be used to train, infer, and evaluate sentence similarity models[doc1][doc2]. It builds upon existing transformer-based text representations and applies smoothness inducing technology and Noise Contrastive Estimation for improved robustness and faster training[doc1]. DTE also offers pretrained models for in-context learning, which can be used to find semantically similar natural language utterances[doc2]. These models can be further finetuned for specific tasks, such as prompt crafting, to enhance the performance of downstream inference models like GPT-3[doc2][doc3][doc4]. However, this finetuning may require a significant amount of data[doc3][doc4]."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Fewshotexample;
