const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

function generatelicense(licensing) {
    if (licensing === 'None') {
        return '';
    }
    if (licensing === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (licensing === 'Apache-2.0') {
        return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (licensing === 'PostgreSQL') {
        return '[![License: PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/licenses/PostgreSQL)';
    }
}

function createREADME() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is this repo Named (exact)?",
                name: "repoName",
            },
            {
                type: "input",
                message: "What is this README's Title?",
                name: "title",
            },
            {
                type: "input",
                message: "Describe this project.",
                name: "description",
            },
            {
                type: "input",
                message: "Describe the installation process.",
                name: "installation",
            },
            {
                type: "input",
                message: "What is the usage case for this?",
                name: "usage",
            },
            {
                type: 'list',
                message: colors.brightMagenta('What licensing did you use?'),
                name: 'licensing',
                choices: ['None', 'MIT', 'Apache-2.0', 'PostgreSQL']
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
        ]).then((data) => {
            const licenseBadge = generatelicense(data.licensing);

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

            fs.writeFile('../README.md', readmeContent, (err) =>
                err ? console.error(err) : console.log('README.md created successfully!')
            );
        });
}

createREADME();
