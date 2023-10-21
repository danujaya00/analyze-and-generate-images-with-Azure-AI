import React, { useState, useEffect } from "react";
import "./index.css";
import {
  analyzeImage,
  isConfigured as isAnalysisConfigured,
} from "./azure-image-analysis";
import {
  generateImage,
  isConfigured as isGenerationConfigured,
} from "./azure-image-generation";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [generationResult, setGenerationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConfigured, setIsConfigured] = useState(true);

  useEffect(() => {
    const analysisConfigured = isAnalysisConfigured(
      "YOUR_ANALYSIS_SUBSCRIPTION_KEY",
      "YOUR_ANALYSIS_ENDPOINT"
    );
    const generationConfigured = isGenerationConfigured(
      "YOUR_GENERATION_API_KEY",
      "YOUR_GENERATION_ENDPOINT"
    );

    setIsConfigured(analysisConfigured && generationConfigured);
  }, []);

  const handleImageAction = async () => {
    try {
      setLoading(true);
      setError(null);

      const analysisSubscriptionKey = "81be19efd15e419e93d9aefe304f0278";
      const analysisEndpoint = "https://asurevision.cognitiveservices.azure.com/";
      const openaiApiKey = "4fc2ce42a8934fa082e8f97a023cdc3c";
      const openaiEndpoint = "https://openaiforapp.openai.azure.com/";

      if (!isConfigured) {
        throw new Error(
          "The app is not properly configured. Please set the required environment variables."
        );
      }

      if (inputValue.startsWith("http")) {
        const result = await analyzeImage(
          inputValue,
          analysisSubscriptionKey,
          analysisEndpoint
        );
        setAnalysisResult(result);
        setGenerationResult(null);
      } else {
        const result = await generateImage(
          inputValue,
          openaiApiKey,
          openaiEndpoint
        );
        setGenerationResult(result);
        setAnalysisResult(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Processing...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (analysisResult) {
      return (
        <div>
          <p>Image URL: {inputValue}</p>
          <p>Analysis Result:</p>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      );
    }

    if (generationResult) {
      return (
        <div>
          <p>Generation Prompt: {inputValue}</p>
          <p>Generated Image URL: {generationResult.url}</p>
          <p>Generation Result:</p>
          <pre>{JSON.stringify(generationResult, null, 2)}</pre>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app-container">
      <h1>Image Analyzer and Generator</h1>
      <div>
        <label htmlFor="inputValue">Enter Image URL or Textual Prompt:</label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleImageAction}>Process Image</button>
      </div>
      {isConfigured ? (
        <DisplayResults />
      ) : (
        <p>
          Warning: The app is not properly configured. Please set the required
          environment variables.
        </p>
      )}
    </div>
  );
}

export default App;
