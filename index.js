
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseBadge = license => {
    if (license === 'BSD') {
      return `\r[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    }
    else if (license === 'MIT') {
      return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    else if (license === 'GNU') {
      return `\r[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
  }

// TODO: Create an array of questions for user input
const info = [
    {
        name: "title",
        type: "input",
        message: "What is the title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must have a title");
                return false;
            }
        }
    },
    {
        name: "description",
        type: "input",
        message: "What is the description?",
    },
    {
        name: "install",
        type: "input",
        message: "What are the installation instructions?",
    },
    {
        name: "usage",
        type: "input",
        message: "What is the usage information?",
    },
    {
        name: "contribution",
        type: "input",
        message: "What are the contribution guidelines?",
    },
    {
        name: "test",
        type: "input",
        message: "What are the test instructions?",
    },
    {
        name: "license",
        type: "list",
        message: "Do you want to include a license?",
        choices: ["BSD", "MIT", "GNU", "none"],
    },
    {
        name: "username",
        type: "input",
        message: "Enter your GitHub username",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter a GitHub username");
                return false;
            }
        }
    },
    {
        name: "email",
        type: "input",
        message: "What is my email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = data.title + data.description + data.toc + data.installation + data.usage + data.contribution + data.license + data.test + data.questions
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
    
        console.log("The file was succesfully saved!");
    }); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(info)
    .then(answers => {
        const data = {
            title: `# ${answers.title}\n\n`,
            description: `## Description\n\n ${answers.description}\n\n`,
            toc: `## Table of Contents\n\n - [Installation](#installation)\n - [Usage](#usage)\n - [Contribution](#contribution)\n - [License](#license)\n - [Test](#test)\n - [Questions](#questions)\n`,
            installation: `## Installation\n\n ${answers.install}\n\n`,
            usage: `## Usage\n\n ${answers.usage}\n\n`,
            contribution: `## Contribution\n\n ${answers.contribution}\n\n`,
            license: `## License\n\n ${renderLicenseBadge(answers.license)}\n\n`,
            test: `## Tests\n\n ${answers.test}\n\n`,
            questions: `## Questions\n\n Contact Me:\n GitHub: https://github.com/${answers.username}\n Email: ${answers.email}\n`,
        }
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
