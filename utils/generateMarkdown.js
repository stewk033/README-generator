// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return
  // # ${answers.title}

`![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repo}?style=flat&logo=appveyor) ![Badge for GitHub repo size](https://img.shields.io/github/repo-size/${answers.username}/${answers.repo}?style=flat&logo=appveyor)`
}

module.exports = generateMarkdown;
