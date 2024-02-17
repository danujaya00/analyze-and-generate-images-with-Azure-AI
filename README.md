# Analyze and Generate Images with Azure AI

This repository demonstrates the integration of Azure AI for analyzing and generating images through a web application. Utilizing Azure Cognitive Services for image analysis and leveraging OpenAI's API for image generation, it provides a seamless experience for users to interact with AI capabilities.

## Features

- **Image Analysis**: Analyze images to extract information, identify content, and understand visual features using Azure Cognitive Services.
- **Image Generation**: Generate images based on textual prompts through OpenAI's powerful API, offering creative and relevant visual representations.

## Structure

- `src/azure-image-analysis.js` - Contains functions for analyzing images using Azure's Computer Vision.
- `src/azure-image-generation.js` - Implements image generation functionality using OpenAI's API.
- `src/App.js` - The main React component handling the application logic.
- `package.json` - Lists project dependencies and scripts for running the application.

## Setup and Configuration

1. **Clone the repository:**
```bash
git clone https://github.com/danujaya00/analyze-and-generate-images-with-Azure-AI.git
```
2. **Install dependencies:**
```bash
npm install
```
3. **Obtain API Keys:**
  Sign up for Azure Cognitive Services and OpenAI to get your API keys.

4. **Configure Environment:**
  Update the .env file with your API keys and endpoints:

    `YOUR_ANALYSIS_SUBSCRIPTION_KEY`
    `YOUR_ANALYSIS_ENDPOINT`
    `YOUR_GENERATION_API_KEY`
    `YOUR_GENERATION_ENDPOINT`
   
6. **Run the Application:**
   ```bash
   npm start
   ```
## Deployment

This project is configured for deployment to Azure Static Web Apps, leveraging GitHub Actions for CI/CD.

- **GitHub Actions**: The `.github/workflows` directory contains the workflow file for deploying the application to Azure Static Web Apps.
- **Configuration**: Update `staticwebapp.config.json` as needed to customize routing and fallback behavior for your application.

To deploy your own instance:

1. Fork this repository.
2. Set up Azure Static Web Apps and link it to your GitHub repository.
3. Configure the environment variables in your deployment settings.
4. Push changes or merge a pull request to trigger the deployment workflow.

## Contributions

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
