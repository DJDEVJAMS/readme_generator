const inquirer = require('inquirer');
const colors = require('colors');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');

function createREADME() {
    inquirer
        .prompt([
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
                message: "Provide a Table of Contents",
                name: "contents",
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
                type: 'checkbox',
                message: colors.brightMagenta('What is your preferred method of communication?'),
                name: 'stack',
                choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL']
            },
            {
                type: "input",
                message: "What are the name of the Contributors?",
                name: "contributors",
            },
            {
                type: "input",
                message: "What was the result of testing?",
                name: "testing",
            },
            {
                type: "input",
                message: "Are there any lingering questions?",
                name: "questions",
            },
        ]).then((data) => {
            const readmeContent =
`# ${data.title}

## Description
${data.description}

## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

## Technologies Used
${data.stack.join(', ')}

## Contributors
${data.contributors}

## Testing
${data.testing}

## Questions
${data.questions}
`;

            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.error(err) : console.log('README.md created successfully!')
            );
        });
}

createREADME();
