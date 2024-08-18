// Import the inquirer module for prompting user input in the command line.
const inquirer = require("inquirer");

// Import the colors module to add color to the console output.
const colors = require("colors");

// Import the fs (file system) module to interact with the file system.
const fs = require("fs");

// Function to generate the license badge based on the user's choice.
function generatelicense(licensing) {
  // If the user selects 'None', return an empty string.
  if (licensing === "None") {
    return "";
  }
  // If the user selects 'MIT', return the MIT license badge.
  if (licensing === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  // If the user selects 'Apache-2.0', return the Apache 2.0 license badge.
  if (licensing === "Apache-2.0") {
    return "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  }
  // If the user selects 'PostgreSQL', return the PostgreSQL license badge.
  if (licensing === "PostgreSQL") {
    return "![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue.svg)";
  }
  // Add more license options as needed.
}

// Function to prompt the user for input and generate the README file.
function createREADME() {
  // Use inquirer to prompt the user with a series of questions.
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
        },
      {
        type: "input",
        name: "installation",
        message: "Provide the installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide the usage information:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["None", "MIT", "Apache-2.0", "PostgreSQL"],
      },
      {
        type: "input",
        message: "What are the names of the Contributors?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What was the result of testing?",
        name: "testing",
    },
    {
        type: "input",
        message: "What is your GitHub ID?",
        name: "gitHubID",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAdd",
    },
    {
        type: "input",
        message: "What are the names of the Contributors?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What was the result of testing?",
        name: "testing",
    },
    {
        type: "input",
        message: "What is your GitHub ID?",
        name: "gitHubID",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAdd",
    }
]).then((data) => {
    const licenseBadge = generatelicense(data.license);

    const readmeContent =
`# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributors](#contributors)
- [Testing](#testing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Licensing
${licenseBadge}

## Contributors
${data.contributors}

## Testing
${data.testing}

## Questions
Any lingering questions? Please contact me:
- GitHub: [${data.gitHubID}](https://github.com/${data.gitHubID})
- Email: ${data.emailAdd}
`;

      // Construct the file path for the README.md file.
      const path = require('path');
      const filePath = path.join(__dirname, (`${data.title}`+ " "+"README.md"));

      // Write the generated content to a README.md file.
      fs.writeFile(filePath, readmeContent, (err) => {
        // Check if there is an error. If there is, log the error to the console.
        // Otherwise, log a success message indicating that the README.md file was created successfully.
        err
          ? console.error(err)
          : console.log("README.md created successfully!".green);
      });
    });
}

// Call the function to create the README file.
createREADME();
