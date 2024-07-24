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
            message: "Describe the instalation process.",
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
            choices:['HTML', 'CSS', 'JavaScript','PostgreSQL']
        },
        {
            type: "input",
            message: "What are the name of the Contributors?",
            name: "contributors",

        },
        {
            type: "input",
            message: "What was the results of testing?",
            name: "testing",

        },
        {
            type: "input",
            message: "Are there any lingering questions?",
            name: "questions",

        },
    ]).then((data) => { const readmdContent =

        `
        # ${data.title}
        
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
            createREADME ();
 
        
        // Function to initialize app
        // createREADME();
    // }
    //     // crateing a file name
    //     // const filename = `${data.name.toLowerCase().split('').join('')}.json`;})

    //    // Return the contents of 'data.csv' as a string in the variable "data"
    //     fs.writeFile(README.md, data, (err) => err ? console.log(err) : console.error(err)));

    // function to initalize app


        // Use user feedback for... whatever!!
//     })
//     .catch ((error) => {
//     if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//     } else {
//         // Something else went wrong
//     }
// });



    // < !DOCTYPE html >
    // <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                     <title>Prototype Example</title>
    //                 </head>
    //                 <body>
    //                     <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>

    //                     <script src="./index.js"></script>
    //                 </body>
    //             </html>

// .prompt([
//     function readMe(title, description, contents, instilation, usage, license, contributing, tests, questions) {
//         this.title = title;
//         this.description = description;
//         this.contents = contents;
//         this.instilation = instilation;
//         this.usage = usage;
//         this.license = license;
//         this.contributing = contributing;
//         this.tests = tests;
//         this.questions = questions;

// (`##"${title}"`)

//     (`## Description
// '${description}'`)

//     (`## Table of Contents
// '${contents}"`)

//     (`##Installation
// '${installation}'`)

//     (`## How to Use
// '${usage}'`)

//     (`## Licenses
// '${licenses}'`)

//     (`## Collaborators
// '${contributors}'`)

//     (`## Testing
// '${testing}'`)

//     (`## Question
// '${questions}'`)


