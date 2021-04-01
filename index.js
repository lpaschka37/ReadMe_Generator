// Declaration required for package to run
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Write README.md file
function writeToFile(content) {
    fs.writeFile('README.md', content, (err) =>
        err ? console.log(err) : console.log("Your README.md has been generated successfully!")
    );
}

// Initialize the application
function init() {
    // Prompt user for input response
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Project Description:',
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Install Instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage Instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'License:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense', ''],
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Contribution Guidelines:',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Test Instructions:',
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'GitHub Username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address:',
        },
    ]).then((response) => {
        // Assign variable to the user's response object
        const readmePageContent = generateMarkdown(response);
        // Call function to write the README.md file
        writeToFile(readmePageContent);
    });
}

// Call intializer function
init();
