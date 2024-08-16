// Import the inquirer module for prompting user input in the command line.
const inquirer = require('inquirer');

// Import the colors module to add color to the console output.
const colors = require('colors');

// Import the fs (file system) module to interact with the file system.
const fs = require('fs');

// Function to generate the license badge based on the user's choice.
function generatelicense(licensing) {
    // If the user selects 'None', return an empty string.
    if (licensing === 'None') {
        return '';
    }
    // If the user selects 'MIT', return the MIT license badge.
    if (licensing === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    // If the user selects 'Apache-2.0', return the Apache 2.0 license badge.
    if (licensing === 'Apache-2.0') {
        return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    // If the user selects 'PostgreSQL', return the PostgreSQL license badge.
    if (licensing === 'PostgreSQL') {
        return '[![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/licenses/PostgreSQL)';
    }
    // Add more license options as needed.
}

// Function to prompt the user for input and generate the README file.
function createREADME() {
    // Use inquirer to prompt the user with a series of questions.
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide the usage information:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['None', 'MIT', 'Apache-2.0', 'PostgreSQL'],
        },
    ]).then((data) => {
        // Generate the license badge based on the user's choice.
        const licenseBadge = generatelicense(data.license);

        // Create the content for the README file using template literals.
        const readmeContent = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}
`;

        // Write the generated content to a README.md file.
        fs.writeFile('README.md', readmeContent, (err) => {
            // Check if there is an error. If there is, log the error to the console.
            // Otherwise, log a success message indicating that the README.md file was created successfully.
            err ? console.error(err) : console.log('README.md created successfully!'.green);
        });
    });
}

// Call the function to create the README file.
createREADME();